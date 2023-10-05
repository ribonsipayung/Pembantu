import { LoadingOutlined, UploadOutlined } from '@ant-design/icons'
import {
  Button,
  Card,
  Input,
  message,
  Upload,
  Form,
  Row,
  Col,
  Image,
  Spin,
} from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PROFESI } from '../../../../../Utils/endpoint'
import { LOCALSTORAGE_TOKEN } from '../../../../../Utils/types'

const DetailProfesi = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const newData = {
    name: data?.name,
    icon: data?.icon,
  }

  const options = {
    headers: {
      Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
    },
  }
  const dataDetail = async () => {
    setLoading(true)
    try {
      const response = await axios.get(PROFESI + id, options)
      console.log(response.data)
      setData(response.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    dataDetail()
  }, [])

  const [isEdit, setIsEdit] = useState(false)
  const { id } = useParams()
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()
//   const [active, setActive] = useState(false)
  const key = 'loadingmsg'

  const onFinish = async (event) => {
    console.log('ini event', event)
    // setActive(true)
    messageApi.open({
      key,
      style: {
        marginTop: '100px',
      },
      duration: 20000,
      type: 'loading',
      content: 'Loading...',
    })

    const options = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
      },
    }
    const formData = new FormData()
    if (event?.name !== undefined) {
      formData.append('name', event.name)
    }
    if (event?.icon !== undefined) {
      formData.append('icon', event.icon[0].originFileObj)
    }

    try {
      const response = await axios.patch(PROFESI + id + '/', formData, options)
      console.log(response)
      if (response.data) {
        message.destroy()
        messageApi.open({
          key,
          style: {
            marginTop: '100px',
          },
          type: 'success',
          content: 'Berhasil',
          duration: 2,
          onClose: () => {
            message.destroy()
            navigate('/dashboard-profesi')
          },
        })
      } else {
        messageApi.error({
          key,
          style: {
            marginTop: '100px',
          },
          type: 'primary',
          content: 'Terjadi Kesalahan Upload File',
          duration: 2,
        })
      }
    } catch (err) {
      message.destroy()
      messageApi.error({
        key,
        style: {
          marginTop: '100px',
        },
        content: 'Submit Error!',
        duration: 2,
      })
    }
  }
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 50,
      }}
      spin
    />
  )

  return (
    <div>
      {contextHolder}
      <div className="mt-8 mb-12 flex items-center justify-between lg:mx-12 mx-2">
        <p className="text-3xl">Detail Profesi</p>
        <div>
          <Link to={'/dashboard-profesi'}>
            <Button
              type="default"
              style={{
                background: '#1890ff',
                borderColor: '#1890ff',
                color: 'white',
              }}
              className={'flex items-center -z-20'}
            >
              Kembali
            </Button>
          </Link>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <Card className={'shadow-xl w-full h-auto'}>
          <div className="flex w-full items-center gap-8">
            <Image src={data?.icon} width={200} />
            <Form
              className="flex flex-col w-full"
              //   initialValues={newData}
              onFinish={onFinish}
            >
              {/* <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
            className="w-24"
          /> */}
              {/* <div className="w-full"> */}
              <Form.Item name="name" initialValue={`${data?.name}`}>
                <Input placeholder="Profesi" disabled={!isEdit} />
              </Form.Item>
              <Form.Item
                name="icon"
                valuePropName="fileList"
                getValueFromEvent={(event) => {
                  return event?.fileList
                }}
                rules={[
                  {
                    validator(_, fileList) {
                      return new Promise((resolve, reject) => {
                        if (fileList && fileList[0].size > 999999) {
                          reject('File Terlalu Besar!')
                        } else {
                          resolve('Berhasil!')
                        }
                      })
                    },
                  },
                ]}
              >
                <Upload
                  maxCount={1}
                  beforeUpload={(file) => {
                    console.log('sad', file)
                    return new Promise((resolve, reject) => {
                      if (file.size > 999999) {
                        reject('File Terlalu Besar!')
                        message.error('File Terlalu Besar')
                      } else {
                        resolve('Berhasil!')
                      }
                    })
                  }}
                  customRequest={(info) => {
                    //   console.log(info.onSuccess())
                    //   setFileList([info.file])
                    info.onSuccess('done', info.file)
                  }}
                  disabled={!isEdit}
                  // showUploadList={false}
                >
                  <Button icon={<UploadOutlined />} block disabled={!isEdit}>
                    Pilih Foto
                  </Button>
                  {/* {fileList[0]?.name} */}
                </Upload>
              </Form.Item>
              <Row gutter={8}>
                <Col>
                  <Form.Item>
                    <Button
                      style={{
                        background: '#00e549',
                        borderColor: '#00e549',
                        color: 'white',
                      }}
                      className={'flex items-center'}
                      onClick={() => setIsEdit(!isEdit)}
                      htmlType="button"
                    >
                      Edit
                    </Button>
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button
                      style={{
                        background: '#1890ff',
                        borderColor: '#1890ff',
                        color: 'white',
                      }}
                      htmlType="submit"
                      disabled={!isEdit}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
              {/* </div> */}
            </Form>
          </div>
        </Card>
      )}
    </div>
  )
}
export default DetailProfesi
