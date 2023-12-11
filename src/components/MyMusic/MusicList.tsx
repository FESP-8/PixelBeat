import React from 'react'
import { useNavigate } from 'react-router-dom'

export const MusicList = () => {
  const navigate = useNavigate()
  const goToMusicRepo = () => {
    navigate('/mymusicrepo')
  }

  return (
    <div className="flex flex-col">
      <div className="mx-20 mt-30 text-20 center flex flex-row">
        <button className="musicListGreen text-mainBlack w-113 z-[2]">재생목록</button>
        <button
          className="musicList w-113 z-[2]"
          onClick={goToMusicRepo}>
          음악서랍
        </button>
        <button className='listMenu w-24 h-24 top-2 left-260 z-[1] relative bg-no-repeat'></button>
      </div>
      <div className="container border w-[520px] mx-20 h-62 hover:bg-[#313131]">
        <div className="flex">
          <div className="album w-44 h-44 ml-9 mr-12 mt-8 bg-no-repeat"></div> {/* 앨범 사진 */}
          <div className="flex flex-col text-18 leading-15 mt-18">
            <div>Attention</div> {/* 노래 제목 */}
            <div className="text-14 text-end">New Jeans</div> {/* 가수 이름 */}
          </div>
          <button className="more mt-15 w-24 h-24 left-330 top-3 bg-no-repeat relative"></button> {/* more 버튼() */} 
        </div>
      </div>
      <div className="container border w-[520px] mx-20 h-62 hover:bg-[#313131]">
        <div className="flex">
          <div className="album w-44 h-44 ml-9 mr-12 mt-8 bg-no-repeat"></div> {/* 앨범 사진 */}
          <div className="flex flex-col text-18 leading-15 mt-18">
            <div>Attention</div> {/* 노래 제목 */}
            <div className="text-14 text-end">New Jeans</div> {/* 가수 이름 */}
          </div>
          <button className="more mt-15 w-24 h-24 left-330 top-3 bg-no-repeat relative"></button> {/* more 버튼() */} 
        </div>
      </div>
    </div>
  )
}