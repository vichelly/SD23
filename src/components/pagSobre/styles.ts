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

export const SectionOne = styled.section`
  background-image: url(img/bg-Sobre.svg);
  background-size: cover;
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
  position: relative;

  & .divImg {
    display: none;
    @media (max-width: 900px) {
      display: block;
      position: absolute;
      left: 10px;
      top: 22px;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 80px;
    align-items: center;

    @media (max-width: 900px) {
      padding: 20px;
      margin-top: 150px;
    }
  }
`

export const Title = styled.h1`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.title};
  font-weight: ${theme.font.bold};
  color: ${theme.colors.orange};
  text-align: center;
  text-transform: uppercase;

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

export const Illustration = styled.img`
  margin-top: 50px;
  width: 100%;
`
export const Illustration02 = styled.img`
  //margin-top: 50px;
  width: 165px;
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

  @media (max-width: 400px) {
    padding: 15px 40px;
  }

  @media (max-width: 320px) {
    padding: 15px 20px;
  }
`

export const DivCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  gap: 30px;

  @media (max-width: 1130px) {
    flex-wrap: wrap;
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(246, 246, 246, 0.2);
  width: 155px;
  height: 305px;
  border-radius: 20px;
`

export const imgCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 50%;

  & img {
    width: 100%;
  }
`

export const DivDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 50%;
  padding: 5px 7px 5px 7px;

  & h3 {
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.subtitle};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.darkPurple};
    text-align: center;
    text-transform: uppercase;
    margin-top: -10px;
  }

  & p {
    font-family: ${theme.font.familyTxt};
    font-size: 15px;
    font-weight: ${theme.font.light};
    //line-height: ${theme.font.lineHeight.normalText};
    margin: 5px 0;
    text-align: center;
  }
`
