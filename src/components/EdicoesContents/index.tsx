import * as S from './styles'
import Carousel from 'components/Carrossel/BootstrapCarousel'
import Link from 'next/link'
const editionContent = () => (
  <S.DivPrincipal>
    <S.Container>
      <Link href="/">
        <S.Frame src="/img/Frame 38.png" alt="Logo ScrumDay 23" />                
      </Link>

      <div className="edicoes">EDIÇÕES ANTERIORES</div>

      <div className="divCarrossel">
        <Carousel />
      </div>
    </S.Container>
  </S.DivPrincipal>
)

export default editionContent
