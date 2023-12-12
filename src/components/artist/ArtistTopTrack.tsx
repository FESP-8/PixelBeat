import { useState } from 'react'
import { MenuIcon } from '@/assets'
import { useNavigate } from 'react-router-dom'

export const ArtistTopTrack = ({ artist_topTracks }) => {
  const navigate = useNavigate()
  const [visibleTracks, setVisibleTracks] = useState(5)

  const loadMore = () => {
    setVisibleTracks(prevVisibleTracks => prevVisibleTracks + 5)
  }

  return (
    <div className="mobile:px-20 desktop:px-60 mt-27 relative">
      <MenuIcon />
      <h1 className="absolute text-mainBlack mobile:top-4 mobile:left-60 desktop:top-5 desktop:left-130">
        인기 트랙
      </h1>
      <div className="relative desktop:px-3 mobile:px-1">
        {artist_topTracks &&
          artist_topTracks.slice(0, visibleTracks).map(item => (
            <div
              className="relative desktop:my-6"
              key={item.id}>
              <div className="border-1 my-4 flex items-center gap-10">
                <img
                  loading="lazy"
                  onClick={() => navigate(`/album/${item.album.id}`)}
                  className="mobile:w-50 mobile:h-51 mr-4 desktop:w-65 desktop:h-66 cursor-pointer"
                  src={item.album.images[1].url || ''}
                  alt={`${item.name}.img`}
                />

                <div className="flex flex-col overflow-hidden">
                  <span
                    className={
                      item.name.length > 30 ? 'text-flow-on-hover' : ''
                    }>
                    {item.name}
                  </span>
                  <span>{item.artists[0].name}</span>
                </div>
              </div>
            </div>
          ))}
        {visibleTracks < artist_topTracks.length && (
          <button
            className="border-1 w-full hover:underline"
            onClick={loadMore}>
            더보기
          </button>
        )}
      </div>
    </div>
  )
}

export default ArtistTopTrack