/* eslint-disable no-prototype-builtins */
import React from 'react'
import * as S from './styles'
import { useForm } from 'react-hook-form'
import ModalNewslatter from 'components/ModalNewslatter'
import { render } from '@testing-library/react'

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    fetch('/api/apiLahar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        nome_formulario: 'Formulário Newsllater Site ScrumDay',
        url_origem: window.location.href,
        nome_contato: data.fullname,
        email_contato: data.email
      })
    })
      .then((response) => {
        render(<ModalNewslatter imgLink="/img/Frame 38 (1).png" />)
        reset()
      })
      .catch((response) => {
        alert('Ocorreu um erro, preencha e envie o formuário novamente')
        reset()
      })
  }

  return (
    <form id="formNewslleter" onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Nome*"
        {...register('fullname', { required: true })}
      />
      {errors.fullname && <span>Campo obrigatório</span>}
      <input
        placeholder="E-mail*"
        type="email"
        {...register('email', { required: true })}
      />
      {errors.email && <span>Campo obrigatório</span>}

      <input type="submit" value="Assinar newsletter" className="btnNwes" />
    </form>
  )
}

const Menu = () => {
  return (
    <>
      <S.SectionOne>
        <S.Container>
          <S.Title>Assine a nossa newsletter</S.Title>
          <S.Description>
            Line-up, novidades, logística e informações exclusivas. Cadastre-se
            para receber tudo isso e muito mais
          </S.Description>
          <Form />
        </S.Container>
      </S.SectionOne>
    </>
  )
}

export default Menu
