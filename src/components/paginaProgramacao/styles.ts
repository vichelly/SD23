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

export const Container = styled.div`
  background-image: url('/img/Desk - BG Line Up e programação.png');
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.title};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.orange};
  }
  h1 {
    font-family: ${theme.font.family};
    font-size: 62.4084px;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.veryLightGrey};
  }
  h3 {
    font-family: ${theme.font.family};
    font-size: 23px;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.veryLightGrey};
  }

  @media (max-width: 650px) {
    background-image: url('/img/Mobile - BG Line up e programação.png');
    h3 {
      display: none;
    }
  }
  @media (max-width: 370px) {
    h2 {
      font-family: ${theme.font.family};
      font-size: ${theme.font.size.normalText};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.orange};
    }
    h1 {
      font-family: ${theme.font.family};
      font-size: 32.4084px;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.veryLightGrey};
    }
    h3 {
      font-family: ${theme.font.family};
      font-size: 23px;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.veryLightGrey};
    }
  }
`
