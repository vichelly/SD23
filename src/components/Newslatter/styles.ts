import styled from 'styled-components'
import theme from '../../styles/theme'

export const SectionOne = styled.section`
  background-color: ${theme.colors.lightBlue};
  display: flex;
  justify-content: center;
  padding-top: 30px;
  @media (max-width: 1335px) {
    padding-top: 0px;
  }
`

export const SectionTwo = styled.section`
  background-color: ${theme.colors.veryLightBlue};
  display: flex;
  justify-content: center;

  @media (max-width: 1335px) {
  }
`

export const Container = styled.div`
  width: ${theme.grid.content};
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px;

  & form {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    & div {
      display: flex;
      //margin-left: 20px;
      gap: 8px;

      & p {
        color: #fff;
        font-size: ${theme.font.size.smallText};
        font-weight: ${theme.font.light};
      }
    }

    & .checkbox {
      width: 13px;
      height: 13px;
    }

    @media (max-width: 600px) {
      width: 100%;
    }

    & input {
      height: 48px;
      padding-left: 20px;
      font-family: ${theme.font.family};
      font-size: ${theme.font.size.normalText};
      border-radius: 30px;
      border: none;

      ::placeholder {
        color: #6f7885;
      }
      :focus-visible {
        outline: 1px solid #fff;
      }

      &.btnNwes {
        background-color: ${theme.colors.purple};
        color: white;
        padding-left: 0;
        font-weight: ${theme.font.bold};
        font-size: 22px;
      }
    }
    & span {
      margin-top: -20px;
      padding-left: 15px;
      color: ${theme.colors.darkRed};
      font-size: ${theme.font.size.smallText};
    }
  }
`

export const Title = styled.h1`
  font-family: ${theme.font.family};
  font-size: 28px;
  font-weight: ${theme.font.bold};
  color: ${theme.colors.purple};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 900px) {
    text-align: initial;
  }
`

export const Title02 = styled.h1`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.title};
  font-weight: ${theme.font.bold};
  color: ${theme.colors.darkPurple};
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 900px) {
    text-align: initial;
  }
`

export const Description = styled.p`
  font-family: ${theme.font.familyTxt};
  font-size: ${theme.font.size.normalText};
  line-height: ${theme.font.lineHeight.normalText};
  margin: 5px 0;
  color: white;
  text-align: center;

  @media (max-width: 900px) {
    text-align: initial;
  }
`

export const DescriptionType2 = styled.p`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.subtitle};
  font-weight: ${theme.font.bold};
  line-height: ${theme.font.lineHeight.normalText};
  text-transform: uppercase;
  margin: 15px 0 5px 0;
  color: white;
  text-align: center;

  @media (max-width: 900px) {
    text-align: initial;
  }
`

export const DescriptionType3 = styled.p`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.subtitle};
  line-height: ${theme.font.lineHeight.normalText};
  margin: 15px 0 5px 0;
  text-align: center;
`

export const Btn = styled.a`
  background-color: ${theme.colors.orange};
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.subtitle};
  font-weight: ${theme.font.bold};
  line-height: ${theme.font.lineHeight.normalText};
  border: 2px solid ${theme.colors.orange};
  text-decoration: none;
  padding: 15px 80px;
  margin-bottom: 100px;
  border-radius: 50px;
  color: white;
  text-align: center;
  cursor: pointer;
  transition: all 0.32s;

  &:hover {
    color: white;
    background-color: #ff8200;
  }
`
