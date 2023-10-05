import {
  ExclamationCircleFilled,
  ExclamationCircleOutlined,
  LoadingOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Button, Image, Input, Modal, Space, Spin, Table } from 'antd'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import Highlighter from 'react-highlight-words'
import { Link } from 'react-router-dom'
import { PROFESI } from '../../../../../Utils/endpoint'
import { LOCALSTORAGE_TOKEN } from '../../../../../Utils/types'

const { confirm } = Modal

const data = [
  {
    key: '1',
    profesi: 'PRT',
  },
  {
    key: '2',
    profesi: 'Cleaning Service',
  },
  {
    key: '3',
    profesi: 'Baby Sister',
  },
  {
    key: '4',
    profesi: 'Sopir',
  },
  {
    key: '5',
    profesi: 'Security',
  },
  {
    key: '6',
    profesi: 'tesss',
  },
]

const TableProfesi = () => {
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef(null)
  const [currentPage, setCurrentPage] = useState(1)
  // const [modalOpen, setModalOpen] = useState(false)
  const [idData, setIdData] = useState(0)
  const [loading, setLoading] = useState(false)

  const [dataProfesi, setDataProfesi] = useState([])
  const options = {
    headers: {
      Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
    },
  }

  const getData = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(PROFESI, options)
      const newData = data.map((item) => {
        return {
          key: item.id,
          name: item.name,
          icon: item.icon,
        }
      })
      // console.log('newData', newData)
      setDataProfesi(newData)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  const deleteData = async (id) => {
    try {
      const res = await axios.delete(PROFESI + id + '/', options)
      getData()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleModal = (id) => {
    // setIdData(id)
    // setModalOpen(true)
    confirm({
      title: 'Yakin Ingin Hapus?',
      icon: <ExclamationCircleFilled />,
      content: `Anda akan menghapus data dengan ID ${id}`,
      onOk() {
        deleteData(id)
        setIdData(id)
      },
      okText: 'Ok',
      cancelText: 'Batal',
      centered: true,
      okButtonProps: {
        className: 'bg-blue-500',
      },
    })
  }

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }
  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText('')
  }
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            // type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            // icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              })
              setSearchText(selectedKeys[0])
              setSearchedColumn(dataIndex)
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close()
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : !text ? (
        '-'
      ) : (
        text
      ),
  })
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      width: '2%',
      render: (text, record, index) => {
        const currentIndex = (currentPage - 1) * 5 + index + 1
        return currentIndex
      },
    },
    {
      title: 'Icon',
      dataIndex: 'icon',
      key: 'icon',
      width: '7%',
      render: (text, record) => (
        <div key={record.key} className={"w-20"}>
          {record.icon ? (
            <Image src={record.icon} className={'w-2'} />
          ) : (
            'Not Availabel'
          )}
        </div>
      ),
    },
    {
      title: 'Profesi',
      dataIndex: 'name',
      key: 'name',
      width: '40%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: '10%',
      render: (text, record) => (
        <div className="flex lg:flex-row flex-col gap-2">
          <Link to={`/detail-profesi/${record.key}`}>
            <Button
              type="primary"
              style={{ background: '#1890ff', borderColor: '#1890ff' }}
            >
              View
            </Button>
          </Link>
          <div>
            <Button
              type="default"
              style={{
                background: '#fa3600',
                borderColor: '#fa3600',
                color: 'white',
              }}
              onClick={() => handleModal(record.key)}
            >
              Delete
            </Button>
          </div>
        </div>
      ),
    },
  ]

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 50,
      }}
      spin
    />
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Spin indicator={antIcon} />
      </div>
    )
  }

  return (
    <Table
      columns={columns}
      dataSource={dataProfesi}
      pagination={{
        pageSize: 5,
        current: currentPage,
        position: ['bottomCenter'],
        onChange: (e) => setCurrentPage(e),
      }}
      scroll={{ x: '100%' }}
    />
  )
}
export default TableProfesi
