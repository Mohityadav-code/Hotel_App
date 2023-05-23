import React from 'react'
import DashboardNav from '../components/Elements/DashboardNav'

export default function Dashboard() {
  return (
   <>
    <div className='p-5 text-2xl text-center text-yellow-300 bg-black'>Welcome to Dashboard</div>
    <div className='p-5 text-2xl '>
Show all Butttons to Show booking and a button to browse hotels 
    </div>
    <DashboardNav> </DashboardNav>
   </>
  )
}
