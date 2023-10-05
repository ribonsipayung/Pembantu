import { LoadingOutlined, SearchOutlined } from '@ant-design/icons'
import { Badge, Button, Input, Space, Spin, Table } from 'antd'
import { useRef, useState } from 'react'
import Highlighter from 'react-highlight-words'
import { Link } from 'react-router-dom'

const data = [
  {
    key: '1',
    code: 'ABC11',
    name: 'Putra',
    date: '3/12/23',
    status: false,
  },
  {
    key: '2',
    code: 'ABC12',
    name: 'Ribon',
    date: '3/12/23',
    status: true,
  },
  {
    key: '3',
    code: 'ABC13',
    name: 'Dzaki',
    date: '3/12/23',
    status: true,
  },
  {
    key: '4',
    code: 'ABC14',
    name: 'Elroy',
    date: '3/12/23',
    status: false,
  },
  {
    key: '5',
    code: 'ABC15',
    name: 'Sayyd',
    date: '3/12/23',
    status: true,
  },
]

const TableTransaction = () => {
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef(null)
  const [currentPage, setCurrentPage] = useState(1)
  // const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)

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
      title: 'Kode',
      dataIndex: 'code',
      key: 'code',
      width: '15%',
      ...getColumnSearchProps('code'),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
      render: (text, record) => <div key={record.key}>{record?.name}</div>,
    },
    {
      title: 'Tanggal',
      dataIndex: 'date',
      key: 'date',
      width: '15%',
      ...getColumnSearchProps('date'),
    },
    {
      title: 'Total Bayar',
      dataIndex: 'payment',
      key: 'payment',
      width: '15%',
      ...getColumnSearchProps('date'),
      render: (text, record) => <div key={record.key}>Rp.2.000.0000,-</div>,
    },
    {
      title: 'Status',
      dataIndex: 'date',
      key: 'date',
      width: '15%',
      render: (text, record) =>
        record.status ? (
          <Badge
            key={record.key}
            className={'bg-green-500 text-white p-1 rounded-md'}
          >
            Lunas
          </Badge>
        ) : (
          <Badge
            key={record.key}
            className={'bg-blue-500 text-white p-1 rounded-md'}
          >
            Belum Lunas
          </Badge>
        ),
    },
    // {
    //   title: 'Action',
    //   dataIndex: 'action',
    //   key: 'action',
    //   width: '10%',
    //   render: (text, record) => (
    //     <div className="flex lg:flex-row flex-col gap-2">
    //       <Link to={`/detail-profesi/${record.key}`}>
    //         <Button
    //           type="primary"
    //           style={{ background: '#1890ff', borderColor: '#1890ff' }}
    //         >
    //           View
    //         </Button>
    //       </Link>
    //     </div>
    //   ),
    // },
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
      dataSource={data}
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
export default TableTransaction
