/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../Services/api'
import { decodeToken } from '../utils/DecodeToken'

export interface DataUserLoginProps {
  id: string
  name: string
  admin: string
  email: string
  number_register: string
  position: string
  type_user: string
}

export interface CreatePasswordPatientProps {
  password: string
  update_number: string
}

export interface DataLoginCompanies {
  email: string
  password: string
}

export interface ExerciseInformationProps {
  id?: string
  patinent_id: string
  name_exercise: string
  resume_exercise: string
  number_of_repetitions: string
  created_at?: string
}

export interface AddPatients {
  list_of_exercises_id: number
  doctor_id: string
  name_patient: string
  email_patient: string
  type_user: string
  password?: string
}

export interface CategoryProps {
  id?: number
  name_category: string
}

export interface ExercisesProps {
  id?: string
  category_id: number
  name_exercicies: string
  description_exercicies: string
  url_video: string
}

export interface ListExercisesProps {
  name_category: string
  exercicies: ExercisesProps[]
}

export interface GetListPatientDataProps {
  id: string
  list_of_exercises_id: string
  doctor_id: string
  name_patient: string
  email_patient: string
  type_user: string
  exercise_information: ExerciseInformationProps[]
  list_execicies: ListExercisesProps
}

export interface ClientQueryProps {
  id?: string
  doctor_id: string
  consultation_hours: string
  consultation_date: string
  patients_name: string
  email_client: string
  patients_cpf: string
  service_type: string
}

export interface ListClientQueryProps extends ClientQueryProps {
  doctor: {
    id: string
    name: string
    position: string
    number_register: string
  }
}

export interface SchedulesProps {
  id: string
  doctor_id: string
  date: string
  hours: string
  state_schedules: string
}

export interface DataDoctorProps {
  id?: string
  name: string
  number_register: string
  email: string
  position: string
  admin: boolean
  password: string
  type_user: string
  doctor_schedules: SchedulesProps[]
  patients: GetListPatientDataProps[]
  list_execicies: CategoryProps
}

interface ListCompanyType {
  dataUserLogin: DataUserLoginProps
  dataCategory: CategoryProps[]
  dataPatient: GetListPatientDataProps[]
  dataListDoctors: DataDoctorProps[]
  dataListScheduledAppointments: ListClientQueryProps[]
  handleLoginCompanies: (data: DataLoginCompanies) => Promise<void>
  handleAddClientQuery: (data: ClientQueryProps) => Promise<void>
  handleAddCategory: (data: CategoryProps) => Promise<void>
  handleAddExercises: (data: ExercisesProps) => Promise<void>
  handleAddDoctor: (data: DataDoctorProps) => Promise<void>
  handleAddSchedules: (data: SchedulesProps) => Promise<void>
  handleAddPatients: (data: AddPatients) => Promise<void>
  handleAddNewPasswordPatient: (
    data: CreatePasswordPatientProps,
  ) => Promise<void>
  handleAddExerciseInformation: (data: ExerciseInformationProps) => Promise<void>
}

interface ListCompanyProps {
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const CompanyContext = createContext({} as ListCompanyType)

export const ListCompanyProvider = ({ children }: ListCompanyProps) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const [dataUserLogin, setDataUserLogin] = useState<DataUserLoginProps>(
    {} as DataUserLoginProps,
  )
  const [dataCategory, setDataCategory] = useState<CategoryProps[]>([])
  const [dataPatient, setDataPatient] = useState<GetListPatientDataProps[]>([])
  const [dataListDoctors, setDataListDoctors] = useState<DataDoctorProps[]>([])
  const [dataListScheduledAppointments, setDataListScheduledAppointments] =
    useState<ListClientQueryProps[]>([])

  const navigate = useNavigate()

  const getDataUserLocalStorage = () => {
    const localDataUser = localStorage.getItem(
      'ClinicaCorpoeMente:ClinicaCorpoeMente1.0',
    )

    const dataUser = decodeToken(localDataUser)

    if (dataUser !== null) {
      setDataUserLogin(dataUser)
    }
  }

  const getDataCategory = async () => {
    try {
      const response = await api.get('getListCategory')
      const { data } = response
      setDataCategory(data)
    } catch (error) {
      console.error('Failed to fetch association list:', error)
    }
  }

  const getDataPatient = async () => {
    try {
      const response = await api.get('getPatient')
      const { data } = response
      setDataPatient(data)
    } catch (error) {
      console.error('Failed to fetch association list:', error)
    }
  }

  const getDataDoctors = async () => {
    try {
      const response = await api.get('getListDoctor')
      const { data } = response
      setDataListDoctors(data)
    } catch (error) {
      console.error('Failed to fetch association list:', error)
    }
  }

  const getListConsults = async () => {
    try {
      const response = await api.get('getListConsult')
      const { data } = response

      setDataListScheduledAppointments(data)
    } catch (error) {
      console.error('Failed to fetch association list:', error)
    }
  }

  useEffect(() => {
    getDataUserLocalStorage()
    getDataCategory()
    getDataPatient()
    getDataDoctors()
    getListConsults()
  }, [])

