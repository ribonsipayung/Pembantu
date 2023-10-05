import { ExclamationCircleFilled, LoadingOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Image, Input, Modal, Space, Spin, Table } from 'antd'
import axios from 'axios'
import { useEffect } from 'react'
import { useRef, useState } from 'react'
import Highlighter from 'react-highlight-words'
import { Link } from 'react-router-dom'
import { ASSISTANT, SKILLS } from '../../../../Utils/endpoint'
import { LOCALSTORAGE_TOKEN } from '../../../../Utils/types'

const { confirm } = Modal

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    profesi: 'PRT',
    wilayahKerja: 'Jakarta',
  },
  {
    key: '2',
    name: 'Ibu Ani',
    age: 42,
    profesi: 'Cleaning Service',
    wilayahKerja: 'Jakarta',
  },
  {
    key: '3',
    name: 'Anisa Rahma',
    age: 32,
    profesi: 'Baby Sister',
    wilayahKerja: 'Jakarta',
  },
  {
    key: '4',
    name: 'Dea Mahsuri',
    age: 32,
    profesi: 'Cleaning Service',
    wilayahKerja: 'Jakarta',
  },
  {
    key: '5',
    name: 'Jenie',
    age: 32,
    profesi: 'Baby Sister',
    wilayahKerja: 'Jakarta',
  },
  {
    key: '6',
    name: 'Alsya',
    age: 32,
    profesi: 'Baby Sister',
    wilayahKerja: 'Jakarta',
  },
  {
    key: '7',
    name: 'Bernat',
    age: 32,
    profesi: 'PRT',
    wilayahKerja: 'Jakarta',
  },
]

const TableAssistant = () => {
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef(null)
  const [dataAssistant, setDataAssistant] = useState([])
  const [loading, setLoading] = useState(false)

  const options = {
    headers: {
      Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
    },
  }
  const newData = dataAssistant.map((item) => {
    return {
      key: item.id,
      ...item,
    }
  })

  const getData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(ASSISTANT)
      console.log('data assistant', response)
      setDataAssistant(response.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  
  useEffect(() => {
    getData()
  }, [])
  
  const deleteData = async (id) => {
    try {
      const res = await axios.delete(ASSISTANT + id + '/', options)
      getData()
    } catch (err) {
      console.log(err)
    }
  }

  const handleModal = (id) => {
    // setIdData(id)
    // setModalOpen(true)
    confirm({
      title: 'Yakin Ingin Hapus?',
      icon: <ExclamationCircleFilled />,
      content: `Anda akan menghapus data dengan ID ${id}`,
      onOk() {
        deleteData(id)
        // setIdData(id)
      },
      okText: 'Ok',
      cancelText: 'Batal',
      centered: true,
      okButtonProps: {
        className: 'bg-blue-500',
      },
    })
  }

  console.log('newData', newData)

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
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    },
  })

  const getRenderProps = (dataIndex) => ({
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
      ) : (
        text
      ),
  })

  const columns = [
    {
      title: 'Profile',
      // dataIndex: ''
      key: 'profile',
      width: '2%',
      render: (text, record) => (
        <div key={record.key} className={'w-16'}>
          {record.icon ? <Image src={record.icon} /> : 'Not Available'}
        </div>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
      ...getColumnSearchProps('name'),
      ...getRenderProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '5%',
      ...getColumnSearchProps('age'),
      ...getRenderProps('age'),
    },
    {
      title: 'Profesi',
      dataIndex: 'profesi',
      key: 'profesi',
      width: '10%',
      ...getColumnSearchProps('profesi'),
      render: (text, record) => <span>{record?.profession_detail?.name}</span>,
    },
    {
      title: 'Wilayah Kerja',
      dataIndex: 'province',
      key: 'wilayahKerja',
      width: '10%',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: '5%',
      render: (text, record) => (
        <div className="flex lg:flex-row flex-col gap-2">
          <Link to={`/dashboard-assistant/${record.key}`}>
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
      dataSource={newData}
      pagination={{
        pageSize: 5,
        position: ['bottomCenter'],
      }}
      scroll={{ x: '100%' }}
    />
  )
}
export default TableAssistant
