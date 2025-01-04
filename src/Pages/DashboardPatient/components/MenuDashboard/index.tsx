import { ContainerMenu, ContentLinkMenu, ImgLogo, NavLink } from './styled'
import ImageLogo from '../../../../assets/logo.png'
import { TextRegular } from '../../../../Components'
import {
  Barbell,
  CaretRight,
  PersonSimpleTaiChi,
  User,
} from '@phosphor-icons/react'

interface MenuDashboardProps {
  setMenuSelected: (data: string) => void
}

export const MenuDashboard = ({ setMenuSelected }: MenuDashboardProps) => {
  return (
    <ContainerMenu>
      <ImgLogo src={ImageLogo} />

      <ContentLinkMenu>
        <NavLink onClick={() => setMenuSelected('UserPatiente')}>
          <div>
            <User size={24} />
            <TextRegular size="sm" weight={500}>
              Meus dados
            </TextRegular>
          </div>
          <CaretRight size={13} />
        </NavLink>

        <NavLink onClick={() => setMenuSelected('MyExercises')}>
          <div>
          <PersonSimpleTaiChi size={25} />
            <TextRegular size="sm" weight={500}>
              Meus Exercícios
            </TextRegular>
          </div>
          <CaretRight size={13} />
        </NavLink>

        <NavLink onClick={() => setMenuSelected('ListExercises')}>
          <div>
          <Barbell size={25} />
            <TextRegular size="sm" weight={500}>
              Exercícios
            </TextRegular>
          </div>
          <CaretRight size={13} />
        </NavLink>
      </ContentLinkMenu>
    </ContainerMenu>
  )
}
