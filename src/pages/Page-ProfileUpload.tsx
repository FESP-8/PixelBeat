import { ProfileForm } from '@/components'

const ProfileUpload = () => {
  return (
    <div className="desktop:px-60 px-20">
      <h1 className="text-center text-24 font-normal pt-52">프로필 설정</h1>
      <h2 className="text-center text-14 font-normal not-italic mt-14">
        나중에 언제든지 변경할 수 있습니다.
      </h2>
      <ProfileForm />
    </div>
  )
}

export default ProfileUpload
