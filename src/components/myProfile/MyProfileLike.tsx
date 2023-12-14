import { Heart, FullHeart, MyBillNon, BillHeartLike } from '@/assets'
import { MyProfileInfo } from '.'
import { useNavigate } from 'react-router-dom'
import { Header, NavBar } from '../common'
import { useState } from 'react'

export const MyProfileLike = () => {
  const navigate = useNavigate()
  const goToLike = () => {
    navigate('/profile/:id/profilelike')
  }
  const goToMyBill = () => {
    navigate('/profile/:id/profile')
  }

  // 각각의 profileBill에 대한 좋아요 상태를 배열로 관리
  const [likes, setLikes] = useState([false, false])

  // 좋아요 상태를 토글하는 함수
  const toggleLike = index => {
    setLikes(prevLikes => {
      const newLikes = [...prevLikes]
      newLikes[index] = !newLikes[index]
      return newLikes
    })
  }
  return (
    <div className='pb-80'>
      <Header type="profile" />
      <MyProfileInfo />
      <div className="desktop:px-60 pt-24">
        <div className="flex flex-row ml-20">
          <button onClick={goToMyBill}>
            <MyBillNon />
          </button>
          <button onClick={goToLike}>
            <BillHeartLike />
          </button>
        </div>
        <div className="mx-20 border h-auto flex flex-wrap">
          <div className="profileBill ml-78 bg-mainWhite w-162 mb-10 mt-30 text-mainBlack text-center">
            <h1 className="text-14">누군가 영수증 #1</h1>{' '}
            {/* 좋아요한 영수증이나 나의 영수증 */}
            <img
              className="bg-mainGray w-124 h-124 mx-19 mt-8"
              src=""
              alt=""
            />
            <div className="flex justify-between border-mainBlack border-y mx-11 mt-12 border-dashed text-12 text-start">
              <div>8곡 • 10:38</div>{' '}
              {/* 플리에 들어있는곡 수 + 곡들의 시간 총합 */}
              <button onClick={() => toggleLike(0)}>
                {likes[0] ? <FullHeart /> : <Heart />}
              </button>
            </div>
          </div>
          <div className="profileBill ml-78 bg-mainWhite w-162 mb-10 mt-30 text-mainBlack text-center">
            <h1 className="text-14">누군가 영수증 #1</h1>{' '}
            {/* 좋아요한 영수증이나 나의 영수증 */}
            <img
              className="bg-mainGray w-124 h-124 mx-19 mt-8"
              src=""
              alt=""
            />
            <div className="flex justify-between border-mainBlack border-y mx-11 mt-12 border-dashed text-12 text-start">
              <div>8곡 • 10:38</div>{' '}
              {/* 플리에 들어있는곡 수 + 곡들의 시간 총합 */}
              <button onClick={() => toggleLike(1)}>
                {likes[1] ? <FullHeart /> : <Heart />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <NavBar />
      </footer>
    </div>
  )
}
