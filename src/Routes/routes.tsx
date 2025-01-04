import { Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { CreatedPasswordPatient, Dashboard, DashboardPatient, Home, Login } from '../Pages'
import { PrivateRoutesClient } from './PrivateRoutesClient'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cadastrar-senha' element={<CreatedPasswordPatient />} />

      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/" element={<PrivateRoutesClient />}>
        <Route path='/dashboard-paciente' element={<DashboardPatient />} />
      </Route>

    </Routes>
  )
}