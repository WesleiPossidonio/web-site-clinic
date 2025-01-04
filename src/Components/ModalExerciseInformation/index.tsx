import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'

import { TextRegular, TitleText } from '../typografy'

import { CloseButton, ContainerHeader, ContentModal, Overlay } from './styled'
import { ExerciseInformationProps } from '../../Contexts/CompanyContext'
import { DataList, Flex } from '@radix-ui/themes'

interface ModalUpdatePatientProps {
  exerciseInformation: ExerciseInformationProps[]
}

export const ModalExerciseInformation = ({
  exerciseInformation,
}: ModalUpdatePatientProps) => {
  return (
    <Dialog.Portal>
      <Overlay />
      <ContentModal>
        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>

        <ContainerHeader>
          <div>
            <TitleText size="s">Acompanhamento de Exercícios</TitleText>
            <TextRegular size="sm" color="bg" weight={500}>
              Acompanhe os exercicios do Paciente
            </TextRegular>
          </div>
        </ContainerHeader>

        <Flex direction="column" gap="6" width={'100%'}>
          {exerciseInformation.map((exercise) => {
            return (
              <DataList.Root size="1" key={exercise?.id}>
                <DataList.Item>
                  <DataList.Label minWidth="15rem" color="green">
                    Nome do Exercicio
                  </DataList.Label>
                  <DataList.Value>{exercise.name_exercise}</DataList.Value>
                </DataList.Item>

                <DataList.Item>
                  <DataList.Label minWidth="15rem" color="cyan">
                    Data do Exercicio
                  </DataList.Label>
                  <DataList.Value>{exercise.created_at}</DataList.Value>
                </DataList.Item>
                
                <DataList.Item>
                  <DataList.Label minWidth="15rem" color="green">
                    Quantidade de Repetições
                  </DataList.Label>
                  <DataList.Value>{exercise.number_of_repetitions}</DataList.Value>
                </DataList.Item>

                <DataList.Item>
                  <DataList.Label minWidth="15rem" color="green">
                    Resumo do Exercício
                  </DataList.Label>
                  <DataList.Value>{exercise.number_of_repetitions}</DataList.Value>
                </DataList.Item>

              </DataList.Root>
            )
          })}
        </Flex>
      </ContentModal>
    </Dialog.Portal>
  )
}
