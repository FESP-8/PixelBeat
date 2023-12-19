import { MyProfileBillBtn, MiniBill, Heart } from '@/assets'
import { SmallBill } from '.'
import { useNavigate } from 'react-router-dom'

export const MyLikeBillList = () => {
  const navigate = useNavigate()
  const moteToMe = () => {
    navigate('/profile/me')
  }

  return (
    <div className="mobile:px-20 desktop:px-60 pt-24 h-screen">
      <div className="flex flex-row">
        <div
          onClick={moteToMe}
          className="cursor-pointer relative flex">
          <MyProfileBillBtn
            type="submit"
            propsClass="flex flex-row"
            width={140}
            textColor="white"
            height={35}
            text={'내 영수증'}
            fillColor1={'black'}
            fillColor2={'white'}
          />
          <div className="absolute top-10 left-12">
            <MiniBill fillColor="white" />
          </div>
        </div>

        <div className="cursor-pointer relative flex">
          <MyProfileBillBtn
            type="submit"
            propsClass=""
            height={35}
            textColor="black"
            text={'좋아요 영수증'}
            fillColor1={'white'}
            fillColor2={'white'}
          />
          <div className=" absolute top-11 left-14">
            <Heart fillColor="black" />
          </div>
        </div>
      </div>

      <div
        className="border-1 h-auto pb-24 grid min-h-[500px]
                     grid-cols-2 grid-auto-rows-auto justify-center
                     mobile:gap-10 mobile:px-10
                     desktop:gap-40 desktop:px-30
                     ">
        <SmallBill />
      </div>
    </div>
  )
}
