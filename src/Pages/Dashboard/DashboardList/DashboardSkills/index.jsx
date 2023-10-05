import { Button } from "antd"
import { HiPlus } from "react-icons/hi"
import { Link } from "react-router-dom"
import TableSkills from "./TableSkills"

const DashboardSkills = () => {
  return (
    <div>
      <div className="mt-8 mb-12 flex items-center justify-between lg:mx-12 mx-2">
        <p className="text-3xl">Keahlian</p>
        <Link to={'/add-skills'}>
          <Button
            type="default"
            style={{
              background: '#1890ff',
              borderColor: '#1890ff',
              color: 'white',
            }}
            className={'flex items-center -z-20'}
          >
            <HiPlus />
            Tambah Keahlian
          </Button>
        </Link>
      </div>
      <TableSkills />
    </div>
  )
}
export default DashboardSkills