import { Outlet, Navigate } from "react-router-dom"

const PrivateRoutes = () => {

    const user = localStorage.getItem('name')

    return (
        user ? <Outlet/> : <Navigate to={'/Login'}/>
    )
}

export default PrivateRoutes