  const handleLoginCompanies = useCallback(
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

        const { token } = data

        const dataUser = decodeToken(token)

        if (dataUser !== null) {
          setDataUserLogin(dataUser)
        }

        dataUser?.type_user === 'doctor' || dataUser?.type_user === 'userReception' ? navigate('/dashboard') : navigate('/dashboard-paciente')
        
      } catch (error) {
        console.log(error)
      }
    },
    [navigate],
  )

  const handleAddDoctor = useCallback(async (data: DataDoctorProps) => {
    const {
      admin,
      email,
      name,
      number_register,
      password,
      position,
      type_user,
    } = data

    try {
      const response = await toast.promise(
        api.post('createDoctor', {
          admin,
          email,
          name,
          number_register,
          password,
          position,
          type_user,
        }),
        {
          pending: 'Verificando seus dados',
          success: 'Doutor(a) Adicionado Com Sucesso',
          error: 'Verifique os dados Digitados',
        },
      )

      const { data } = response

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleAddClientQuery = useCallback(async (data: ClientQueryProps) => {
    const {
      consultation_date,
      consultation_hours,
      doctor_id,
      email_client,
      patients_cpf,
      patients_name,
      service_type,
    } = data

    try {
      const response = await toast.promise(
        api.post('createConsult', {
          consultation_date,
          consultation_hours,
          doctor_id,
          email_client,
          patients_cpf,
          patients_name,
          service_type,
        }),
        {
          pending: 'Verificando seus dados',
          success: 'Consulta Criada com Sucesso!',
          error: 'Verifique os dados Digitados 🤯',
        },
      )

      const { data } = response

      setDataPatient((state) => [...state, data])
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleAddCategory = useCallback(async (data: CategoryProps) => {
    const { name_category } = data

    try {
      const response = await toast.promise(
        api.post('createCategory', {
          name_category,
        }),
        {
          pending: 'Verificando seus dados',
          success: 'Categoria Criada com Sucesso!',
          error: 'Verifique os dados Digitados 🤯',
        },
      )

      const { data } = response

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleAddExercises = useCallback(async (data: ExercisesProps) => {
    const { category_id, description_exercicies, name_exercicies, url_video } =
      data

    const formData = new FormData()
    formData.append('category_id', String(category_id))
    formData.append('description_exercicies', description_exercicies)
    formData.append('name_exercicies', name_exercicies)
    formData.append('url_video', url_video[0])

    try {
      const response = await toast.promise(
        api.post('createExercises', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }),
        {
          pending: 'Verificando seus dados',
          success: 'Exercicio Criado com Sucesso!',
          error: 'Verifique os dados Digitados 🤯',
        },
      )

      const { data } = response

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleAddSchedules = useCallback(async (data: SchedulesProps) => {
    const { date, doctor_id, hours, state_schedules } = data

    try {
      await toast.promise(
        api.post('createSchedules', {
          date,
          doctor_id,
          hours,
          state_schedules,
        }),
        {
          pending: 'Verificando seus dados',
          success: 'Horário adicionado com Sucesso!',
          error: 'Verifique os dados Digitados 🤯',
        },
      )

      // const { data } = response

      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleAddPatients = useCallback(async (data: AddPatients) => {
    const {
      doctor_id,
      email_patient,
      list_of_exercises_id,
      name_patient,
      type_user,
      password,
    } = data

    await toast.promise(
      api.post('createPatient', {
        doctor_id,
        email_patient,
        list_of_exercises_id,
        name_patient,
        type_user,
        password,
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Paciente Criado comSucesso!',
        error: 'Verifique os dados Digitados 🤯',
      },
    )
  }, [])

  const handleAddNewPasswordPatient = useCallback(
    async (data: CreatePasswordPatientProps) => {
      const { password, update_number } = data

      try {
        const updateAsssotiationResponse = await toast.promise(
          api.put(`updatePatiente/${update_number}`, {
            password,
            update_number,
          }),
          {
            pending: 'Verificando seus dados',
            success: 'Exigencia Atualizada com Sucesso!',
            error: 'Ops! Verifique os Dados Digitados',
          },
        )

        const { data } = updateAsssotiationResponse
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    [],
  )

  const handleAddExerciseInformation = useCallback(
    async (data: ExerciseInformationProps) => {
      const {
        name_exercise,
        number_of_repetitions,
        patinent_id,
        resume_exercise,
      } = data

      try {
        await toast.promise(
          api.post('createExercisesInformation', {
            name_exercise,
            number_of_repetitions,
            patinent_id,
            resume_exercise,
          }),
          {
            pending: 'Verificando seus dados',
            success: 'Formulário Enviado com Sucesso!',
            error: 'Verifique os dados Digitados 🤯',
          },
        )

        // const { data } = response

        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    [],
  )

  return (
    <CompanyContext.Provider
      value={{
        dataUserLogin,
        dataCategory,
        dataPatient,
        dataListDoctors,
        dataListScheduledAppointments,
        handleLoginCompanies,
        handleAddClientQuery,
        handleAddCategory,
        handleAddExercises,
        handleAddDoctor,
        handleAddSchedules,
        handleAddPatients,
        handleAddNewPasswordPatient,
        handleAddExerciseInformation,
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
