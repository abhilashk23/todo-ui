import React, { useState } from 'react'
import { ConfigProvider } from 'antd';
import { Drawer, Button, DatePicker, Typography, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../Nav/Nav.css';

function Nav() {
    const { TextArea } = Input;

    const [date, setDate] = useState(null);
    const [open, setOpen] = useState(false);
    const [activetab, setActiveTab] = useState("Home");
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
            <div className='w-1/3 flex flex-row justify-center items-center'>
                {
                    activetab === "Home" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(13 148 136)" class="w-8 h-8">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    ) : (
                        <a href='/user' onClick={(event) => { event.preventDefault(); setActiveTab("Home") }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                        </a>
                    )
                }
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
            <div className='w-1/3 flex flex-row justify-center items-center'>
                {
                    activetab === "Settings" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(13 148 136)" class="w-8 h-8">
                            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
                        </svg>
                    ) : (
                        <a href='/user' onClick={(event) => { event.preventDefault(); setActiveTab("Settings") }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    )
                }
            </div>
        </div>
    )
}

export default Nav