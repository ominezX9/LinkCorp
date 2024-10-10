import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
    const isLoggedIn = true;
    
    return (
        <>
        <Outlet/>
        Hi
        </>
    )
}
