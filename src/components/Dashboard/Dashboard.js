import React, { useState, useEffect } from 'react'
import { Input, Card, Col, List, Button } from 'antd';
import './Dashboard.css'
import { tasks } from './utils.js'

function Dashboard({ user }) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const getToday = () => {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = months[newDate.getMonth()];
        return (`${date} ${month}`);
    }

    const getTodayDate = () => {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1; // Month is zero-indexed
        let year = newDate.getFullYear();
        return (`${date}-${month < 10 ? `0${month}` : `${month}`}-${year}`);
    }

    const [today, setToday] = useState(getToday());
    const [todayDate, setTodayDate] = useState(getTodayDate());
    const [todayTasks, setTodayTasks] = useState(null)

    const [category, setCategory] = useState('All');
    const cats = ['All', 'Work', 'Workout', 'Free Time'];

    const organizedTasks = tasks.reduce((acc, task) => {
        const { category } = task;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(task);
        return acc;
    }, {});

    useEffect(() => {
        // Run this once when the component mounts
        setTodayTasks(tasks.filter(task => task.date === todayDate));
    }, [todayDate]); // Only run the effect when todayDate changes



    return (
        <div className='h-screen overflow-y-auto'>
            <div className='p-7'>
                <div className='flex flex-row justify-between items-center'>
                    <p className='text-2xl xs:text-3xl font-bold text-white'> Hello {user.name.split(' ')[0]}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                </div>
                <p className='text-md text-white'>Today, {today}</p>
            </div>

            <div className='p-7'>
                <div className='py-3'>
                    <h2 className='text-white font-bold text-xl xs:text-2xl'>Today's tasks</h2>
                </div>
                <div className='max-w-full flex flex-row gap-x-3 overflow-x-auto overscroll-none'>
                    {
                        (!todayTasks || todayTasks.length === 0) ? (
                            <div className='w-full text-gray-400 text-lg text-center'>
                                <p>No pending tasks for today.</p>
                            </div>
                        ) : (
                            todayTasks.map((task) => (
                                <Col span={16}>
                                    <div className='flex flex-row w-full'>
                                        <div className={`${task.color} w-3 rounded-tl-md rounded-bl-md`}></div>
                                        <Card title={task.name} className='card-border w-full'>
                                            <p>{task.category}</p>
                                            <p>{task.date}</p>
                                        </Card>
                                    </div>
                                </Col>
                            ))
                        )
                    }
                </div>
            </div>

            <div className='text-white overflow-y-scroll mb-20'>
                <div className='px-7 py-2'>
                    <h3 className='text-2xl text-white font-bold'>Your Tasks</h3>
                </div>
                {
                    (tasks && tasks.length > 0 ? (
                        <div>
                            <div className='px-7 py-2 flex flex-row gap-x-3 overflow-x-auto'>
                                {
                                    cats.map((cat) => (
                                        <Button key={cat} onClick={() => setCategory(cat)}>
                                            <p className='text-white'>{cat}</p>
                                        </Button>
                                    ))
                                }
                            </div>
                            <div className='p-7 flex flex-col gap-y-3 w-full overflow-y-scroll mb-10'>
                                {
                                    (category == "Work") ? (
                                        organizedTasks[category].map((task) => (
                                            <div className='flex flex-row w-full'>
                                                <div className={`${task.color} w-3 rounded-tl-md rounded-bl-md`}></div>
                                                <Card title={task.name} className='card-border w-full'>
                                                    <p>{task.category}</p>
                                                    <p>{task.date}</p>
                                                </Card>
                                            </div>

                                        ))
                                    ) : (category === "Workout") ? (
                                        organizedTasks[category].map((task) => (
                                            <div className='flex flex-row w-full'>
                                                <div className={`${task.color} w-3 rounded-tl-md rounded-bl-md`}></div>
                                                <Card title={task.name} className='card-border w-full'>
                                                    <p>{task.category}</p>
                                                    <p>{task.date}</p>
                                                </Card>
                                            </div>
                                        ))
                                    ) : (category === "Free Time") ? (
                                        organizedTasks[category].map((task) => (
                                            <div className='flex flex-row w-full'>
                                                <div className={`${task.color} w-3 rounded-tl-md rounded-bl-md`}></div>
                                                <Card title={task.name} className='card-border w-full'>
                                                    <p>{task.category}</p>
                                                    <p>{task.date}</p>
                                                </Card>
                                            </div>
                                        ))
                                    ) : (
                                        tasks.map((task) => (
                                            <div className='flex flex-row w-full'>
                                                <div className={`${task.color} w-3 rounded-tl-md rounded-bl-md`}></div>
                                                <Card title={task.name} className='card-border w-full'>
                                                    <p>{task.category}</p>
                                                    <p>{task.date}</p>
                                                </Card>
                                            </div>
                                        ))
                                    )
                                }
                            </div>
                        </div>
                    ) : (
                        <div className='w-full text-gray-400 text-lg text-center'>
                            <p>No tasks scheduled for you.</p>
                        </div>
                    ))
                }
            </div>

        </div >
    )
}

export default Dashboard