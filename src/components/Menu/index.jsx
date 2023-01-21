import * as S from './styles'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = ({ active, sidebar }) => {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <>
      <S.Geral
        onClick={closeSidebar}
        passDisplay={sidebar ? 'block' : 'none'}
      ></S.Geral>
      <S.MenuMobile passSidebar={sidebar ? 1 : 0}>
        <S.closeSidebar
          passDisplay={sidebar ? 'block' : 'none'}
          onClick={closeSidebar}
        >
          <img src="/img/Exit.png" alt="" srcSet="" />
        </S.closeSidebar>
        <img src="/img/Frame66.png" alt="" srcSet="" />

        <div>
          <Link href="/">
            <p>Scrum Day 23</p>
          </Link>
        </div>
        <div>
          <Link href="/sobre">
            <p>Sobre o Evento</p>
          </Link>
        </div>
        <div>
          <Link href="/pagina-ingressos">
            <p>Ingressos</p>
          </Link>
        </div>
        <div>
          <Link href="/pagina-lineup">
            <p>Line up</p>
          </Link>
        </div>
        <div>
          <Link href="/pagina-programacao">
            <p>Programação</p>
          </Link>
        </div>
        <div>
          <Link href="/edicoes-anteriores">
            <p>Edições anteriores</p>
          </Link>
        </div>
        <div>
          <Link href="/contato">
            <p>Contato</p>
          </Link>
        </div>
        <div>
          <Link href="/pagina-patrocinador">
            <p>Seja Patrocinador</p>
          </Link>
        </div>
        <span>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/scrumdaybr/"
                rel="noreferrer"
              >
                <img src="/img/LinkedinMenu.png" alt="" srcSet="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/scrumdaybr/"
                rel="noreferrer"
              >
                <img src="/img/InstagramMenu.png" alt="" srcSet="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/scrumdaybr/"
                rel="noreferrer"
              >
                <img src="/img/FacebookMenu.png" alt="" srcSet="" />
              </a>
            </li>
          </ul>
        </span>
      </S.MenuMobile>
    </>
  )
}

const Menu = ({ action }) => {
  //mostrar sidebar mobile
  const [sidebar, setSideBar] = useState(false)

  const showSiderbar = () => setSideBar(!sidebar)

  const router = useRouter()

  return (
    <>
      <S.HeaderDesktop
        passToStyle={action ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0)'}
      >
        <S.Container>
          <div>
            <Link href="/">
              <p>
                <img
                  style={{ cursor: 'pointer' }}
                  src="/img/LogoScrumDay Horizontal.png"
                  alt=""
                  srcSet=""
                />
              </p>
            </Link>
          </div>
          <div>
            <S.OptionsContainer>
              <S.OptionItem>
                <Link href="/sobre">
                  <p className={router.pathname == '/sobre' ? 'active' : ''}>
                    Sobre
                  </p>
                </Link>
              </S.OptionItem>
              <S.OptionItem>
                <Link href="/pagina-ingressos">
                  <p
                    className={
                      router.pathname == '/pagina-ingressos' ? 'active' : ''
                    }
                  >
                    Ingressos
                  </p>
                </Link>
              </S.OptionItem>
              <S.OptionItem>
                <Link href="/pagina-lineup">
                  <p
                    className={
                      router.pathname == '/pagina-lineup' ? 'active' : ''
                    }
                    href=""
                  >
                    Line up
                  </p>
                </Link>
              </S.OptionItem>
              <S.OptionItem>
                <Link href="/pagina-programacao">
                  <p
                    className={
                      router.pathname == '/pagina-programacao' ? 'active' : ''
                    }
                    href=""
                  >
                    Programação
                  </p>
                </Link>
              </S.OptionItem>
              <S.OptionItem>
                <Link href="/edicoes-anteriores">
                  <p
                    className={
                      router.pathname == '/edicoes-anteriores' ? 'active' : ''
                    }
                    href=""
                  >
                    Edições anteriores
                  </p>
                </Link>
              </S.OptionItem>
              <S.OptionItem>
                <Link href="/contato">
                  <p
                    className={router.pathname == '/contato' ? 'active' : ''}
                    href=""
                  >
                    Contato
                  </p>
                </Link>
              </S.OptionItem>
              <S.OptionItem>
                <Link href="/pagina-patrocinador">
                  <p
                    className={
                      router.pathname == '/pagina-patrocinador' ? 'active' : ''
                    }
                    href=""
                  >
                    Seja Patrocinador
                  </p>
                </Link>
              </S.OptionItem>
            </S.OptionsContainer>
          </div>
        </S.Container>
      </S.HeaderDesktop>

      <S.HeaderMobile>
        <S.Hamburguer onClick={showSiderbar}>
          <img src="/img/MenuHamburguer.png" alt="" />
        </S.Hamburguer>
        {<Sidebar sidebar={sidebar} active={setSideBar} />}
      </S.HeaderMobile>
    </>
  )
}

export default Menu
