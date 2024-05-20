import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import NavBar from '../NavBar/NavBar'
import Biografia from '../../views/Biografia/Biografia'
import Trayectoria from '../../views/Trayetoria/Trayectoria'
import Investigacion from '../../views/Investigacion/Investigacion'
import Asignaturas from '../../views/Asignaturas/Asignaturas'
import Publicaciones from '../../views/Publicaciones/Publicaciones'
import EvaluacionDocente from '../../views/EvaluacionDocente/EvaluacionDocente'
import { Route, Routes } from 'react-router-dom'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="menu-superior">
        <Banner />
        <NavBar />
      </div>
      <div className="zona-de-trabajo">
        <Routes>
            <Route path="/biografia" element={<Biografia />} />
            <Route path="/trayectoria" element={<Trayectoria />} />
            <Route path="/investigacion" element={<Investigacion />} />
            <Route path="/asignaturas" element={<Asignaturas />} />
            <Route path="/publicaciones" element={<Publicaciones />} />
            <Route path="/evaluacion-docente" element={<EvaluacionDocente />} />
          </Routes>
      </div>
    </div>
  )
}

export default Dashboard