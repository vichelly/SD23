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
    fetch('/api/apiLaharContact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        nome_formulario: 'Formulário de PATROCINADOR Site ScrumDay',
        url_origem: window.location.href,
        nome_contato: data.name,
        email_contato: data.email,
        nome_empresa: data.company,
        cargo: data.office,
        anotacoes: data.message
      })
    })
      .then((response) => {
        render(
          <ModalNewslatter
            message="Mensagem enviada, em breve entraremos em contato."
            imgLink="/img/Frame 38 (1).png"
          />
        )
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
        placeholder="Nome Completo*"
        {...register('name', { required: true })}
      />
      {errors.name && <span>Campo obrigatório! </span>}

      <input
        placeholder="E-mail*"
        type="email"
        {...register('email', { required: true })}
      />
      {errors.email && <span>Campo obrigatório! </span>}

      <input
        placeholder="E-mail*"
        {...register('company', { required: true })}
      />
      {errors.company && <span>Campo obrigatório! </span>}

      <input placeholder="Cargo*" {...register('office', { required: true })} />
      {errors.office && <span>Campo obrigatório! </span>}

      <textarea
        placeholder="Deixe sua mensagem aqui..."
        {...register('message', { required: false })}
      />

      <input type="submit" value="Enviar" className="btnNwes" />
    </form>
  )
}

const Contato = () => (
  <>
    <S.Wrapper>
      <S.Frame src="/img/Frame 38.png" alt="Logo ScrumDay 23" />

      <S.form action="">
        <div>
          <h1>PATROCINE O SD23</h1>
          <h2>PATROCINE O SD23</h2>
        </div>
        <Form />
      </S.form>
    </S.Wrapper>
  </>
)

export default Contato
