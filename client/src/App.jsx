import { SocketProvider } from "./context/SocketContext"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <SocketProvider>
      <AppRoutes/>
    </SocketProvider>
  )
}

export default App