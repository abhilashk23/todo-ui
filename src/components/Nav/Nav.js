import React, { useState } from 'react'
import { ConfigProvider } from 'antd';
import { Drawer, Button, DatePicker, Typography, Input } from 'antd';
import { CalendarOutlined, PlusOutlined } from '@ant-design/icons';
import '../Nav/Nav.css';

function Nav() {
    const { TextArea } = Input;

    const [date, setDate] = useState(null);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
        setDate(date)
    }

    return (
        <div className="bg-white h-[4.4rem] px-6 rounded-t-xl flex flex-row justify-evenly">
            <div className='w-1/3 flex flex-row justify-between items-center'>
                <span>Home</span>
                <span>Profile</span>
            </div>
            <ul className="flex relative" onClick={showDrawer}>
                <span className='bg-teal-300 duration-500 translate-x-0 border-4 border-gray-800 h-16 w-16 absolute -top-6 rounded-full'>
                    <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] -tr-[11px] shadow-myShadow1"></span>
                    <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] -tl-[11px] shadow-myShadow2"></span>
                </span>
                <li className="w-16">
                    <a
                        className="flex flex-col text-center pt-6"
                    >
                        <span
                            className='z-10 flex justify-center items-center text-lg font-extrabold cursor-pointer duration-500 -mt-8 text-gray-800'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </span>

                    </a>
                </li>
            </ul>
            <Drawer
                title="Add task"
                placement='bottom'
                width={720}
                onClose={onClose}
                open={open}
            >

                <div className='flex flex-col'>
                    <ConfigProvider theme={{ token: { fontSize: "25px", colorTextPlaceholder: 'rgb(75 85 99)', color: 'rgb(75 85 99)' } }}>
                        <Input variant='borderless' placeholder='Task Title' className='text-gray-700' />
                    </ConfigProvider>
                </div>
                <br />
                <div className='flex flex-row justify-items-center items-center gap-x-4'>
                    <Typography className='text-md font-medium'>Date: </Typography>
                    <DatePicker onChange={onChange} />
                </div>
                <br />
                <div>
                    <ConfigProvider theme={{ token: { colorTextPlaceholder: 'rgb(75 85 99)', color: 'rgb(75 85 99)' } }}>
                        <TextArea rows={4} placeholder='Would you like to add more details?' />
                    </ConfigProvider>
                </div>
                <br />
                <div className='p-2 w-1/2 flex flex-row justify-center text-center items-center cursor-pointer rounded-full bg-teal-300 hover:shadow-lg hover:shadow-teal-300/50 focus:shadow-lg focus:shadow-teal-300/50'>
                    <p className='text-md font-bold'><PlusOutlined /> Add task</p>
                </div>
            </Drawer>
            <div className='w-1/3 flex flex-row justify-between items-center'>
                <span>Home</span>
                <span>Profile</span>
            </div>
        </div>
    )
}

export default Nav