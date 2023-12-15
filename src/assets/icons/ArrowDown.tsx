export const ArrowDown = ({ fill }: { fill?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 8H7V10H5V8ZM9 12H7L7 10L9 10V12ZM11 14H9V12H11V14ZM13 14V16H11V14H13ZM15 12H13V14H15V12ZM15 12V10H17V12H15ZM19 8H17V10H19V8Z"
        fill={fill || 'white'}
      />
    </svg>
  );
};
