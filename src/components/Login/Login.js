import React, { useState } from 'react'
import todo from '../images/todo.webp'
import { Button } from 'antd';
import { Input, Space } from 'antd';
import { Typography } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined, UserOutlined, LockOutlined } from '@ant-design/icons'
import { ConfigProvider } from 'antd';

function Login() {

  const { Title } = Typography;
  const [username, setUserName] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePassClick = () => {
    if (passwordVisible) {
      setPasswordVisible(false);
    }
    if (!passwordVisible) {
      setPasswordVisible(true);
    }
  }


  return (
    <div>
      <div className='p-7'>
        <div className='w-full flex flex-row justify-center items-center'>
          <img src={todo} alt='Todo' className='w-56 self-center' />
        </div>
        <h1 className='text-4xl font-bold text-white'>Login</h1>
        <p className='text-sm text-white mt-2'>Please login to continue.</p>
      </div>
      <div className='flex flex-col justify-items-center items-center p-7'>
        <div className='w-full'>
          <Typography className='text-white text-md'><span className='text-red-500'>*</span> Username</Typography>
          <ConfigProvider theme={{ token: { colorBgContainer: 'transparent', colorTextPlaceholder: 'rgb(156 163 175);', colorText: "#ffffff" } }}>
            <Input prefix={<UserOutlined />} variant='filled' size='large' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)} className='bg-transparent hover:bg-transparent focus:bg-transparent text-white placeholder:text-gray-400' required />
          </ConfigProvider>
        </div>
        <br />
        <div className='w-full'>
          <Typography className='text-white text-md'><span className='text-red-500'>*</span> Password</Typography>
          <ConfigProvider theme={{ token: { colorBgContainer: 'transparent', colorTextPlaceholder: 'rgb(156 163 175);', colorText: "#ffffff", activeBorderColor: "transparent" } }}>
            <div>
              <Input prefix={<LockOutlined />} variant='filled' className='bg-transparent hover:bg-transparent !focus:bg-transparent placeholder:text-gray-300' addonAfter={<Typography onClick={handlePassClick} className=' focus:'> {passwordVisible ? (<span><EyeInvisibleOutlined /> Hide</span>) : (<span><EyeOutlined /> Show</span>)}</Typography>} addonBg="transparent" type={passwordVisible ? 'text' : 'password'} size='large' placeholder="Password" required />
            </div>
          </ConfigProvider>
        </div>
        <br />
        <div className='p-3 w-full flex flex-row justify-center text-center items-center rounded-full bg-teal-300'>
          <p className='text-xl font-bold cursor-pointer'>LOGIN</p>
        </div>
        <div className='py-3 flex flex-row justify-center text-center items-center w-full'>
          <p className='text-teal-300'>Forgot Password?</p>
        </div>
      </div>

      <div className='my-3 flex flex-row justify-center text-center items-center'>
        <p className='text-gray-300'>Don't have an account? <span className='text-teal-300'>Sign up</span></p>
      </div>
    </div>
  )
}

export default Login