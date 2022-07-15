import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ClientTicket from '../pages/ClientTicket'
import LogInPage from '../pages/LogInPage'
import HistorialPage from '../pages/HistorialPage'
import HomePage from '../pages/HomePage'
import ExecutivePage from '../pages/ExecutivePage'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const AppRoutes = () => {
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Historial" element={<HistorialPage />}/>
            <Route path="/Client" element={<ClientTicket />}/>

            <Route element={<PrivateRoutes/>}>
              <Route path="/Executive" element={<ExecutivePage />}/>
            </Route>
            <Route element={<PublicRoutes/>}>
            <Route path="/Login" element={<LogInPage />}/>
            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes