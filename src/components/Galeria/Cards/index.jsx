import React from 'react'

export default function Cards({ itens }) {
  return (
    <ul className="galeria__cards">
      {itens.map((item) => {
        return (
          <li key={item.id} className="galeria__card">
            <img className="galeria__imagem" src={item.imagem} />
            <p className="galeria"></p>
            <div></div>
          </li>
        )
      })}
    </ul>
  )
}
