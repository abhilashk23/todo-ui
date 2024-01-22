import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import todo from '../images/todo.webp'
import { Button } from 'antd';
import { Input, Space } from 'antd';
import { Typography } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined, UserOutlined, LockOutlined } from '@ant-design/icons'
import { ConfigProvider } from 'antd';
import axios from 'axios';

function Login() {

  const { Title } = Typography;
  const history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handlePassClick = () => {
    if (passwordVisible) {
      setPasswordVisible(false);
    }
    if (!passwordVisible) {
      setPasswordVisible(true);
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://todo-api-oy99.onrender.com/users/login', { username, password })
        .then((response) => {
          localStorage.setItem('token', response.data);
          history.push('/user');
          window.location.reload();
        })
        .catch(error => console.log('Invalid creds'))
    } catch (error) {

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
      <div className='flex flex-col justify-items-center items-center py-4 px-7'>
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
              <Input prefix={<LockOutlined />} variant='filled' className='bg-transparent hover:bg-transparent !focus:bg-transparent placeholder:text-gray-300' addonAfter={<Typography onClick={handlePassClick} className=' focus:'> {passwordVisible ? (<span><EyeInvisibleOutlined /> Hide</span>) : (<span><EyeOutlined /> Show</span>)}</Typography>} addonBg="transparent" type={passwordVisible ? 'text' : 'password'} size='large' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </ConfigProvider>
        </div>
        <br />
        <div className='p-3 w-full flex flex-row justify-center text-center items-center cursor-pointer rounded-full bg-teal-300 hover:shadow-lg hover:shadow-teal-300/50 focus:shadow-lg focus:shadow-teal-300/50' onClick={handleLogin}>
          <a href='/user'><p className='text-xl font-bold'>LOGIN</p></a>
          {
            message ? (<p>{message}</p>) : (<p></p>)
          }
        </div>
        <div className='py-3 flex flex-row justify-center text-center items-center w-full'>
          <p className='text-teal-300'>Forgot Password?</p>
        </div>
      </div>

      <div className='my-3 flex flex-row justify-center text-center items-center'>
        <p className='text-gray-300'>Don't have an account? <a href="/register" className='text-teal-300 cursor-pointer'>Sign up</a></p>
      </div>
    </div>
  )
}

export default Login