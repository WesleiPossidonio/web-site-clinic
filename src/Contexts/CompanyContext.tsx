/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../Services/api'
import { decodeToken } from '../utils/DecodeToken'

export interface DataCompany {

}

export interface DataLoginCompanies {
  email: string
  password: string
}


interface ListCompanyType {
  HandleLoginCompanies: (data: DataLoginCompanies) => Promise<void>
}

interface ListCompanyProps {
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const CompanyContext = createContext({} as ListCompanyType)

export const ListCompanyProvider = ({ children }: ListCompanyProps) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [dataCompany, setDataCompany] = useState<DataCompany>({} as DataCompany)
  console.log(dataCompany)
  const navigate = useNavigate()

  const HandleLoginCompanies = useCallback(
    async (data: DataLoginCompanies) => {
      const { email, password } = data

      try {
        const response = await toast.promise(
          api.post('session', { email, password }),
          {
            pending: 'Verificando seus dados',
            success: 'Seja Bem-vindo(a)!',
            error: 'Verifique seu e-mail e senha 🤯',
          },
        )

        const { data } = response

        localStorage.setItem(
          'ClinicaCorpoeMente:ClinicaCorpoeMente1.0',
          JSON.stringify(data),
        )

        const dataUser = decodeToken(data)
        console.log(dataUser)

        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        // setDataCompany(data)

        setTimeout(() => {
          navigate('/dashboard')
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    },
    [navigate],
  )

  return (
    <CompanyContext.Provider
      value={{
        HandleLoginCompanies,
      }}
    >
      {children}
    </CompanyContext.Provider>
  )
}

export const useListVocancies = () => {
  const context = useContext(CompanyContext)
  return context
}