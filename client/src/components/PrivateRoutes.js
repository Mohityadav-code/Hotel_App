import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
    const auth = useSelector((state) => state.auth);
    console.log('auth is inside PrivateRoutes: ', auth)

    if (auth !== null) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
}
