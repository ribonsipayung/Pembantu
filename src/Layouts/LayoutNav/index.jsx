import { Outlet } from 'react-router-dom'
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"
import Sidebar from "../../Components/Sidebar"

const LayoutNav = () => {
  return (
    <div>
      <Sidebar/>
        <Navbar/>
        <div>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
export default LayoutNav

