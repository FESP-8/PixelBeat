import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="layout-screen-width outline outline-mainBlue">
      <Outlet />
    </div>
  )
}
