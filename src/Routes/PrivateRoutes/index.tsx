import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {
  const companies = localStorage.getItem(
    'ClinicaCorpoeMente:ClinicaCorpoeMente1.0',
  )

  return companies !== null ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="login" />
  )
}