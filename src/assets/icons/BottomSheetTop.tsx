export const BottomSheetTop = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="relative">
      <svg
        className="w-[390px] 
        desktop:w-[720px] "
        viewBox="0 0 390 29"
        fill="white"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 29V15H2V10H6V7H8V4H12V0H378V4H382V7H384V10H388V15H390V29H0Z"
          fill="white"
        />
      </svg>
      <button
        type="button"
        onClick={onClick}
        className="absolute bg-mainBlack 
                   desktop:w-100 desktop:h-6 top-15
                   w-50 h-4 desktop:top-30 
                   left-1/2 transform -translate-x-1/2"
      />
    </div>
  )
}
