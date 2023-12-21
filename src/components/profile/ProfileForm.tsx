import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ImageUploadForm,
  ProfileInputField,
  StandardButton
} from '@/components'
import Profile from '@/assets/imgs/Profile.png'
import {
  updateBill,
  updateOwnTracklist,
  updateProfile,
  uploadImageToStorage
} from '@/api'
import { useUserInfo, useUserSession } from '@/hooks'
import imageCompression from 'browser-image-compression'
import { useRecommendStore } from '@/zustand'
import { getRandomColor } from '@/utils'
import { UserMin } from '@/types'

const IMAGE_PATH = import.meta.env.VITE_SUPABASE_STORAGE_URL

export const ProfileForm = () => {
  const userId = useUserSession()
  const userProfile = useUserInfo()
  const navigate = useNavigate()

  const [uploadedImage, setUploadedImage] = useState<any>(null)
  const displayedImage = Profile

  const [formState, setFormState] = useState({
    userName: '',
    userIntroduction: ''
  })
  const [validationErrors, setValidationErrors] = useState({
    userName: ''
  })

  useEffect(() => {
    if (userProfile.userInfo) {
      setFormState({
        userName: userProfile.userInfo.username,
        userIntroduction: userProfile.userInfo.introduce
      })

      setValidationErrors({
        userName: userProfile.userInfo.username
      })
    }
  }, [userProfile.userInfo])

  const initialStore = useRecommendStore(state => state.initialStore)

  const handleImageChange = async (file: File) => {
    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 1024
    }

    try {
      const compressedFile = await imageCompression(file, options)
      const selected = compressedFile.size < file.size ? compressedFile : file
      setUploadedImage(selected)
    } catch (error) {
      console.error(error)
    }
  }

  const handleTextChange = e => {
    const { name, value } = e.target

    setFormState(prev => ({
      ...prev,
      [name]: value
    }))

    const isUserNameValid = value.trim() !== ''

    setValidationErrors(prev => ({
      ...prev,
      [name]: isUserNameValid
    }))
  }

  const isSubmitDisabled = () => {
    const isEmpty = Object.keys(formState).some(check => check === '')
    const isValidationError = validationErrors.userName === ''

    return isEmpty || isValidationError
  }

  const editProfile = async () => {
    try {
      // 이미지가 업로드된 경우에만 업로드 수정
      let updatedImagePath = uploadedImage ? IMAGE_PATH : displayedImage

      if (uploadedImage) {
        const imageUploadResultUrl = await uploadImageToStorage(
          uploadedImage,
          userId
        )
        updatedImagePath += imageUploadResultUrl
      } else {
        // 이미지가 업로드되지 않은 경우, 기존 이미지 유지
        updatedImagePath = displayedImage
      }

      const updateRes = await updateProfile(
        formState.userName.trim(),
        formState.userIntroduction.trim(),
        updatedImagePath,
        userId
      )

      //  zustand에 bill있으면 owner추가
      if (initialStore.resultBillId) {
        const minOwnerInfo: UserMin = {
          userId,
          username: formState.userName.trim()
        }

        await updateBill(
          initialStore.resultBillId,
          minOwnerInfo,
          getRandomColor(),
          `${minOwnerInfo.username}의 음악영수증 #1`
        )
        await updateOwnTracklist({
          prevOwnTracklist: [],
          billId: initialStore.resultBillId,
          userId
        })
      }

      if (updateRes) {
        navigate('/home')
      }
    } catch (error) {
      console.error('프로필 업데이트 중 오류 발생:', error)
    }
  }

  const selectedImageToShow = uploadedImage || displayedImage

  return (
    <>
      <form
        className="flex flex-col mobile:gap-20 desktop:gap-30 mt-8 justify-center items-center"
        onSubmit={e => e.preventDefault()}>
        <ImageUploadForm
          onChange={handleImageChange}
          selectedImage={selectedImageToShow}
        />

        <ProfileInputField
          name={'userName'}
          label="닉네임"
          value={formState.userName}
          placeholder="픽셀비트"
          onChange={handleTextChange}
          valiationCheck={validationErrors.userName}
        />
        <ProfileInputField
          name={'userIntroduction'}
          label="자기소개"
          value={formState.userIntroduction}
          placeholder="자기소개를 적어주세요"
          onChange={handleTextChange}
        />

        <StandardButton
          onClick={editProfile}
          type="submit"
          propsClass="mx-auto mt-22 w-full
                    mobile:h-56 
                    desktop:h-60 "
          text={'완료'}
          disabled={isSubmitDisabled()}
          fillColor={isSubmitDisabled() ? '' : '#57FF57'}
        />
      </form>
    </>
  )
}