import React from 'react'
import * as S from './styles'
import fotos from '../fotos.json'

export default function Tags({ tags, filtraFotos, setItens }) {
  return (
    <div>
      <S.Wrapper>
        <br></br>
        <ul className="tags__lista">
          {tags.map((tag) => {
            return (
              <li key={tag} onClick={() => filtraFotos(tag)}>
                {tag}
              </li>
            )
          })}
          <li onClick={() => setItens(fotos)}>Todas</li>
        </ul>
        <br></br>
      </S.Wrapper>
    </div>
  )
}
