import * as S from './styles'
import Link from 'next/link'

const BotaoCompre = () => (
  <>
    <S.Container>
      <Link href="/pagina-ingressos">
        <p>
          <img src="/img/Ticket.png" alt="" srcSet="" />
          <h2> ingresso SD23</h2>
          <h1>SD23</h1>
        </p>
      </Link>
    </S.Container>
  </>
)

export default BotaoCompre
