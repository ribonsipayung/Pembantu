import { LoadingOutlined } from '@ant-design/icons'
import { Button, Card, Col, Form, Input, message, Row, Spin } from 'antd'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { SKILLS } from '../../../../../Utils/endpoint'
import { LOCALSTORAGE_TOKEN } from '../../../../../Utils/types'

const DetailSkills = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const { id } = useParams()
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()
  //   const [active, setActive] = useState(false)
  const key = 'loadingmsg'

  const options = {
    headers: {
      Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
    },
  }
  const dataDetail = async () => {
    setLoading(true)
    try {
      const response = await axios.get(SKILLS + id + '/', options)
    //   console.log(response.data)
      setData(response.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    dataDetail()
  }, [])

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
        Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
      },
    }
    const formData = new FormData()
    formData.append('name', event.name)

    try {
      const response = await axios.patch(SKILLS + id + '/', formData, options)
    //   console.log(response)
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
            navigate('/dashboard-skills')
          },
        })
      } else {
        messageApi.error({
          key,
          style: {
            marginTop: '100px',
          },
          type: 'primary',
          content: 'Terjadi Kesalahan Edit Data!',
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
        <p className="text-3xl">Detail Keahlian</p>
        <div>
          <Link to={'/dashboard-skills'}>
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
        <Card className={'shadow-xl w-full'}>
          <Form onFinish={onFinish}>
            <Row gutter={16} align="middle">
              <Col xs={24} sm={20}>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  initialValue={`${data?.name}`}
                >
                  <Input placeholder="Skill" disabled={!isEdit} />
                </Form.Item>
              </Col>
              <Col xs={12} sm={2}>
                <Form.Item>
                  <Button
                    style={{
                      background: '#00e549',
                      borderColor: '#00e549',
                      color: 'white',
                    }}
                    className={'w-full'}
                    onClick={() => setIsEdit(!isEdit)}
                    htmlType="button"
                  >
                    Edit
                  </Button>
                </Form.Item>
              </Col>
              <Col xs={12} sm={2}>
                <Form.Item>
                  <Button
                    style={{
                      background: '#1890ff',
                      borderColor: '#1890ff',
                      color: 'white',
                    }}
                    className="w-full"
                    htmlType="submit"
                    disabled={!isEdit}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      )}
    </div>
  )
}
export default DetailSkills
