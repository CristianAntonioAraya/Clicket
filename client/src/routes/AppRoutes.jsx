import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ClientTicket from '../pages/ClientTicket'
import ExecutivePage from '../pages/ExecutivePage'
import HistorialPage from '../pages/HistorialPage'
import HomePage from '../pages/HomePage'

const AppRoutes = () => {
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Historial" element={<HistorialPage />}/>
            <Route path="/Client" element={<ClientTicket />}/>
            <Route path="/Executive" element={<ExecutivePage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes