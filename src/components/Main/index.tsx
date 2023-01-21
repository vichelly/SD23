import * as S from './styles'

const Main = () => (
  <>
    <S.WrapperMobile>
      <img className="SD" src="/img/LogoHome.png" alt="Logotipo Scrum Day." />
      <S.BYL src="/img/BYL (1).png" alt="" srcSet="" />
      <S.Description>
        <h2>1º JUL 2023 | 9 - 20H</h2>
        <p>
          CENTRO DE CONVENÇÕES REBOUÇAS <br /> SÃO PAULO - SP
        </p>
      </S.Description>
      <a href="#local">
        <img src="/img/Down.png" alt="" srcSet="" />
      </a>
    </S.WrapperMobile>
    <S.WrapperDesktop>
      <br />
      <br />
      <S.BYL src="/img/BYL (1).png" alt="" srcSet="" />
      <img src="/img/LogoHome.png" alt="Logotipo Scrum Day." />
      <h1>1º Jul 2023 | 8 - 20h </h1>
      <h3>
        Centro de Convenções Rebouças <br /> são Paulo - SP
      </h3>
    </S.WrapperDesktop>

    <S.Container>
      <S.Wrapper2Mobile id="local">
        <h1>
          UM DOS MELHORES <br /> EVENTOS DE <br /> TECNOLOGIA E <br /> AGILIDADE
          DO PAÍS.
        </h1>
        <S.coloredNumbers>
          <S.coloredNumber1>
            +10.000
            <S.numberDescription>
              PARTICIPANTES EM <br /> EDIÇÕES PASSADAS
            </S.numberDescription>
          </S.coloredNumber1>
          <S.coloredNumber2>
            +10
            <S.numberDescription>
              COMUNIDADES <br /> PARCEIRAS
            </S.numberDescription>
          </S.coloredNumber2>
          <S.coloredNumber3>
            +19.000
            <S.numberDescription>
              SEGUIDORES NAS <br /> REDES SOCIAIS
            </S.numberDescription>
          </S.coloredNumber3>
          <S.coloredNumber4>
            +10K
            <S.numberDescriptionLast>
              INSCRITOS <br />
              EM NEWSLETTER
            </S.numberDescriptionLast>
          </S.coloredNumber4>
        </S.coloredNumbers>
      </S.Wrapper2Mobile>
    </S.Container>
    <S.Container>
      <S.Wrapper2Desktop>
        <h1>
          UM DOS MELHORES EVENTOS DE TECNOLOGIA <br /> E AGILIDADE DO PAÍS.
        </h1>
        <div>
          <S.coloredNumber1>
            +10.000
            <S.numberDescription>
              PARTICIPANTES EM <br /> EDIÇÕES PASSADAS
            </S.numberDescription>
          </S.coloredNumber1>
          <S.coloredNumber2>
            +10
            <S.numberDescription>
              COMUNIDADES <br /> PARCEIRAS
            </S.numberDescription>
          </S.coloredNumber2>
          <S.coloredNumber3>
            +19.000
            <S.numberDescription>
              SEGUIDORES NAS <br /> REDES SOCIAIS
            </S.numberDescription>
          </S.coloredNumber3>
          <S.coloredNumber4>
            +10K
            <S.numberDescriptionLast>
              INSCRITOS <br />
              EM NEWSLETTER
            </S.numberDescriptionLast>
          </S.coloredNumber4>
        </div>
      </S.Wrapper2Desktop>
    </S.Container>

    <S.Wrapper3>
      <div>
        <h1>O QUE ESPERAR DO SCRUM DAY BRASIL 2023</h1>
      </div>
      <div>
        <S.BalloonsMobile>
          <div>
            <S.Balloon border="40px 40px 0px 40px" bg="#ED8A23">
              PREMIAÇÃO DESTACANDO OS PROFISSIONAIS DO ANO E GRANDES CASES
            </S.Balloon>
            <S.Balloon border="40px 40px 0px 40px" bg="#7490C9">
              SPEAKERS RENOMADOS NO MERCADO
            </S.Balloon>
            <S.Balloon border="40px 40px 0px 40px" bg="#D01D5F">
              Cerca de 800 participantes
            </S.Balloon>
            <S.Balloon border="40px 40px 0px 40px" bg="#ED8A23">
              TRILHAS POR COMPETÊNCIA (PRODUTO, PROCESSO, ENGENHARIA E PESSOAS)
            </S.Balloon>
            <S.Balloon border="40px 40px 0px 40px" bg="#6A3383">
              CERTIFICADO DE PARTICIPAÇÃO
            </S.Balloon>
            <S.Balloon border="40px 40px 0px 40px" bg="#7490C9">
              HAPPY HOUR DE ENCERRAMENTO
            </S.Balloon>
          </div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <S.Balloon border="0px 40px 40px 40px" bg="#D01D5F">
              RODADAS DE NETWORKING
            </S.Balloon>
            <S.Balloon border="0px 40px 40px 40px" bg="#6A3383">
              DIVERSOS SORTEIOS
            </S.Balloon>
            <S.Balloon border="0px 40px 40px 40px" bg="#7490C9">
              MAIS DE 20 PALESTRAS
            </S.Balloon>
            <S.Balloon border="0px 40px 40px 40px" bg="#6A3383">
              SESSÕES DE COACH/MENTORING
            </S.Balloon>
            <S.Balloon border="0px 40px 40px 40px" bg="#D01D5F">
              ALIMENTAÇÃO E BEBIDAS INCLUSAS DURANTE TODO O EVENTO
            </S.Balloon>
            <S.Balloon border="0px 40px 40px 40px" bg="#ED8A23">
              INSIGHT EXPERT SESSION COM KEYNOTE
            </S.Balloon>
          </div>
        </S.BalloonsMobile>
        <S.BalloonsDesktop>
          <div>
            <S.Balloon border="40px 40px 40px 0px" bg="#ED8A23">
              PREMIAÇÃO DESTACANDO OS PROFISSIONAIS DO ANO E GRANDES CASES
            </S.Balloon>
            <S.Balloon border="40px 40px 0px 40px" bg="#D01D5F">
              RODADAS DE NETWORKING
            </S.Balloon>
            <S.Balloon border="40px 40px 40px 0px" bg="#7490C9">
              MAIS DE 20 PALESTRAS
            </S.Balloon>
            <S.Balloon border="40px 40px 0px 40px" bg="#6A3383">
              DIVERSOS SORTEIOS
            </S.Balloon>
          </div>
          <div>
            <S.Balloon border="40px 40px 0px 40px" bg="#7490C9">
              HAPPY HOUR DE ENCERRAMENTO
            </S.Balloon>
            <S.Balloon border="40px 40px 40px 0px" bg="#6A3383">
              SESSÕES DE COACH/MENTORING
            </S.Balloon>
            <S.Balloon border="40px 40px 0px 40px" bg="#D01D5F">
              Cerca de 800 participantes
            </S.Balloon>
            <S.Balloon border="40px 40px 40px 0px" bg="#ED8A23">
              INSIGHT EXPERT SESSION COM KEYNOTE
            </S.Balloon>
          </div>
          <div>
            <S.Balloon border="40px 40px 40px 0px" bg="#D01D5F">
              ALIMENTAÇÃO E BEBIDAS INCLUSAS DURANTE TODO O EVENTO
            </S.Balloon>
            <S.Balloon border="40px 40px 40px 0px" bg="#ED8A23">
              TRILHAS POR COMPETÊNCIA (PRODUTO, PROCESSO, ENGENHARIA E PESSOAS)
            </S.Balloon>
            <S.Balloon border="40px 40px 0px 40px" bg="#6A3383">
              CERTIFICADO DE PARTICIPAÇÃO
            </S.Balloon>
            <S.Balloon border="40px 40px 0px 40px" bg="#7490C9">
              SPEAKERS RENOMADOS NO MERCADO
            </S.Balloon>
          </div>
        </S.BalloonsDesktop>
      </div>
    </S.Wrapper3>
  </>
)

export default Main
