import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  position: fixed;
  z-index: 8;
  bottom: 0px;
  right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 100px;
  height: 100px;
  border-radius: 32px;
  p {
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;
    color: ${theme.colors.veryLightGrey};
    width: 160px;
    height: 48px;
    border-radius: 50px;
    background-color: ${theme.colors.orange};
  }
  p:hover {
    background-color: ${theme.colors.lightPurple};
  }
  h1 {
    padding-top: 6px;
    font-weight: ${theme.font.bold};
  }

  h2 {
    display: none;
  }
  div {
    display: none;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 24px 0px 64px; */
    gap: 16px;
    right: 0;
    position: fixed;
    width: 100%;
    height: 10vh;
    max-height: 100px;
    padding-bottom: 6vh;
    bottom: 0px;
    z-index: 1;
    background-color: ${theme.colors.veryDarkPurple};
    border-radius: 24px 24px 0px 0px;
    p {
      padding-top: 5px;
      margin-top: 40px;
      width: 80%;
      height: 56px;
    }
    h2 {
      font-family: ${theme.font.family};
      font-weight: ${theme.font.bold};
      display: flex;
      font-size: 22px;
      margin-top: 7px;
    }
    h1 {
      display: none;
    }
    img {
      display: none;
    }
    div {
      display: block;
      padding-top: 40px;
      color: ${theme.colors.veryLightGrey};
      font-size: ${theme.font.size.subtitle};
    }
  }
`
