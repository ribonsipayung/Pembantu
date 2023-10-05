import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Upload,
} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Link, useNavigate } from 'react-router-dom'
import { UploadOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ASSISTANT, PROFESI, SKILLS } from '../../../../Utils/endpoint'
import { LOCALSTORAGE_TOKEN } from '../../../../Utils/types'

const { Dragger } = Upload

const AddAssistant = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const key = 'loadingmsg'
  const navigate = useNavigate()
  const [state, setState] = useState({
    profesi: [],
    skill: [],
    isLoading: false,
  })

  const getDataProfesi = async () => {
    try {
      const response = await axios.get(PROFESI)
      setState((prevState) => ({
        ...prevState,
        profesi: response.data,
      }))
    } catch (err) {
      console.log(err)
    }
  }

  const getDataSkill = async () => {
    try {
      const response = await axios.get(SKILLS)
      setState((prevState) => ({
        ...prevState,
        skill: response.data,
      }))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getDataProfesi()
    getDataSkill()
  }, [])

  const onFinish = async (values) => {
    console.log('Form values:', values)

    messageApi.open({
      key,
      style: {
        marginTop: '100px',
      },
      duration: 20000,
      type: 'loading',
      content: 'Loading...',
    })

    const data = new FormData()
    data.append('name', values?.fullName)
    data.append('age', Number(values?.age))
    data.append('profession', Number(values?.profesi))
    data.append('religion', values?.religion)
    data.append('province', values?.province)
    data.append('city', values?.city)
    // dummy skill
    data.append('gender', values?.gender)
    if(values?.skills !== undefined){
      for (let i = 0; i < values?.skills.length; i++) {
        data.append('skill', values?.skills[i])
      }
    }

    if (values?.salary !== undefined) {
      data.append('salary', values?.salary)
    }
    if (values?.deskripsi !== undefined) {
      data.append('desc', values?.deskripsi)
    }
    if (values?.scope !== undefined) {
      data.append('scope_area', values?.scope)
    }
    if (values?.education !== undefined) {
      data.append('education', values?.education)
    }

    if (values?.address !== undefined) {
      data.append('address', values?.address)
    }

    if (values?.image[0] !== undefined) {
      console.log('masukk image')
      data.append('icon', values?.image[0].originFileObj)
    }
    if (values?.cv[0] !== undefined) {
      console.log('masukkk cv')
      data.append('cv', values?.cv[0].originFileObj)
    }

    const options = {
      headers: {
        Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
      },
    }

    try {
      const response = await axios.post(ASSISTANT, data, options)
      console.log(response)
      if (response.data) {
        message.destroy()
        messageApi.open({
          key,
          style: {
            marginTop: '100px',
          },
          type: 'success',
          content: 'Berhasil Submit Assistant',
          duration: 2,
          onClose: () => {
            message.destroy()
            navigate('/dashboard-assistant')
          },
        })
      } else {
        messageApi.error({
          key,
          style: {
            marginTop: '100px',
          },
          type: 'primary',
          content: 'Terjadi Kesalahan Submit Assisten!',
          duration: 2,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (value) => {
    // console.log(value)
  }

  return (
    <div>
      {contextHolder}
      <div className="mt-8 mb-12 flex items-center justify-between lg:mx-12 mx-2">
        <p className="text-3xl">Tambah Assistant</p>
        <Link to={'/dashboard-assistant'}>
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
      <Form onFinish={onFinish} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="fullName"
              label="Full Name"
              rules={[
                { required: true, message: 'Please enter your full name' },
              ]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="age"
              label="Age"
              rules={[{ required: true, message: 'Please enter your age' }]}
            >
              <InputNumber
                placeholder="Age"
                max={100}
                min={1}
                className={'w-full'}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="profesi"
              label="Profesi"
              rules={[{ required: true, message: 'Please enter your Profesi' }]}
            >
              <Select
                placeholder="Profesi"
                options={state?.profesi?.map((item) => ({
                  label: item.name,
                  value: item.id,
                }))}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="religion"
              label="Religion"
              rules={[
                { required: true, message: 'Please select your religion' },
              ]}
            >
              <Select placeholder="Religion">
                <Select.Option value="Islam">Islam</Select.Option>
                <Select.Option value="Kristen Protestan">
                  Kristen Protestan
                </Select.Option>
                <Select.Option value="Kristen Katolik">
                  Kristen Katolik
                </Select.Option>
                <Select.Option value="Hindu">Hindu</Select.Option>
                <Select.Option value="Buddha">Buddha</Select.Option>
                <Select.Option value="Khonghucu">Khonghucu</Select.Option>
                {/* <Select.Option value="other">Other</Select.Option> */}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="scope"
              label="Scope Area"
              rules={
                [
                  // { required: true, message: 'Please enter your Scope Area!' },
                ]
              }
            >
              <Input placeholder="Scope Area" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="province"
              label="Province"
              rules={[
                { required: true, message: 'Please enter your province!' },
              ]}
            >
              <Input placeholder="Wilayah Kerja" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="salary"
              label="Salary"
              // rules={[{ required: true, message: 'Please enter your salary!' }]}
            >
              <Input placeholder="Salary" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: 'Please enter your salary!' }]}
            >
              <Input placeholder="Salary" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="education"
              label="Education"
              // rules={[{ required: true, message: 'Please enter your salary!' }]}
            >
              <Input placeholder="Education" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="gender" label="Gender">
              <Select
                size={'middle'}
                placeholder="Skill"
                // defaultValue={}
                onChange={handleChange}
                style={{
                  width: '100%',
                }}
                options={[
                  { value: 'Perempuan', label: 'Perempuan' },
                  { value: 'Pria', label: 'Pria' },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="address" label="Address">
              <Input placeholder="Address" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="skills"
              label="Skills"
              rules={[
                { required: true, message: 'Please choose your skills!' },
              ]}
              // initialValue={['a10', 'c12']}
            >
              <Select
                mode="multiple"
                size={'middle'}
                placeholder="Skill"
                // defaultValue={}
                onChange={handleChange}
                style={{
                  width: '100%',
                }}
                options={state?.skill?.map((item) => ({
                  label: item.name,
                  value: item.id,
                }))}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="deskripsi"
              label="Description"
              rules={
                [
                  // { required: true, message: 'Harap Isi Deskripsi Diri Anda!' },
                ]
              }
            >
              <TextArea
                showCount
                // maxLength={100}
                style={{
                  height: 120,
                  resize: 'none',
                }}
                placeholder="Description"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
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
                    if (file.size > 9999999) {
                      reject('File Terlalu Besar!')
                      message.error({
                        content: 'File Terlalu Besar!',
                        className: 'mt-24',
                      })
                    } else {
                      resolve('Berhasil!')
                      // message.success('Berhasil Upload File')
                    }
                  })
                }}
                customRequest={(info) => {
                  info.onSuccess('done', info.file)
                }}
                // showUploadList={true}
                // listType="picture"
              >
                <div className="flex items-center justify-center">
                  <UploadOutlined />
                  <p>Pilih Foto</p>
                </div>
                {/* {fileList[0]?.name} */}
              </Dragger>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="cv"
              valuePropName="fileList"
              getValueFromEvent={(event) => {
                return event?.fileList
              }}
              rules={[
                {
                  required: true,
                  message: 'Please enter your CV',
                },
                // {
                //   validator(_, fileList) {
                //     return new Promise((resolve, reject) => {
                //       if (fileList && fileList[0].type !== 'application/pdf') {
                //         reject('Format should be PDF!')
                //       }
                //     })
                //   },
                // },
              ]}
            >
              <Dragger
                maxCount={1}
                showRemoveIcon={false}
                beforeUpload={(file) => {
                  return new Promise((resolve, reject) => {
                    if (file.type === 'application/pdf') {
                      if (file.size > 9999999) {
                        reject('File Terlalu Besar!')
                        message.error({
                          content: 'File Terlalu Besar!',
                          className: 'mt-24',
                        })
                      } else {
                        resolve('Success Upload File!')
                        // message.success('Success Upload File!')
                      }
                    } else {
                      reject('Format should be PDF!')
                      message.error({
                        content: 'Format should be PDF!',
                        className: 'mt-24',
                      })
                    }
                  })
                }}
                customRequest={(info) => {
                  info.onSuccess('done', info.file)
                }}
                // showUploadList={true}
              >
                <div className="flex items-center justify-center">
                  <UploadOutlined />
                  <p>Enter Your CV</p>
                </div>
                {/* {fileList[0]?.name} */}
              </Dragger>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item className="mt-4 mb-24">
              <Button
                type="default"
                htmlType="submit"
                style={{
                  background: '#1890ff',
                  borderColor: '#1890ff',
                  color: 'white',
                }}
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
export default AddAssistant
