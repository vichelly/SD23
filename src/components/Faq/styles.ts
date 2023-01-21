import styled from 'styled-components'
import theme from '../../styles/theme'

export const SectionOne = styled.section`
  background-color: ${theme.colors.veryLightGrey};
  display: flex;
  justify-content: center;
  padding-top: 30px;
  @media (max-width: 1335px) {
    padding-top: 0px;
  }

  & .accordion {
    width: 100%;
  }

  & .accordion-item {
    border: none;
    background-color: #e8e8e8;
    border-radius: 16px;
  }

  & .accordion-item:first-of-type .accordion-button {
    background-color: none;
    color: ${theme.colors.darkGrey};
    font-size: 14px;
    height: 50px;
    font-weight: ${theme.font.bold};
    background-color: #e8e8e8;
    border-radius: 16px 16px 16px 16px;
    transition: all 0.32s;

    &:not(.collapsed) {
      border-radius: 16px 16px 0px 0px;
    }
    &:focus {
      box-shadow: none;
    }
  }

  & .accordion-item:last-of-type .accordion-button.collapsed {
    background-color: none;
    color: ${theme.colors.darkGrey};
    font-size: 14px;
    height: 50px;
    font-weight: ${theme.font.bold};
    background-color: #e8e8e8;
    border-radius: 16px 16px 16px 16px;
    &:not(.collapsed) {
      border-radius: 16px 16px 0px 0px;
    }
  }

  .accordion-button {
    background-color: none;
    color: ${theme.colors.darkGrey};
    font-size: 14px;
    height: 50px;
    font-weight: ${theme.font.bold};
    background-color: #e8e8e8;
    border-radius: 16px 16px 16px 16px;

    &:not(.collapsed) {
      border-radius: 16px 16px 0px 0px;
    }
  }

  & .accordion-body {
    background-color: #e8e8e8;
    border-radius: 0px 0px 16px 16px;
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
`

export const Title = styled.h1`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.title};
  font-weight: ${theme.font.bold};
  color: ${theme.colors.purple};
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
  color: ${theme.colors.darkGrey};
  text-align: center;

  @media (max-width: 900px) {
    text-align: initial;
  }
`

export const TitleHeader = styled.section`
  font-family: ${theme.font.familyTxt};
`

export const AcordionBody = styled.section`
  font-family: ${theme.font.familyTxt};
  font-size: ${theme.font.size.normalText};
  line-height: ${theme.font.lineHeight.normalText};
  color: ${theme.colors.darkGrey};
  text-align: left;
  vertical-align: top;
  letter-spacing: 0.2px;
`
