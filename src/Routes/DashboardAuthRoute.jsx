import { Outlet } from 'react-router-dom'
import LayoutDashboard from '../Layouts/LayoutDashboard'

const DashboardAuthRoute = () => {
  return (
    <>
      <LayoutDashboard>
        <Outlet />
      </LayoutDashboard>
    </>
  )
}
export default DashboardAuthRoute
