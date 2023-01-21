import Footer from 'components/Footer'
import Patrocinador from 'components/Patrocinador'
import Menu from 'components/Menu'
import React, { useEffect, useState } from 'react'
import BotaoCompre from 'components/botaoCompre'

export default function Home() {
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
      <Menu action={escureceMenu} />
      <Patrocinador />
      <BotaoCompre />
      <Footer />
    </>
  )
}
