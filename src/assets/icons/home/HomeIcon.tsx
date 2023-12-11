export const HomeIcon = (currentPath: { [key: string]: string }) => {
  return (
    <svg
      className={`${
        currentPath.currentPath === '/home' ? 'selected-item' : ''
      } `}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.001 2H10.001V4H8.00098V6H6.00098V8H4.00098V10H2.00098V12H4.00098V22H11.001V16H13.001V22H20.001V12H22.001V10H20.001V8H18.001V6H16.001V4H14.001V2ZM14.001 4V6H16.001V8H18.001V10H20.001V12H18.001V20H15.001V14H9.00098V20H6.00098V12H4.00098V10H6.00098V8H8.00098V6H10.001V4H14.001Z"
        fill="currentColor"
      />
    </svg>
  )
}
