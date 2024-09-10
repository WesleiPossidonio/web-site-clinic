import { type ReactNode } from 'react'
import { ListCompanyProvider } from './CompanyContext'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ListCompanyProvider>{children}</ListCompanyProvider>
}