import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./views/Login/Login.jsx"
import Busqueda from "./views/Busqueda/Busqueda.jsx"
import Dashboard from "./components/Dashboard/Dashboard.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Ruta para el formulario de inicio de sesión */}
        <Route path="/*" element={<Dashboard />} /> {/* Ruta para el resto de la aplicación */}
        <Route path="/busqueda" element={<Busqueda />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
