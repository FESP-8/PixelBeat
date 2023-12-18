export const HeartButton = ({
  onClick,
  isHearted,
  propsClass,
  width
}: {
  onClick: () => void
  isHearted: boolean
  propsClass?: string
  width?
}) => {
  const currentColor = isHearted ? '#FF5757' : 'white'

  return (
    <button
      type="button"
      onClick={onClick}
      className={propsClass}>
      <svg
        width={width || 24}
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 11V7L6 3H8L12 7L16 3H18L22 7V11L12 21L2 11Z"
          fill={currentColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 2H5V4H3V6H1V12H3V14H5V16H7V18H9V20H11V22H13V20H15V18H17V16H19V14H21V12H23V6H21V4H19V2H15V4H13V6H11V4H9V2ZM9 4V6H11V8H13V6H15V4H19V6H21V12H19V14H17V16H15V18H13V20H11V18H9V16H7V14H5V12H3V6H5V4H9Z"
          fill="black"
        />
      </svg>
    </button>
  )
}