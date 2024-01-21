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
        <div className='bg-blue-500 h-full'>
            <div className='p-7'>
                <p className='text-4xl font-bold text-white'> User Dashboard</p>
            </div>
        </div>
    )
}

export default Dashboard