
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { CaretDown } from "@phosphor-icons/react";

import {
  AccordionContent,
  ContainerFaq,
  ContainerTitle,
  ContentAcordion,
  ContentFaq,
} from "./styled"
import { TitleText } from '../../../../Components';

export const Faq = () => {
  return (
    <ContainerFaq>
      <ContainerTitle>
        <TitleText size='s' color='bg'>Faq</TitleText>
        <TitleText size="l">Principais Dúvidas</TitleText>
      </ContainerTitle>

      <ContentFaq>
        <ContentAcordion>
          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Quais serviços a clínica oferece?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Oferecemos uma ampla gama de serviços, incluindo consultas médicas, 
                exames diagnósticos, tratamentos especializados e acompanhamento contínuo. 
                Para mais detalhes, consulte a seção de serviços do nosso site.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Como posso marcar uma consulta?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Você pode agendar uma consulta pelo nosso site, 
                ligando para nossa recepção ou enviando um e-mail 
                para o nosso atendimento.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Qual é o horário de funcionamento da clínica?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Nossa clínica está aberta de segunda a sexta-feira, das 8h às 18h, 
                e aos sábados, das 8h às 12h. Estamos fechados aos domingos e feriados.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>A clínica aceita convênios?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Sim, aceitamos diversos convênios. Por favor, entre em contato 
                com nossa recepção para verificar se o seu convênio é aceito e 
                para obter mais informações sobre cobertura e co-participações.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>O que devo levar para minha primeira consulta?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Para sua primeira consulta, traga um documento de identidade 
                com foto, o cartão do convênio (se aplicável), e qualquer 
                exame ou documentação médica relevante.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </ContentAcordion>

        <ContentAcordion>
          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Posso cancelar ou reagendar uma consulta?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Sim, você pode cancelar ou reagendar uma consulta com pelo menos 
                24 horas de antecedência. Entre em contato com nossa recepção 
                para realizar essas alterações.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Qual é o tempo de espera para agendar uma consulta?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                O tempo de espera para uma consulta pode variar dependendo da 
                especialidade e da disponibilidade do médico. Geralmente, 
                tentamos agendar consultas o mais rápido possível.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>A clínica oferece telemedicina?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Sim, oferecemos consultas por telemedicina para maior 
                comodidade dos nossos pacientes. Entre em contato para saber 
                mais sobre como agendar uma consulta virtual.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Como posso obter resultados de exames?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Os resultados dos exames são disponibilizados através do nosso 
                portal de pacientes ou podem ser retirados diretamente na clínica. 
                Nossa equipe também pode enviar os resultados por e-mail, se preferir.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Quais medidas de segurança a clínica adota?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                A segurança dos nossos pacientes é uma prioridade. 
                Adotamos rigorosos protocolos de higiene e segurança, 
                ncluindo desinfecção frequente das áreas comuns, 
                so de equipamentos de proteção e medidas de 
                distanciamento social conforme necessário.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ContentAcordion>
      </ContentFaq>

    </ContainerFaq>
  )
}

