import { MenuIcon } from '@/assets'

export const SearchResultArtistItem = ({ artists }) => {
  if (!artists || artists.items.length === 0) {
    return (
      <div className="relative mt-22">
        <MenuIcon />
        <h1 className="absolute text-mainBlack top-3 mobile:left-50 desktop:top-15 desktop:left-100">
          가수
        </h1>
        <h1>No Item</h1>
      </div>
    )
  }

  return (
    <>
      <MenuIcon />
      <h1 className="absolute text-mainBlack top-3 mobile:left-50 desktop:top-15 desktop:left-100">
        가수
      </h1>
      <div className="relative desktop:px-3 mobile:px-1">
        <div className="overflow-x-auto">
          <div className="flex">
            {artists &&
              artists.items.map(item => (
                <div
                  className="my-4 mx-2 flex flex-col items-center mobile:w-150 mobile:h-176"
                  key={item.id}>
                  <div className="mobile:w-150 mobile:h-156 border-1 overflow-y-hidden">
                    {item.images && item.images.length > 0 ? (
                      <img
                        loading="lazy"
                        className="mobile:w-150 mobile:h-156"
                        src={item.images[0].url}
                        alt={`${item.name}.img`}
                      />
                    ) : (
                      <div className="mobile:w-150 mobile:h-156 grid place-items-center">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="bg-mainGray whitespace-nowrap w-full  text-center text-mainBlack ">
                    {item.name.length >= 10
                      ? item.name.slice(0, 7) + '...'
                      : item.name}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}