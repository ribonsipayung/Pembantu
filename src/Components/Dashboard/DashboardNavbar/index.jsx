/* eslint-disable jsx-a11y/alt-text */
import { message } from "antd"
import { FiAlignLeft } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { toggleSidebar } from "../../../Features/dashboardSidebar/dashboardSidebar"

const DashboardNavbar = () => {
  const dispatch = useDispatch()
  const [messageApi, contextHolder] = message.useMessage()
  return (
    <section className="py-4 sticky top-0" style={{ zIndex: '90' }}>
      {contextHolder}
      <nav className="w-full top-0 z-50 bg-blue-400 h-[70px] rounded-xl flex items-center p-4 drop-shadow-xl justify-between">
        <div className="flex items-center gap-3">
          <FiAlignLeft
            className="cursor-pointer text-white text-xl lg:hidden"
            onClick={() => dispatch(toggleSidebar())}
          />
          <h1 className="text-white text-xl font-semibold">
            Welcome To Dashboard
          </h1>
        </div>
        <img
          src="https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg"
          className="w-10 rounded-full"
        />
      </nav>
    </section>
  )
}
export default DashboardNavbar