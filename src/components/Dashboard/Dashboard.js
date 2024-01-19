import React, { useState } from 'react'
import { ConfigProvider } from 'antd';
import { Drawer, Button, DatePicker, Typography, Input } from 'antd';
import { CalendarOutlined, PlusOutlined } from '@ant-design/icons';

function Dashboard() {

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
    };

    return (
        <div>
            <div onClick={showDrawer} className='w-16 h-16 flex flex-row justify-center text-center items-center cursor-pointer rounded-full bg-teal-300 hover:shadow-lg hover:shadow-teal-300/50 focus:shadow-lg focus:shadow-teal-300/50 focus:outline-0 focus:outline-none'>
                <p className='text-xl font-extrabold'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </p>
            </div>
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
        </div>
    )
}

export default Dashboard