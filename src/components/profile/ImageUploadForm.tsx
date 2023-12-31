import { ImageUploadButton } from '@/assets'
import { useUserInfo } from '@/hooks'
import { useEffect, useState } from 'react'

export const ImageUploadForm = ({ onChange, selectedImage }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null)
  const userProfile = useUserInfo()

  useEffect(() => {
    if (userProfile?.userInfo?.avatar_url) {
      setImagePreviewUrl(userProfile.userInfo.avatar_url)
    }
  }, [userProfile.userInfo])

  useEffect(() => {
    if (!selectedImage) {
      setImagePreviewUrl(null)
    }

    if (selectedImage instanceof Blob) {
      const imageUrl = URL.createObjectURL(selectedImage)
      setImagePreviewUrl(imageUrl)

      return () => URL.revokeObjectURL(imageUrl)
    }
    return
  }, [selectedImage])

  return (
    <div>
      <div
        className={`relative overflow-hidden w-116 h-116 desktop:w-200 desktop:h-200`}>
        <img
          src={imagePreviewUrl || selectedImage}
          alt="프로필 이미지 미리보기"
          className="w-full h-full"
        />
      </div>
      <label
        htmlFor="imageUpload"
        className="relative">
        <input
          id="imageUpload"
          className="absolute inset-0 hidden cursor-pointer"
          type="file"
          accept="image/*"
          onChange={e => onChange(e.target.files?.[0])}
        />
        <div className="relative">
          <ImageUploadButton
            propsClass="absolute cursor-pointer 
                        h-36 top-[-20px] right-[-20px] 
                        desktop:h-60 desktop:top-[-40px] desktop:right-[-30px]"
          />
        </div>
      </label>
    </div>
  )
}
