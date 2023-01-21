import * as S from './styles'

const Footer = () => (
  <>
    <S.Footer>
      <S.Container>
        <S.SideLeft>
          <div>
            <img src="/img/Frame-66.png" alt="" />
          </div>
          <div>
            <S.ParagraphLeft>Uma realização</S.ParagraphLeft>
            <img src="/img/Property.png" alt="" />
          </div>
        </S.SideLeft>
        <S.SideRight>
          <S.RightDiv>
            <S.ParagraphLeft>
              Siga o <strong>Scrumdaybr</strong>
            </S.ParagraphLeft>
            <br />
            <div>
              <a
                href="https://www.linkedin.com/company/scrumdaybr/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/Linkedin.png" alt="Linkedin Icon" />
              </a>
              <a
                href="https://www.instagram.com/scrumdaybr/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/Instagram.png" alt="Instagram Icon" />
              </a>
              <a
                href="https://twitter.com/scrumdaybr"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/Twitter.png" alt="Twitter Icon" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCU_H8FzZhAafDkt2AifmKLg"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/Youtube.png" alt="Youtube Icon" />
              </a>
              <a
                href="https://www.facebook.com/scrumdaybr/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/Facebook.png" alt="Facebook Icon" />
              </a>
            </div>
          </S.RightDiv>
          <S.LeftDiv>
            <S.Terms href="">Aviso de Privacidade</S.Terms>
            <S.Terms href="">Termos e condições</S.Terms>
            <S.Terms href="">Código de Conduta do Evento</S.Terms>
            <br />
            <S.ParagraphRight>© 2017 - 2023 by Scrum.org</S.ParagraphRight>
          </S.LeftDiv>
        </S.SideRight>
      </S.Container>
    </S.Footer>
  </>
)

export default Footer
