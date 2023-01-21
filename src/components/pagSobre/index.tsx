import Link from 'next/link'
import * as S from './styles'

const Menu = () => {
  return (
    <>
      <Link href="/">
        <S.Frame src="/img/Frame 38.png" alt="Logo ScrumDay 23" />                
      </Link>

      <S.SectionOne>
        <S.Container>
          <div>
            <div className="divImg">
            </div>

            <S.Title>Sobre o Scrum Day</S.Title>
            <div>
              <S.Description>
                Esse é um dos melhores eventos de transformação digital do país
                e já reuniu mais de 10 mil pessoas.
              </S.Description>
              <S.Description>
                Acontece há alguns anos em diversos lugares do mundo, como
                Alemanha, Dinamarca, Inglaterra, EUA, Índia, Polônia, Ucrânia,
                entre outros.
              </S.Description>
            </div>

            <S.Illustration src="img/imgLocale.svg" />

            <S.Title>evento em parceria da scrum.org</S.Title>
            <div>
              <S.Description>
                Essa é uma iniciativa realizada pela comunidade global de
                Agilistas, em parceria com a Scrum.org - a maior instituição de
                Scrum do mundo - a fim de trazer as principais tendências e
                novidades sobre Tecnologia e Agilidade, reunindo as principais
                empresas e profissionais do país.
              </S.Description>
            </div>

            <S.Illustration02 src="img/ScrumOrgWhite.png" />
            <div>
              <S.DescriptionType2>Adquira já o seu ingresso</S.DescriptionType2>
            </div>
            <Link href="/pagina-ingressos">
              <div style={{ marginBottom: 100 }}>
                <S.Btn>ingresso SD23</S.Btn>
              </div>
            </Link>
          </div>
        </S.Container>
      </S.SectionOne>
      <S.SectionTwo>
        <S.Container>
          <div>
            <S.Title02>
              Principais nomes que já passaram pelo scrum day brasil
            </S.Title02>
            <S.DivCards>
              <S.Card>
                <S.imgCard>
                  <img src="img/pessoa1.png" alt="Foto Stephanie Ockerman" />
                </S.imgCard>
                <S.DivDesc>
                  <h3>Stephanie Ockerman</h3>
                  <p>Steward do curso de Professional Scrum Master</p>
                </S.DivDesc>
              </S.Card>
              <S.Card>
                <S.imgCard>
                  <img src="img/pessoa2.png" alt="Foto Felipe Castro" />
                </S.imgCard>
                <S.DivDesc>
                  <h3>Felipe Castro</h3>
                  <p>OKR Coach Founder Lean Performance</p>
                </S.DivDesc>
              </S.Card>
              <S.Card>
                <S.imgCard>
                  <img src="img/pessoa3.png" alt="Foto Dave West" />
                </S.imgCard>
                <S.DivDesc>
                  <h3>Dave West</h3>
                  <p>CEO da Scrum.org</p>
                </S.DivDesc>
              </S.Card>
              <S.Card>
                <S.imgCard>
                  <img src="img/pessoa4.png" alt="Foto Daniel Vacanti" />
                </S.imgCard>
                <S.DivDesc>
                  <h3>Daniel Vacanti</h3>
                  <p>
                    Co-Founder ProKanban.org e Co-Author of the Kanban Guide
                  </p>
                </S.DivDesc>
              </S.Card>
              <S.Card>
                <S.imgCard>
                  <img src="img/pessoa5.png" alt="Foto Colleen Johnson" />
                </S.imgCard>
                <S.DivDesc>
                  <h3>Colleen Johnson</h3>
                  <p>
                    Co-Founder e CEO da ProKanban.org, autora do The Kanban
                    Pocket
                  </p>
                </S.DivDesc>
              </S.Card>
              <S.Card>
                <S.imgCard>
                  <img src="img/pessoa6.png" alt="Foto Luciano Santos" />
                </S.imgCard>
                <S.DivDesc>
                  <h3>Luciano Santos</h3>
                  <p>
                    Escritor e autor do livro Seja Egoísta com sua Carreira,
                    Linkedin Top
                  </p>
                </S.DivDesc>
              </S.Card>
            </S.DivCards>
            <div style={{ marginTop: -20 }}>
              <S.DescriptionType3>
                Esses são alguns dos mais de <b>50 palestrantes</b> que tivemos
                ao longo dos nossos eventos.
              </S.DescriptionType3>
            </div>
            <Link href="/edicoes-anteriores">
              <div style={{ marginBottom: 100 }}>
                <S.Btn>Ver edições anteriores</S.Btn>
              </div>
            </Link>
          </div>
        </S.Container>
      </S.SectionTwo>
    </>
  )
}

export default Menu
