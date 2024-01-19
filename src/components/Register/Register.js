import React, { useState } from 'react'
import { Button } from 'antd';
import { Input, Space } from 'antd';
import { Typography } from 'antd';
import { EyeInvisibleOutlined, EyeOutlined, UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { ConfigProvider } from 'antd';


function Register() {

    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [cpassword, setCPassword] = useState("");
    const [cpasswordVisible, setCPasswordVisible] = useState(false);

    const handlePassClick = () => {
        if (passwordVisible) {
            setPasswordVisible(false);
        }
        if (!passwordVisible) {
            setPasswordVisible(true);
        }
    }

    const handleCPassClick = () => {
        if (cpasswordVisible) {
            setCPasswordVisible(false);
        }
        if (!cpasswordVisible) {
            setCPasswordVisible(true);
        }
    }

    return (
        <div>
            {/* <div className='flex flex-row justify-start pb-4 pt-7 px-7 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </div> */}
            <div className='p-7'>
                <h1 className='text-4xl font-bold text-white'>Create an Account</h1>
                <p className='text-sm text-white mt-2'>Signup today, it's free!</p>
            </div>
            <div className='flex flex-col justify-items-center items-center py-4 px-7'>
                <div className='w-full'>
                    <Typography className='text-white text-md'><span className='text-red-500'>*</span> Name</Typography>
                    <ConfigProvider theme={{ token: { colorBgContainer: 'transparent', colorTextPlaceholder: 'rgb(156 163 175);', colorText: "#ffffff" } }}>
                        <Input prefix={<UserOutlined />} variant='filled' size='large' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} className='bg-transparent hover:bg-transparent focus:bg-transparent text-white placeholder:text-gray-400' required />
                    </ConfigProvider>
                </div>
                <br />
                <div className='w-full'>
                    <Typography className='text-white text-md'><span className='text-red-500'>*</span> Username</Typography>
                    <ConfigProvider theme={{ token: { colorBgContainer: 'transparent', colorTextPlaceholder: 'rgb(156 163 175);', colorText: "#ffffff" } }}>
                        <Input prefix={<UserOutlined />} variant='filled' size='large' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)} className='bg-transparent hover:bg-transparent focus:bg-transparent text-white placeholder:text-gray-400' required />
                    </ConfigProvider>
                </div>
                <br />
                <div className='w-full'>
                    <Typography className='text-white text-md'><span className='text-red-500'>*</span> Email</Typography>
                    <ConfigProvider theme={{ token: { colorBgContainer: 'transparent', colorTextPlaceholder: 'rgb(156 163 175);', colorText: "#ffffff" } }}>
                        <Input prefix={<MailOutlined />} variant='filled' size='large' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='bg-transparent hover:bg-transparent focus:bg-transparent text-white placeholder:text-gray-400' required />
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
                <div className='w-full'>
                    <Typography className='text-white text-md'><span className='text-red-500'>*</span> Confirm Password</Typography>
                    <ConfigProvider theme={{ token: { colorBgContainer: 'transparent', colorTextPlaceholder: 'rgb(156 163 175);', colorText: "#ffffff", activeBorderColor: "transparent" } }}>
                        <div>
                            <Input prefix={<LockOutlined />} variant='filled' className='bg-transparent hover:bg-transparent !focus:bg-transparent placeholder:text-gray-300' addonAfter={<Typography onClick={handleCPassClick} className=' focus:'> {cpasswordVisible ? (<span><EyeInvisibleOutlined /> Hide</span>) : (<span><EyeOutlined /> Show</span>)}</Typography>} addonBg="transparent" type={cpasswordVisible ? 'text' : 'password'} size='large' placeholder="Confirm Password" value={cpassword} onChange={(e) => setCPassword(e.target.value)} required />
                        </div>
                    </ConfigProvider>
                </div>
                <br />
                <div className='p-3 w-full flex flex-row justify-center text-center items-center cursor-pointer rounded-full bg-teal-300 hover:shadow-lg hover:shadow-teal-300/50 focus:shadow-lg focus:shadow-teal-300/50'>
                    <p className='text-xl font-bold'>SIGN UP</p>
                </div>
            </div>

            <div className='my-3 flex flex-row justify-center text-center items-center'>
                <p className='text-gray-300'>Already have a account? <a href="/login" className='text-teal-300 cursor-pointer'>Sign in</a></p>
            </div>
        </div>
    )
}

export default Register