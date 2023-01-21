import PagDeIngressos from 'components/paginaIngressos'
import React, { useEffect, useState } from 'react'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

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
      <PagDeIngressos />
      <Footer />
    </>
  )
}
