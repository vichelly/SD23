import * as S from './styles'
import Accordion from 'react-bootstrap/Accordion'

function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <br />
      <Accordion.Item eventKey="1">
        <S.TitleHeader>
          <Accordion.Header>Local do evento</Accordion.Header>
        </S.TitleHeader>
        <Accordion.Body>
          <S.AcordionBody>
            <p>Esse ano o Scrum Day Brazil será apenas presencial.</p>
            <p>
              O local fica no coração de São Paulo, entre as avenidas Paulista,
              Rebouças e Dr. Arnaldo, o Scrum Day Brazil 2023 será realizado no
              Centro de Convenções Rebouças, num espaço exclusivo com mais de
              1300 m².
            </p>
            <p>
              Há cerca de 20 minutos do Aeroporto de Congonhas e no meio de
              grandes hotéis e pontos importantes de São Paulo.
            </p>
          </S.AcordionBody>
        </Accordion.Body>
      </Accordion.Item>
      <br />
      <Accordion.Item eventKey="2">
        <S.TitleHeader>
          <Accordion.Header>Público</Accordion.Header>
        </S.TitleHeader>
        <Accordion.Body>
          <S.AcordionBody>
            O público do Scrum Day é bastante variado, contando com Agilistas,
            Product Owner, Diretores, Gerentes, Desenvolvedores e Analistas de
            Sistemas e muito mais.
          </S.AcordionBody>
        </Accordion.Body>
      </Accordion.Item>
      <br />
      <Accordion.Item eventKey="3">
        <S.TitleHeader>
          <Accordion.Header>COVID-19</Accordion.Header>
        </S.TitleHeader>
        <Accordion.Body>
          <S.AcordionBody>
            Todas essas regras podem sofrer modificações caso haja mudanças nas
            diretrizes governamentais com relação à COVID-19 e cuja organização
            do evento entenda que possam ser aplicadas no contexto do Scrum Day
            Brazil 2023
          </S.AcordionBody>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

const Menu = () => {
  return (
    <>
      <S.SectionOne>
        <S.Container>
          <S.Title>PERGUNTAS FREQUENTES</S.Title>
          <S.Description>
            Aqui listamos as principais dúvidas dos interessados no evento, caso
            não encontre o que está procurando, utilize nossos canais de
            contato.
          </S.Description>
          <AlwaysOpenExample />
        </S.Container>
      </S.SectionOne>
    </>
  )
}

export default Menu
