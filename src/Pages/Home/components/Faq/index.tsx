
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
  ImgFaq
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
              <Typography>Como posso acompanhar o status da minha entrega?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Você pode acompanhar o status da sua entrega através do nosso 
                sistema de rastreamento online, utilizando o código 
                fornecido no momento da confirmação do pedido.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Quais tipos de carga vocês transportam?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Transportamos uma ampla variedade de cargas, incluindo cargas 
                secas, perecíveis, e cargas especiais sob consulta. Entre em 
                contato para detalhes sobre transporte especializado.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Vocês oferecem serviço de transporte internacional?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Sim, oferecemos serviços de transporte internacional, 
                tanto para importação quanto exportação, 
                com soluções de logística completas.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Qual é o prazo de entrega para o transporte de cargas?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                O prazo de entrega depende da rota e do tipo de carga. 
                Durante a solicitação do serviço, informamos o prazo 
                estimado de acordo com sua necessidade.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Como funciona o seguro de cargas?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Oferecemos seguro de cargas para garantir a proteção da sua 
                mercadoria durante todo o processo de transporte. O valor do 
                seguro varia conforme o tipo e valor da carga.
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
              <Typography>Como posso acompanhar o status da minha entrega?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Você pode acompanhar o status da sua entrega através do nosso 
                sistema de rastreamento online, utilizando o código 
                fornecido no momento da confirmação do pedido.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Quais tipos de carga vocês transportam?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Transportamos uma ampla variedade de cargas, incluindo cargas 
                secas, perecíveis, e cargas especiais sob consulta. Entre em 
                contato para detalhes sobre transporte especializado.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Vocês oferecem serviço de transporte internacional?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Sim, oferecemos serviços de transporte internacional, 
                tanto para importação quanto exportação, 
                com soluções de logística completas.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Qual é o prazo de entrega para o transporte de cargas?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                O prazo de entrega depende da rota e do tipo de carga. 
                Durante a solicitação do serviço, informamos o prazo 
                estimado de acordo com sua necessidade.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionContent
              expandIcon={<CaretDown size={25} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Como funciona o seguro de cargas?</Typography>
            </AccordionContent>
            <AccordionDetails>
              <Typography>
                Oferecemos seguro de cargas para garantir a proteção da sua 
                mercadoria durante todo o processo de transporte. O valor do 
                seguro varia conforme o tipo e valor da carga.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ContentAcordion>
      </ContentFaq>
      
    </ContainerFaq>
  )
}

