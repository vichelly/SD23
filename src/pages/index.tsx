import React, { useEffect, useState } from 'react'
import Footer from 'components/Footer'
import Main from 'components/Main'
import Menu from 'components/Menu'
import BotaoCompre from 'components/botaoCompre'
import Newslatter from 'components/Newslatter'
import FAQ from 'components/Faq'

export default function Home() {
  //alterar cor do menu ao scrollar

  const [escureceMenu, setEscureceMenu] = useState(false)

  useEffect(function () {
    function ScrollY() {
      if (window.scrollY > 10) {
        setEscureceMenu(true)
      } else {
        setEscureceMenu(false)
      }
    }
    window.addEventListener('scroll', ScrollY)
  }, [])

  return (
    <>
      <BotaoCompre />
      <Menu action={escureceMenu} />
      <Main />
      <Newslatter />
      <FAQ />
      <Footer />
    </>
  )
}
