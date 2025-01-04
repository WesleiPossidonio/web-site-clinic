import { ContainerMenu, ContentLinkMenu, ImgLogo, NavLink } from './styled'
import ImageLogo from '../../../../assets/logo.png'
import { TextRegular } from '../../../../Components'
import {
  BookmarkSimple,
  CalendarDots,
  CaretRight,
  ClipboardText,
  ClockUser,
  FirstAidKit,
  Stethoscope,
  User,
  Users,
} from '@phosphor-icons/react'

interface MenuDashboardProps {
  setMenuSelected: (data: string) => void
}

export const MenuDashboard = ({ setMenuSelected }: MenuDashboardProps) => {
  return (
    <ContainerMenu>
      <ImgLogo src={ImageLogo} />

      <ContentLinkMenu>
        <NavLink onClick={() => setMenuSelected('UserData')}>
          <div>
            <User size={24} />
            <TextRegular size="sm" weight={500}>
              Meus dados
            </TextRegular>
          </div>
          <CaretRight size={13} />
        </NavLink>

        <NavLink onClick={() => setMenuSelected('Consults')}>
          <div>
            <FirstAidKit size={25} />
            <TextRegular size="sm" weight={500}>
              Consultas Marcadas
            </TextRegular>
          </div>
          <CaretRight size={13} />
        </NavLink>

        <NavLink onClick={() => setMenuSelected('MyConsults')}>
          <div>
            <Stethoscope size={25} />
            <TextRegular size="sm" weight={500}>
              Minhas Consultas
            </TextRegular>
          </div>
          <CaretRight size={13} />
        </NavLink>

        <NavLink onClick={() => setMenuSelected('Patients')}>
          <div>
            <FirstAidKit size={25} />
            <TextRegular size="sm" weight={500}>
              Meus Pacientes
            </TextRegular>
          </div>
          <CaretRight size={13} />
        </NavLink>

        <NavLink onClick={() => setMenuSelected('AddCategory')}>
          <div>
            <BookmarkSimple size={25} />
            <TextRegular size="sm" weight={500}>
              Cadastrar Categoria
            </TextRegular>
          </div>
          <CaretRight size={13} />
        </NavLink>

        <NavLink onClick={() => setMenuSelected('AddExercise')}>
          <div>
            <ClipboardText size={25} />
            <TextRegular size="sm" weight={500}>
              Catastrar Exercicios
            </TextRegular>
          </div>
          <CaretRight size={13} />
        </NavLink>

        <NavLink onClick={() => setMenuSelected('AddDoctorSchedules')}>
          <div>
            <ClockUser size={24} />
            <TextRegular size="sm" weight={500}>
              Adicionar Horário
            </TextRegular>
          </div>
          <CaretRight size={13} />
        </NavLink>

        <NavLink onClick={() => setMenuSelected('AddQuery')}>
          <div>
            <CalendarDots size={24} />
            <TextRegular size="sm" weight={500}>
              Marcar Consultas
            </TextRegular>
          </div>
          <CaretRight size={13} />
        </NavLink>

        <NavLink>
          <div>
            <Users size={24} onClick={() => setMenuSelected('AddUser')} />
            <TextRegular size="sm" weight={500}>
              Cadastrar Usuário
            </TextRegular>
          </div>
          <CaretRight size={13} />
        </NavLink>
      </ContentLinkMenu>
    </ContainerMenu>
  )
}
