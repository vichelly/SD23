import * as S from './styles'
import Link from 'next/link'
const Menu = () => {
  return (
    <>
      <S.SectionOne>
        <S.Container>
          <Link href="/">
            <S.Frame src="/img/Frame 38.png" alt="Logo ScrumDay 23" />                
          </Link>
          <S.Card>
            <S.infoDiv>
              <h1>INGRESSOS</h1>
              <h2>SCRUM DAY 2023</h2>
              <div>
                <div>
                  <img src="/img/pinlocal.png" alt="" />
                  <h3>Centro de Convenções Rebouças</h3>
                </div>
              </div>
              <p>
                Av. Rebouças, 600 - Pinheiros. <br /> São Paulo - SP, 05402-000
              </p>
              <div>
                <img src="/img/Group.png" alt="" />
                <h3>1º julho </h3>
                <img src="/img/clock.png" alt="" />
                <h3>8 - 20 h</h3>
              </div>
              <a href="">Comprar</a>
            </S.infoDiv>
            <S.divBYL>
              <S.BYL src="/img/Frame 175 Ingresso.png" />
            </S.divBYL>
            <S.aFora href="">Comprar</S.aFora>
          </S.Card>
        </S.Container>
      </S.SectionOne>
    </>
  )
}

export default Menu
