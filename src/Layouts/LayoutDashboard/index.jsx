import DashboardSidebar from '../../Components/Dashboard/DashboardSidebar'
import DashboardNavbar from '../../Components/Dashboard/DashboardNavbar'
import { Outlet } from 'react-router-dom'

const LayoutDashboard = () => {
  return (
    <section className="w-full flex">
      <DashboardSidebar />
      <div className="mx-5 flex-1 flex flex-col min-w-0">
        <DashboardNavbar />
        <Outlet />
      </div>
    </section>
  )
}
export default LayoutDashboard
