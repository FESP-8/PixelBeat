export const MyProfileBillBtn = ({
  type,
  text,
  propsClass,
  onClick,
  fillColor1,
  fillColor2,
  textColor,
  width,
  height,
  textPadding
}: {
  type?: any
  text: string
  onClick?: () => any
  propsClass?: string
  fillColor1?: string
  fillColor2?: string
  textColor?: string
  width?: number | string
  height?: number | string
  textPadding?: number | number
}) => {
  return (
    <button
      type={type || 'button'}
      className={
        propsClass
          ? `${propsClass} block relative w-full`
          : 'block relative w-full'
      }
      onClick={onClick}>
      <svg
        width={width || 171}
        height={height || 39}
        viewBox="0 0 171 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        >
        <mask
          id="path-1-inside-1_1345_20885"
          fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M167.335 7.00008H170.999V0H171V39H0V7.00008H3.66429V0H3.66488V5.00008H7.32917V2.00008H12.2137V0H158.786V2.00008H163.67V5.00008H167.334V0H167.335V7.00008Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M167.335 7.00008H170.999V0H171V39H0V7.00008H3.66429V0H3.66488V5.00008H7.32917V2.00008H12.2137V0H158.786V2.00008H163.67V5.00008H167.334V0H167.335V7.00008Z"
          fill={fillColor1 || 'black'}
        />
        <path
          d="M170.999 7.00008V8.00008H171.999V7.00008H170.999ZM167.335 7.00008H166.335V8.00008H167.335V7.00008ZM170.999 0V-1H169.999V0H170.999ZM171 0H172V-1H171V0ZM171 39V40H172V39H171ZM0 39H-1V40H0V39ZM0 7.00008V6.00008H-1V7.00008H0ZM3.66429 7.00008V8.00008H4.66429V7.00008H3.66429ZM3.66429 0V-1H2.66429V0H3.66429ZM3.66488 0H4.66488V-1H3.66488V0ZM3.66488 5.00008H2.66488V6.00008H3.66488V5.00008ZM7.32917 5.00008V6.00008H8.32917V5.00008H7.32917ZM7.32917 2.00008V1.00008H6.32917V2.00008H7.32917ZM12.2137 2.00008V3.00008H13.2137V2.00008H12.2137ZM12.2137 0V-1H11.2137V0H12.2137ZM158.786 0H159.786V-1H158.786V0ZM158.786 2.00008H157.786V3.00008H158.786V2.00008ZM163.67 2.00008H164.67V1.00008H163.67V2.00008ZM163.67 5.00008H162.67V6.00008H163.67V5.00008ZM167.334 5.00008V6.00008H168.334V5.00008H167.334ZM167.334 0V-1H166.334V0H167.334ZM167.335 0H168.335V-1H167.335V0ZM170.999 6.00008H167.335V8.00008H170.999V6.00008ZM169.999 0V7.00008H171.999V0H169.999ZM171 -1H170.999V1H171V-1ZM172 39V0H170V39H172ZM0 40H171V38H0V40ZM-1 7.00008V39H1V7.00008H-1ZM3.66429 6.00008H0V8.00008H3.66429V6.00008ZM2.66429 0V7.00008H4.66429V0H2.66429ZM3.66488 -1H3.66429V1H3.66488V-1ZM4.66488 5.00008V0H2.66488V5.00008H4.66488ZM7.32917 4.00008H3.66488V6.00008H7.32917V4.00008ZM6.32917 2.00008V5.00008H8.32917V2.00008H6.32917ZM12.2137 1.00008H7.32917V3.00008H12.2137V1.00008ZM11.2137 0V2.00008H13.2137V0H11.2137ZM158.786 -1H12.2137V1H158.786V-1ZM159.786 2.00008V0H157.786V2.00008H159.786ZM163.67 1.00008H158.786V3.00008H163.67V1.00008ZM164.67 5.00008V2.00008H162.67V5.00008H164.67ZM167.334 4.00008H163.67V6.00008H167.334V4.00008ZM166.334 0V5.00008H168.334V0H166.334ZM167.335 -1H167.334V1H167.335V-1ZM168.335 7.00008V0H166.335V7.00008H168.335Z"
          fill={fillColor2 || 'white'}
          mask="url(#path-1-inside-1_1345_20885)"
        />
      </svg>
      <span
        className="text-18 absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-40%] pl-6 w-full"
        style={{ color: textColor || 'black', paddingLeft: textPadding || 18}}>
        {text}
      </span>
    </button>
  )
}