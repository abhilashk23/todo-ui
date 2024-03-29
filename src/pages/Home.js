import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard';
import Nav from '../components/Nav/Nav';

function Home({ user }) {
  return (
    <div className='relative h-screen'>
        <div className=''>
            <Dashboard user={ user } />
        </div>
        <div className='fixed inset-x-0 bottom-0'>
            <Nav />
        </div>
    </div>
  )
}

export default Home