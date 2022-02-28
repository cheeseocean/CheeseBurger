import React from "react";
import {Button, Form, Input} from "antd-mobile";
import {Link} from "react-router-dom";
import './register.scss'
import {RegisterForm} from "@/views/user/register/register-types";

export default function Register() {
  function onFinish(data: RegisterForm) {
    console.log(data)
  }

  return (
    <div className='register-box'>
      <h3 className='title'>注册</h3>
      <Form onFinish={onFinish} layout='horizontal' footer={
        <div>
          <Button shape='rounded' block type='submit' color='primary' size='middle'>提交</Button>
          <div className='flex jst-cnt-between fs-14 mt-10'>
            <Link to='/find-password' className='co-blue'>找回密码</Link>
            <Link to='/login' className='co-blue'>登录</Link>
          </div>
        </div>
      }>
        <Form.Item name='username' label='用户名' rules={[{required: true, message: '用户名不能为空'}]}>
          <Input placeholder='请输入用户名'/>
        </Form.Item>
        <Form.Item name='email' label='邮箱' rules={[{required: true, message: '邮箱不能为空'}]}>
          <Input placeholder='请输入邮箱' clearable type='password'/>
        </Form.Item>
        <Form.Item name='password' label='密码' rules={[{required: true, message: '密码不能为空'}]}>
          <Input placeholder='请输入密码' clearable type='password'/>
        </Form.Item>
        <Form.Item name='password2' label='确认密码' rules={[{required: true, message: '确认密码不能为空'}]}>
          <Input placeholder='请再次输入密码' clearable type='password'/>
        </Form.Item>
        <Form.Item
          name='code'
          label='邮箱验证码'
          rules={[{required: true, message: '验证码不能为空'}]}
          extra={
            <div className='extraPart'>
              <Button>发送验证码</Button>
            </div>
          }
        >
          <Input placeholder='请输入验证码' clearable/>
        </Form.Item>
      </Form>
    </div>
  )
}
