import styled from 'styled-components'
import theme from '../../styles/theme'

export const WrapperMobile = styled.section`
  display: none;
  @media (max-width: 650px) {
    color: #fff;
    width: 100%;
    min-height: 100vh;
    margin-top: 0px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5vh;
    gap: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('/img/Mobile-BG Home.png');
    .SD {
      margin-top: 50px;
    }
  }
`
export const WrapperDesktop = styled.section`
  color: #fff;
  width: 100%;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-image: url('/img/Desk - BG Home.png');
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    text-align: center;
    align-items: center;
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    font-size: 20px;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    gap: 12px;

    width: 292px;
    height: 40px;

    border: 2px solid #ed8a23;
    border-radius: 38.027px;
  }
  h3 {
    text-transform: uppercase;
    font-family: ${theme.font.familyTxt};
    font-weight: ${theme.font.bold};
    font-size: 14px;
  }
  @media (max-width: 650px) {
    display: none;
  }
`

export const BYL = styled.img`
  width: 650px;
  @media (max-height: 816px) {
    width: 458px;
  }
  @media (max-width: 850px) {
    width: 500px;
  }
  @media (max-width: 650px) {
    width: 300px;
  }
  @media (max-width: 340px) {
    width: 200px;
  }
`

export const Container = styled.div`
  background-image: url('/img/scrumorg_080618-309 1 (1).png');
  display: flex;
  justify-content: center;
  @media (max-width: 650px) {
    background-image: url('/img/scrumorg_080618-3091.png');
  }
`

type BaloonProps = {
  bg: string
  border: string
}

export const Balloon = styled.div<BaloonProps>`
  width: 207px;
  height: 135px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-transform: uppercase;
  font-family: ${theme.font.familyTxt};
  font-weight: ${theme.font.bold};
  text-align: center;
  font-size: 14px;
  color: ${theme.colors.veryLightGrey};

  border-radius: ${(props) => props.border};
  background-color: ${(props) => props.bg};
  @media (max-width: 936px) {
    padding: 0px;
  }
  @media (max-width: 850px) {
    width: 160px;
    height: 135px;
  }
  @media (max-width: 340px) {
    font-size: 12px;
    height: 155px;
    width: 130px;
  }
`

export const Wrapper2Mobile = styled.section`
  display: none;

  @media (max-width: 1026px) {
    display: block;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
    h1 {
      margin: 30px 23px;
      color: ${theme.colors.veryLightGrey};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.size.title};
      line-height: ${theme.font.lineHeight.title};
    }
  }
`
export const Wrapper2Desktop = styled.section`
  padding: 80px;
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  div {
    display: flex;
  }
  h1 {
    color: ${theme.colors.veryLightGrey};
    font-weight: ${theme.font.bold};
    font-size: 32px;
    line-height: ${theme.font.lineHeight.title};
  }
  @media (max-width: 1026px) {
    display: none;
  }
`

export const coloredNumbers = styled.div`
  justify-content: center;
  width: 100%;
`

export const Wrapper3 = styled.section`
  background-color: ${theme.colors.darkPurple};
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    padding-top: 32px;
    color: ${theme.colors.orange};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.size.title};
  }
  h2 {
    align-items: center;
    justify-content: center;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    @media (max-width: 936px) {
      padding-bottom: 0px;
    }
    h2 {
      color: ${theme.colors.veryLightGrey};
    }
    a {
      color: ${theme.colors.veryLightGrey};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.size.normalText};
      line-height: ${theme.font.lineHeight.normalText};
      text-decoration: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      gap: 10px;
      width: 346px;
      height: 64px;
      background: #ed8a23;
      border-radius: 50px;
      flex: none;
      order: 1;
    }
  }
  @media (max-width: 650px) {
    h1 {
      padding: 32px 22px;
      color: ${theme.colors.orange};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.size.title};
    }
    h2 {
      align-items: center;
      justify-content: center;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 20px;
      h2 {
        color: ${theme.colors.veryLightGrey};
      }
      h1 {
        padding-top: 5px;
        padding-bottom: 0px;
        color: ${theme.colors.orange};
        font-weight: ${theme.font.bold};
        font-size: ${theme.font.size.title};
      }
      a {
        color: ${theme.colors.veryLightGrey};
        font-weight: ${theme.font.bold};
        font-size: ${theme.font.size.normalText};
        line-height: ${theme.font.lineHeight.normalText};
        text-decoration: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        gap: 10px;
        width: 246px;
        height: 64px;
        background: #ed8a23;
        border-radius: 50px;
        flex: none;
        order: 1;
      }
    }
  }
  @media (max-width: 650px) {
    div {
      padding: 0;
    }
  }
`

export const BalloonsMobile = styled.div`
  display: none;
  div {
    display: none;
  }
  @media (max-width: 936px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    div {
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }
  @media (max-width: 380px) {
    gap: 2px;
    div {
      margin-bottom: 2px;
      margin-top: 2px;
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`
export const BalloonsDesktop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    gap: 30px;
  }
  @media (max-width: 936px) {
    display: none;
    div {
      display: none;
    }
  }
`

export const numberDescription = styled.p`
  color: ${theme.colors.veryLightGrey};
  font-weight: ${theme.font.bold};
  font-size: ${theme.font.size.subtitle};
`
export const numberDescriptionLast = styled.p`
  color: ${theme.colors.veryLightGrey};
  font-weight: ${theme.font.bold};
  font-size: ${theme.font.size.subtitle};
  padding-bottom: 20px;
`

export const coloredNumber1 = styled.h2`
  color: ${theme.colors.lightBlue};
  margin: 0px 23px;
  font-size: 56px;
  font-weight: ${theme.font.normal};
`
export const coloredNumber2 = styled.h2`
  color: ${theme.colors.lightRed};
  margin: 0px 23px;
  font-size: 56px;
  font-weight: ${theme.font.normal};
`
export const coloredNumber3 = styled.h2`
  color: ${theme.colors.lightOrange};
  margin: 0px 23px;
  font-size: 56px;
  font-weight: ${theme.font.normal};
`
export const coloredNumber4 = styled.h2`
  color: ${theme.colors.lightPurple};
  margin: 0px 23px;
  font-size: 56px;
  font-weight: ${theme.font.normal};
`

export const LogoTest = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.div`
  h2 {
    padding: 5px 5px;
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.normalText};
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.lineHeight.normalText};
    border: 2px solid ${theme.colors.orange};
    padding: 8px 24px;
    border-radius: 38.027px;
    margin-bottom: 13px;
  }
  p {
    font-family: ${theme.font.familyTxt};
    font-size: 14px;
    font-weight: ${theme.font.bold};
    line-height: ${theme.font.lineHeight.subtitle};
  }
`

export const Description2 = styled.h2`
  font-size: 3rem;
  font-weight: 700;
`

export const Illustration = styled.img`
  //margin-top: 3rem;
  width: 50rem;
`

export const Button = styled.a`
  padding: 12px 120px;
  background-color: transparent;
  color: #fff;
  border-radius: 50px;
  border: 1px solid #fff;
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none;
`
