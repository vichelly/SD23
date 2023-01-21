import styled from 'styled-components'
import theme from '../../styles/theme'

export const Footer = styled.section`
  min-height: 320px;
  background-color: ${theme.colors.darkGrey};
  display: flex;
  justify-content: center;
  padding: 37px 0px;
  padding-bottom: 200px;

  @media (max-width: 1300px) {
    padding: 37px 20px;
    padding-bottom: 200px;
  }
`

export const Container = styled.div`
  width: ${theme.grid.container};
  display: flex;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`

export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  @media (max-width: 650px) {
    align-items: center;
    justify-content: center;
    padding-bottom: 36px;
  }
`

export const SideRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 48px;

  @media (max-width: 650px) {
    align-items: center;
    justify-content: center;
    gap: 20px;
    div {
      display: flex;
      img {
        width: 60px;
      }
    }
  }
  @media (max-width: 350px) {
    div {
      img {
        margin-top: 10px;
        width: 45px;
      }
    }
  }
`

export const ParagraphLeft = styled.p`
  font-family: ${theme.font.family};
  color: ${theme.colors.veryLightGrey};
  font-size: ${theme.font.size.subtitle};
  font-weight: ${theme.font.light};
  line-height: ${theme.font.lineHeight.subtitle};
  letter-spacing: 0.1rem;
`

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 650px) {
    align-items: center;
  }
`
export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 650px) {
    align-items: center;
    justify-content: center;
  }
`
export const Terms = styled.a`
  font-family: ${theme.font.family};
  color: ${theme.colors.veryLightGrey};
  font-size: ${theme.font.size.subtitle};
  font-weight: ${theme.font.light};
  margin: 2px 0;
`

export const ParagraphRight = styled.p`
  font-family: ${theme.font.family};
  color: ${theme.colors.veryLightGrey};
  font-size: ${theme.font.size.smallText};
  font-weight: ${theme.font.light};
  line-height: ${theme.font.lineHeight.smallText};
`
export const Paragraph = styled.span`
  font-family: ${theme.font.family};
  color: ${theme.colors.veryLightGrey};
  font-size: ${theme.font.size.subtitle};
  font-weight: ${theme.font.light};
  line-height: ${theme.font.lineHeight.subtitle};
`
