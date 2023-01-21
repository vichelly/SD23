import * as S from './styles'
import Link from 'next/link'
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
        nome_formulario: 'Formulário de CONTATO Site ScrumDay',
        url_origem: window.location.href,
        nome_contato: data.name,
        sobrenome: data.lastName,
        email_contato: data.email,
        tel_celular: data.phone,
        anotacoes: data.message,
        tags: data.inscricao
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
      <input placeholder="Nome*" {...register('name', { required: true })} />
      {errors.name && <span>Campo obrigatório! </span>}

      <input
        type="text"
        placeholder="Sobrenome*"
        {...register('lastName', { required: true })}
      />
      {errors.lastName && <span>Campo obrigatório! </span>}

      <input
        type="text"
        placeholder="Telefone"
        {...register('phone', { required: false })}
      />

      <input
        placeholder="E-mail*"
        type="email"
        {...register('email', { required: true })}
      />
      {errors.email && <span>Campo obrigatório! </span>}

      <textarea
        placeholder="Deixe sua mensagem aqui..."
        {...register('message', { required: false })}
      />
      <div className="lastdiv">
        <input
          type="checkbox"
          className="checkbox"
          {...register('inscricaso', { required: false })}
        />
        <p>
          Eu concordo em receber comunicações do ScrumDay 23 e outros temas
          relacionados.
        </p>
      </div>

      <input type="submit" value="Enviar" className="btnNwes" />
    </form>
  )
}

const Contato = () => (
  <>
    <S.Wrapper>
      <Link href="/">
        <S.Frame src="/img/Frame 38.png" alt="Logo ScrumDay 23" />                
      </Link>
      <S.form action="">
        <div>
          <h2>Dúvidas, sugestões e informações</h2>
          <h1>Dúvidas, sugestões e informações</h1>
        </div>
        <h3>Preencha o formulário abaixo:</h3>
        <Form />
      </S.form>
    </S.Wrapper>
  </>
)

export default Contato
