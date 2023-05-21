import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardNav() {
  return (
    <div>
        <div className='p-5 text-2xl text-center text-yellow-300 bg-black'>
            <Link to={"/dashboard"}> Your Bookings </Link>
        </div>
        <div className='p-5 text-2xl text-center text-yellow-300 bg-black'>

            <Link to={"/dashboard/seller"}> Your Hotels </Link>
    </div>
    </div>
  )
}
