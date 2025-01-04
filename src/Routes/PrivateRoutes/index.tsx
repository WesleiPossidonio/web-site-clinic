import { Navigate, Outlet } from 'react-router-dom'
import { decodeToken } from '../../utils/DecodeToken'

export const PrivateRoutes = () => {
  const token = localStorage.getItem(
    'ClinicaCorpoeMente:ClinicaCorpoeMente1.0',
  )

  const dataUser = decodeToken(token)

  return token !== null && (dataUser?.type_user === 'doctor' || dataUser?.type_user === 'userReception') ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="login" />
  )
}