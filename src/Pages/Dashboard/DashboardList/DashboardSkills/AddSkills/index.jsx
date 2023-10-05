import { Button, Col, Form, Input, message, Row } from 'antd'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SKILLS } from '../../../../../Utils/endpoint'
import { LOCALSTORAGE_TOKEN } from '../../../../../Utils/types'

const AddSkills = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
  const key = 'loadingmsg'

  const onFinish = async (event) => {
    // console.log('asdasdasdasd', event.image[0].originFileObj)
    setActive(true)
    messageApi.open({
      key,
      style: {
        marginTop: '100px',
      },
      duration: 20000,
      type: 'loading',
      content: 'Loading...',
    })

    try {
      const options = {
        headers: {
          Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
        },
      }

      const formData = new FormData()
      formData.append('name', event.skills)
      const response = await axios.post(SKILLS, formData, options)
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
          content: 'Terjadi Kesalahan!',
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
  return (
    <div>
      {contextHolder}
      <div className="mt-8 mb-12 flex items-center justify-between lg:mx-12 mx-2">
        <p className="text-3xl">Tambah Keahlian</p>
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
      <Form onFinish={onFinish}>
        <Row gutter={16}>
          <Col xs={24} sm={20}>
            <Form.Item
              name="skills"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Skill" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={4}>
            <Form.Item>
              <Button
                style={{
                  background: '#1890ff',
                  borderColor: '#1890ff',
                  color: 'white',
                }}
                className="w-full"
                htmlType="submit"
                disabled={active}
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
export default AddSkills
