import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = () => {
    const user = localStorage.getItem('name')

    return (
        !user ? <Outlet/> : <Navigate to={'/Executive'}/>
    )
}

export default PublicRoutes