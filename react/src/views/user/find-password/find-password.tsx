import React, {useState} from "react";
import {Button, Form, Input} from "antd-mobile";
import {Link} from "react-router-dom";
import './find-password.scss'
import {FindPasswordFrom} from "./find-password-types";
import CodeButton from "@/components/user/code-button";

export default function FindPassword() {
  const [email, setEmail] = useState('')

  function onFinish(data: FindPasswordFrom) {
    console.log(arguments)
  }

  return (
    <div className='find-password-box'>
      <h3 className='title'>找回密码</h3>
      <Form onFinish={onFinish} layout='horizontal' footer={
        <div>
          <Button shape='rounded' block type='submit' color='primary' size='middle'>提交</Button>
          <div className='flex jst-cnt-between fs-14 mt-10'>
            <Link to='/login' className='co-blue'>登录</Link>
            <Link to='/register' className='co-blue'>注册</Link>
          </div>
        </div>
      }>
        <Form.Item name='username' label='用户名' rules={[{required: true, message: '请填写用户名'}]}>
          <Input placeholder='请输入用户名'/>
        </Form.Item>
        <Form.Item name='email' label='邮箱' rules={[{required: true, message: '请填写邮箱'}]}>
          <Input placeholder='请输入邮箱' onChange={setEmail} clearable type='password'/>
        </Form.Item>
        <Form.Item
          name='code'
          label='邮箱验证码'
          rules={[{required: true, message: '请填写验证码'}]}
          extra={
            <div className='extraPart'>
              <CodeButton validator={() => !!email} requestConfig={{url: '/'}}/>
            </div>
          }
        >
          <Input placeholder='请输入验证码' clearable/>
        </Form.Item>
      </Form>
    </div>
  )
}
