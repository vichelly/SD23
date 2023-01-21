import React, { useState } from 'react'
import Tags from './Tags'
import fotos from './fotos.json'
import * as S from './styles'
import Cards from './Cards'

export default function Galeria() {
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map((valor) => valor.tag))]

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag
    })

    setItens(novasFotos)
  }

  return (
    <S.Wrapper>
      <img src="/img/logoScrumDayBranco.webp" alt="Logotipo Scrum Day." />

      <section className="galeria">
        <br></br>
        <br></br>
        <h2>EDIÇÕES ANTERIORES</h2>
        <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
        <Cards itens={itens} />
      </section>
    </S.Wrapper>
  )
}
