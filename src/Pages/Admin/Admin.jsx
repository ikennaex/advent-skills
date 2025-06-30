import React from 'react'
import AdminNav from './AdminNav'
import WorkerList from './WorkerList'

const Admin = () => {
  return (
    <div className='container mx-auto'>
        <AdminNav />
        <div className='py-6 px-6'>
        <WorkerList />
        </div>

    </div>
  )
}

export default Admin