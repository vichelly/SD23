import styled from 'styled-components'
import theme from '../../styles/theme'

export const Frame = styled.img`
  display: none;
  top: 16px;
  left: 8px;
  position: absolute;
  @media (max-width: 1221px) {
    display: block;
  }
`

export const Container = styled.section`
  width: ${theme.grid.container};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1350px) {
    width: auto;
  }
  @media (max-width: 1117px) {
    margin-top: 100px;
  }
  @media (max-width: 375px) {
    margin-top: 150px;
  }
`

export const SectionOne = styled.section`
  background-image: url('/img/image 6.png');
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1117px) {
    background-image: url('/img/image 6 (mobile).png');
  }
  a {
    display: none;
    @media (max-width: 1117px) {
      text-decoration: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 5px;
      gap: 5px;
      color: ${theme.colors.veryLightGrey};
      width: 350px;
      height: 56px;
      margin-top: 20px;

      font-size: ${theme.font.size.normalText};
      font-weight: ${theme.font.bold};

      border-radius: 50px;
      background-color: ${theme.colors.orange};
    }
    @media (max-width: 420px) {
      width: 80%;
    }
  }
`

export const Card = styled.div`
  padding: 72px;
  gap: 72px;
  height: 60vh;
  width: 80vw;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  p {
    font-family: ${theme.font.familyTxt};
    font-size: ${theme.font.size.normalText};
    font-weight: ${theme.font.light};
    color: ${theme.colors.veryLightGrey};
    padding-left: 25px;
    @media (max-width: 1117px) {
      text-align: center;
      padding: 0%;
    }
    @media (max-width: 375px) {
      font-size: 14px;
    }
  }
  div {
    padding-top: 10px;
    gap: 10px;
    padding-bottom: 5px;
    color: ${theme.colors.veryLightGrey};
    @media (max-width: 1117px) {
      text-align: center;
      justify-content: center;
    }
    div {
      display: flex;
      h3 {
        text-transform: uppercase;
        font-family: ${theme.font.familyTxt};
        font-size: ${theme.font.size.subtitle};
        font-weight: ${theme.font.bold};
        color: ${theme.colors.veryLightGrey};
        @media (max-width: 375px) {
          font-size: ${theme.font.size.smallText};
        }
      }
    }
    a {
      text-decoration: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 5px;
      gap: 5px;
      color: ${theme.colors.veryLightGrey};
      width: 350px;
      height: 56px;
      margin-top: 20px;

      font-size: ${theme.font.size.normalText};
      font-weight: ${theme.font.bold};

      border-radius: 50px;
      background-color: ${theme.colors.orange};
    }
    h1 {
      font-size: ${theme.font.size.title};
      letter-spacing: 0.1em;
      text-transform: uppercase;
      line-height: ${theme.font.lineHeight.title};
      color: ${theme.colors.orange};
      font-weight: ${theme.font.bold};
    }
    h2 {
      font-size: 20px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      line-height: ${theme.font.lineHeight.title};
      color: ${theme.colors.veryLightGrey};
      font-weight: ${theme.font.bold};
    }
  }
  @media (max-width: 1117px) {
    padding: 0px;
    gap: 0px;
    height: auto;
    width: 100vw;
    border-radius: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0);
    div {
      a {
        display: none;
      }
    }
  }
`
export const BYL = styled.img`
  @media (max-width: 1117px) {
    width: 80%;
  }
`
export const divBYL = styled.div`
  display: flex;
  justify-content: center;
`
export const infoDiv = styled.div`
  img {
    height: 15px;
  }
`

export const firstButton = styled.a`
  @media (max-width: 1117px) {
    display: none;
  }
`

export const aFora = styled.a`
  display: none;
  @media (max-width: 1117px) {
    display: flex;
  }
`
