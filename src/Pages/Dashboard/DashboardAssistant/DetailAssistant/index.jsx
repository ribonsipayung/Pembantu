/* eslint-disable react/jsx-no-target-blank */
import { LoadingOutlined, UploadOutlined } from '@ant-design/icons'
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Spin,
} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import Dragger from 'antd/es/upload/Dragger'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ASSISTANT, PROFESI, SKILLS } from '../../../../Utils/endpoint'
import { LOCALSTORAGE_TOKEN } from '../../../../Utils/types'

const DetailAssistant = () => {
  const { id } = useParams()
  const [messageApi, contextHolder] = message.useMessage()
  const key = 'loadingmsg'
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [state, setState] = useState({
    dataDetail: {},
    profesi: [],
    skill: [],
  })

  const getData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(ASSISTANT + id + '/')
      console.log('tessss', response.data)
      setState((prevState) => ({
        ...prevState,
        dataDetail: response.data,
      }))
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

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
      console.log('skilll', response.data)
      setState((prevState) => ({
        ...prevState,
        skill: response.data,
      }))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
    getDataProfesi()
    getDataSkill()
  }, [])

  const onFinish = async (values) => {
    console.log('valuessss', values)
    // console.log('testing', values?.skills[0].value)
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
    data.append('name', values?.name)
    data.append('age', Number(values?.age))
    if (values?.profesi?.value) {
      data.append('profession', Number(values?.profesi?.value))
    } else {
      data.append('profession', Number(values?.profesi))
    }

    if (values?.religion?.value) {
      data.append('religion', values?.religion?.value)
    } else {
      data.append('religion', values?.religion)
    }
    data.append('province', values?.province)
    data.append('city', values?.city)
    if (values?.gender?.value) {
      data.append('gender', values?.gender?.value)
    } else {
      data.append('gender', values?.gender)
    }

    if (values?.skills[0]?.value) {
      for (let i = 0; i < values?.skills.length; i++) {
        data.append('skill', values?.skills[i]?.value)
      }
    } else {
      for (let i = 0; i < values?.skills.length; i++) {
        data.append('skill', values?.skills[i])
      }
    }

    if (values?.salary !== undefined) {
      data.append('salary', values?.salary)
    }
    if (values?.desc !== undefined) {
      data.append('desc', values?.desc)
    }
    if (values?.scope_area !== undefined) {
      data.append('scope_area', values?.scope_area)
    }
    if (values?.education !== undefined) {
      data.append('education', values?.education)
    }

    if (values?.address !== undefined) {
      data.append('address', values?.address)
    }

    if (values?.icon !== undefined) {
      console.log('masukk image')
      data.append('icon', values?.icon[0].originFileObj)
    }
    if (values?.cv !== undefined) {
      console.log('masukkk cv')
      data.append('cv', values?.cv[0].originFileObj)
    }

    const options = {
      headers: {
        Authorization: `Token ${localStorage.getItem(LOCALSTORAGE_TOKEN)}`,
      },
    }

    try {
      const response = await axios.patch(ASSISTANT + id + '/', data, options)
      console.log(response)
      if (response.data) {
        message.destroy()
        messageApi.open({
          key,
          style: {
            marginTop: '100px',
          },
          type: 'success',
          content: 'Berhasil Update Data Asisten!',
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
        <p className="text-3xl">Detail Assistant</p>
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
      {/* Form */}
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <Card className={'shadow-xl w-full h-auto mb-4'}>
          <Form layout="vertical" onFinish={onFinish}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Full Name"
                  initialValue={`${state?.dataDetail?.name}`}
                >
                  <Input placeholder="Full Name" disabled={!isEdit} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="age"
                  label="Age"
                  initialValue={`${state?.dataDetail?.age}`}
                >
                  <InputNumber
                    placeholder="Age"
                    max={100}
                    min={1}
                    className={'w-full'}
                    disabled={!isEdit}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="profesi"
                  label="Profesi"
                  initialValue={{
                    value: state?.dataDetail?.profession_detail?.id,
                    label: state?.dataDetail?.profession_detail?.name,
                  }}
                >
                  <Select
                    placeholder="Profesi"
                    options={state?.profesi?.map((item) => ({
                      label: item.name,
                      value: item.id,
                    }))}
                    disabled={!isEdit}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="religion"
                  label="Religion"
                  initialValue={{
                    value: state?.dataDetail?.religion,
                    label: state?.dataDetail?.religion,
                  }}
                >
                  <Select placeholder="Religion" disabled={!isEdit}>
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
                  name="scope_area"
                  label="Scope Area"
                  initialValue={`${state?.dataDetail?.scope_area}`}
                >
                  <Input placeholder="Scope Area" disabled={!isEdit} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="province"
                  label="Province"
                  initialValue={`${state?.dataDetail?.province}`}
                >
                  <Input placeholder="Wilayah Kerja" disabled={!isEdit} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="salary"
                  label="Salary"
                  // rules={[{ required: true, message: 'Please enter your salary!' }]}
                  initialValue={`${state?.dataDetail?.salary}`}
                >
                  <Input placeholder="Salary" disabled={!isEdit} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="city"
                  label="City"
                  initialValue={`${state?.dataDetail?.city}`}
                >
                  <Input placeholder="Salary" disabled={!isEdit} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="education"
                  label="Education"
                  // rules={[{ required: true, message: 'Please enter your salary!' }]}
                  initialValue={`${state?.dataDetail?.education}`}
                >
                  <Input placeholder="Education" disabled={!isEdit} />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  initialValue={{
                    value: state?.dataDetail?.gender,
                    label: state?.dataDetail?.gender,
                  }}
                >
                  <Select
                    size={'middle'}
                    // onChange={handleChange}
                    style={{
                      width: '100%',
                    }}
                    options={[
                      { value: 'Perempuan', label: 'Perempuan' },
                      { value: 'Pria', label: 'Pria' },
                    ]}
                    disabled={!isEdit}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="address"
                  label="Address"
                  initialValue={`${state?.dataDetail?.address}`}
                >
                  <Input placeholder="Address" disabled={!isEdit} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="skills"
                  label="Skills"
                  // initialValue={state?.skill
                  //   ?.filter((item) =>
                  //     state?.dataDetail?.skill?.includes(item?.id)
                  //   )
                  //   .map((item) => ({
                  //     value: item?.id,
                  //     label: item?.name,
                  //   }))}
                  initialValue={state?.dataDetail?.skills?.map((item) => ({
                    label: item?.name,
                    value: item?.id,
                  }))}
                >
                  <Select
                    mode="multiple"
                    size={'middle'}
                    placeholder="Skill"
                    // defaultValue={}
                    // onChange={handleChange}
                    style={{
                      width: '100%',
                    }}
                    options={state?.skill?.map((item) => ({
                      value: item?.id,
                      label: item?.name,
                    }))}
                    disabled={!isEdit}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="desc"
                  label="Description"
                  initialValue={`${state?.dataDetail?.desc}`}
                >
                  <TextArea
                    showCount
                    // maxLength={100}
                    style={{
                      height: 120,
                      resize: 'none',
                    }}
                    placeholder="Description"
                    disabled={!isEdit}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  name="icon"
                  valuePropName="fileList"
                  getValueFromEvent={(event) => {
                    return event?.fileList
                  }}
                >
                  <Dragger
                    maxCount={1}
                    disabled={!isEdit}
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
                <div className="flex justify-center -mt-4 mb-4">
                  {state?.dataDetail?.icon ? (
                    <a
                      href={state?.dataDetail?.icon}
                      target="_blank"
                      className="text-center text-xs  xl:text-md"
                    >
                      {state?.dataDetail?.icon.slice(0, 50)}...
                    </a>
                  ) : (
                    <p className="text-red-500">CV Masih Kosong</p>
                  )}
                </div>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  name="cv"
                  valuePropName="fileList"
                  getValueFromEvent={(event) => {
                    return event?.fileList
                  }}
                  disabled={!isEdit}
                >
                  <Dragger
                    maxCount={1}
                    showRemoveIcon={false}
                    disabled={!isEdit}
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
                <div className="flex justify-center -mt-4 mb-4">
                  {state?.dataDetail?.cv ? (
                    <a
                      href={state?.dataDetail?.cv}
                      target="_blank"
                      className="text-center text-xs  xl:text-md"
                    >
                      {state?.dataDetail?.cv?.slice(0, 50)}...
                    </a>
                  ) : (
                    <p className="text-red-500">CV Masih Kosong</p>
                  )}
                </div>
              </Col>
            </Row>

            <Row gutter={12}>
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
                <Form.Item className="">
                  <Button
                    type="default"
                    htmlType="submit"
                    style={{
                      background: '#1890ff',
                      borderColor: '#1890ff',
                      color: 'white',
                    }}
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
export default DetailAssistant
