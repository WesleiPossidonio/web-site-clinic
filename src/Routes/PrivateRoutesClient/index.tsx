import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutesClient = () => {
  const token = localStorage.getItem(
    'ClinicaCorpoeMente:ClinicaCorpoeMente1.0',
  )

  return token !== null ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="login" />
  )
}