import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.section``
export const Frame = styled.img`
  display: none;
  top: 16px;
  left: 8px;
  position: absolute;
  @media (max-width: 1221px) {
    display: block;
  }
`
export const form = styled.div`
  background-color: #450a20;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  gap: 30px;

  & form {
    //min-height: 70vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 30px;
    & span {
      font-size: 14px;
      margin-top: -25px;
    }
  }
  h3 {
    margin-top: -16px;
    font-weight: ${theme.font.normal};
  }
  input:focus-visible {
    outline: 1px solid #fff;
  }

  textarea:focus-visible {
    outline: 1px solid #fff;
  }

  h1 {
    margin-top: 150px;
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.size.title};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${theme.colors.orange};
    @media (max-width: 650px) {
      display: none;
    }
  }
  h2 {
    display: none;
  }
  .checkbox {
    height: 13px;
    width: 13px;
  }
  div {
    display: flex;
    gap: 8px;

    & p {
      color: #fff;
      font-size: ${theme.font.size.smallText};
      font-weight: ${theme.font.light};
      text-align: left;
    }
  }

  @media (max-width: 650px) {
    div {
      padding-top: 180px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 80%;
    }
    .lastdiv {
      padding-top: 0%;
    }
    h1 {
      margin-top: 20px;
      font-family: ${theme.font.family};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.size.subtitle};
      letter-spacing: normal;
      color: ${theme.colors.veryLightGrey};
      text-transform: none;
    }
    h2 {
      display: block;
      margin-top: 40px;
      font-family: ${theme.font.family};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.size.title};
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: ${theme.colors.orange};
    }
  }

  textarea,
  input {
    resize: none;
    box-sizing: border-box;
    background-color: #450a20;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 25px;
    gap: 5px;
    width: 540px;
    height: 48px;
    border: 1px solid #ffffff52;
    color: ${theme.colors.veryLightPurple};
    border-radius: 24px;
    flex-grow: 0;
    flex: none;
    order: 0;
    font-family: ${theme.font.familyTxt};
    font-size: ${theme.font.size.subtitle};
    ::-webkit-input-placeholder {
      color: #ffffff52;
      font-family: ${theme.font.familyTxt};
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.size.subtitle};
    }
    :last-child {
      cursor: pointer;
      padding: 5px;
      gap: 5px;
      width: 350px;
      background-color: ${theme.colors.orange};
      border-color: ${theme.colors.orange};
      font-family: ${theme.font.familyTxt};
      font-weight: ${theme.font.bold};
      font-size: 22px;
      color: ${theme.colors.veryLightGrey};
      margin-bottom: 30px;
    }
    @media (max-width: 650px) {
      width: 90%;
      :last-child {
        //width: 80%;
      }
    }
  }
  textarea {
    height: 160px;
    text-align: start;
  }
`
