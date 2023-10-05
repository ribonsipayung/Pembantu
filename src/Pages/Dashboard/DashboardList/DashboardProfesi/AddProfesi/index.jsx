import { UploadOutlined } from '@ant-design/icons'
import { Button, Col, Form, Input, message, Row, Upload } from 'antd'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PROFESI } from '../../../../../Utils/endpoint'
import { LOCALSTORAGE_TOKEN } from '../../../../../Utils/types'

const { Dragger } = Upload

const AddProfesi = () => {
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
          'Content-Type': 'multipart/form-data',
          Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
        },
      }

      const formData = new FormData()
      formData.append('name', event.profesi)
      formData.append('icon', event.image[0].originFileObj)
      const response = await axios.post(PROFESI, formData, options)
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

  return (
    <div>
      {contextHolder}
      <div className="mt-8 mb-12 flex items-center justify-between lg:mx-12 mx-2">
        <p className="text-3xl">Add Profesi</p>
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
      <Form onFinish={onFinish}>
        <Form.Item
          name="profesi"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Profesi" />
        </Form.Item>
        <Form.Item
          name="image"
          valuePropName="fileList"
          getValueFromEvent={(event) => {
            return event?.fileList
          }}
          rules={[
            {
              required: true,
              message: 'Mohon pilih foto',
            },
          ]}
        >
          <Dragger
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
            // showUploadList={false}
            listType="picture"
          >
            <div className="flex items-center justify-center">
              <UploadOutlined />
              <p>Pilih Foto</p>
            </div>
            {/* {fileList[0]?.name} */}
          </Dragger>
        </Form.Item>
        <Form.Item>
          <Button
            style={{
              background: '#1890ff',
              borderColor: '#1890ff',
              color: 'white',
            }}
            htmlType="submit"
            disabled={active}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default AddProfesi
