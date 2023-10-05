/* eslint-disable jsx-a11y/alt-text */
import {
  HiOutlineHome,
  HiOutlineMail,
  HiOutlineFolderOpen,
  HiOutlineShoppingCart,
} from 'react-icons/hi'
import { FiAlignLeft } from 'react-icons/fi'
import Logo from '../../../Assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activeSidebar, toggleSidebar } from '../../../Features/dashboardSidebar/dashboardSidebar'
import { Menu } from 'antd'

const items = [
  {
    label: 'Dashboard',
    key: '1',
    icon: <HiOutlineHome />,
  },
  {
    label: 'Assistant',
    key: '2',
    icon: <HiOutlineMail />,
  },
  {
    label: 'Detail',
    key: 'sub1',
    icon: <HiOutlineFolderOpen />,
    children: [
      { label: 'Profesi', key: '3' },
      { label: 'Skill', key: '4' },
      // { label: 'Tentang', key: '5' },
    ],
  },
  {
    label: 'Transaksi',
    key: '5',
    icon: <HiOutlineShoppingCart />,
  },
]

const DashboardSidebar = () => {
  const { open, active } = useSelector((store) => store.dashboardSidebar)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = ({ key }) => {
    // console.log(item)
    if (key === '1') {
      navigate('/dashboard/')
      dispatch(activeSidebar(['1']))
    }
    if (key === '2') {
      navigate('/dashboard-assistant/')
      dispatch(activeSidebar(['2']))
    }
    if (key === '3') {
      navigate('/dashboard-profesi/')
      dispatch(activeSidebar(['3']))
    }
    if (key === '4') {
      navigate('/dashboard-skills/')
      dispatch(activeSidebar(['4']))
    }
    if (key === '5') {
      navigate('/dashboard-transaction/')
      dispatch(activeSidebar(['5']))
    }

    // if (key === '4') navigate('/dashboard-kontak')
    // if (key === '5') navigate('/dashboard-tentang')
  }
  return (
    <section className="py-4 lg:pl-4">
      <div
        className={`hidden bg-transparet lg:block lg:p-4 pr-0 transition-all ${
          open ? 'w-[230px]' : 'w-[80px]'
        }`}
      ></div>
      <div
        className={`bg-white ${
          open ? 'w-[230px]' : 'w-[80px]'
        } transition-all top-0 bottom-0 ${
          open ? '' : '-left-20'
        } lg:left-5 fixed my-4 drop-shadow-xl rounded-xl flex flex-col items-center justify-between`}
        style={{ zIndex: '300' }}
      >
        <div className="w-full">
          {/* Logo & Hamburger Menu */}
          <div
            className={`h-[70px] w-full flex ${
              open ? 'justify-between gap-5 px-6' : 'justify-center'
            } items-center text-2xl`}
          >
            {open ? <img src={Logo} className="w-[120px]" /> : null}
            <FiAlignLeft
              className="cursor-pointer text-edu-blue"
              onClick={() => dispatch(toggleSidebar())}
            />
          </div>
          {/* <span className="border-b-[1px] w-full"></span> */}
          <Menu
            defaultSelectedKeys={active}
            // defaultOpenKeys={['Dashboard']}
            mode="inline"
            inlineCollapsed={!open}
            items={items}
            // onSelect={handleClick}
            onClick={handleClick}
          />
          {/* Garis pemisah */}
        </div>
      </div>
    </section>
  )
}

export default DashboardSidebar
