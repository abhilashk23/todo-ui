import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard';
import Nav from '../components/Nav/Nav';

function Home() {
  return (
    <div className='relative h-screen'>
        <div className='h-screen inset-x-0 top-0'>
            <Dashboard />
        </div>
        <div className='sticky inset-x-0 bottom-0'>
            <Nav />
        </div>
    </div>
  )
}

export default Home