import * as S from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { validaCPF, validaNum } from 'uteis/validacao'

interface IFormInput {
  nomeCompleto: string
  email: string
  cpf: number
  telefone: number
  age: number
  endereco: string
  cargo: string
  empresa: string
}

const schema = yup
  .object({
    nomeCompleto: yup
      .string()
      .required('O nome é obrigatório')
      .min(6, 'Nome deve ter ao menos 6 caracteres'),
    email: yup
      .string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    cpf: yup
      .string()
      .required('O CPF é obrigatório')
      .matches(validaCPF, 'Digite o seu CPF da seguinte forma: 111.111.111-11'),
    telefone: yup
      .string()
      .required('O número de telefone é obrigatório')
      .matches(validaNum, 'Número de telefone deve ter ao menos 9 caracteres'),
    age: yup.string().required('A data de nascimento é obrigatória'),
    endereco: yup.string().required('O endereço é obrigatório')
  })
  .required()

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  })
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>PREENCHA SEUS DADOS</div>

      <div className="radios">
        <div>
          <input type="radio" name="validacao" />
          <label>Pessoa Física</label>
        </div>
        <div>
          <input type="radio" name="validacao" />
          <label>Pessoa Jurídica</label>
        </div>
      </div>

      <input placeholder="Nome Completo" {...register('nomeCompleto', {})} />
      {errors.nomeCompleto && <span>{errors.nomeCompleto?.message}</span>}
      <input
        placeholder="CPF"
        {...register('cpf', {
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors.cpf && <span>{errors.cpf?.message}</span>}
      <input
        placeholder="Telefone"
        type="tel"
        {...register('telefone', {
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors.telefone && <span>{errors.telefone?.message}</span>}
      <input
        type="date"
        placeholder="Data de Nascimento"
        {...register('age', {})}
      />
      {errors.age && <span>{errors.age?.message}</span>}
      <input
        placeholder="Email"
        {...register('email', {
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors.email && <span>{errors.email?.message}</span>}
      <input
        placeholder="Endereço Completo"
        {...register('endereco', {
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors.endereco && <span>{errors.endereco?.message}</span>}
      <input placeholder="Cargo" type="string" {...register('cargo', {})} />
      <input placeholder="Empresa" type="string" {...register('empresa', {})} />
      <input type="submit" className="btnForm" />
    </form>
  )
}

const Main = () => (
  <S.Wrapper>
    <S.Container>
      <S.Logo src="/img/logoScrumDay.webp" alt="Logotipo Scrum Day." />
    </S.Container>
    <App />
  </S.Wrapper>
)

export default Main
