import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.section`
  width: ${theme.grid.container};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

/* mobile 1335px */
export const HeaderDesktop = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 165px;
  gap: 12px;
  height: 77px;
  background-color: transparent;
  position: fixed;
  width: 100%;
  transition: 0.3s;
  background-color: ${(props) => props.passToStyle};
  z-index: 10;
  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 1000px) {
    display: none;
    z-index: 10;
  }
  @media (max-width: 1221px) {
    display: none;
  }
`

export const OptionsContainer = styled.ul`
  list-style: none;
  padding: 0%;
`

export const OptionItem = styled.li`
  display: inline;
  padding: 8px 8px;
  gap: 13.86px;
  .active {
    background-color: ${theme.colors.orange};
    border-color: ${theme.colors.orange};
  }
  p {
    transition: 0.3s;
    display: inline;
    cursor: pointer;
    text-decoration: none;
    font-family: ${theme.font.familyTxt};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.size.subtitle};
    line-height: ${theme.font.lineHeight.subtitle};
    color: ${theme.colors.veryLightGrey};
    border: 2px solid ${theme.colors.veryLightGrey};
    border-radius: 138.625px;
    padding: 8px 16px;
  }
  p:hover {
    border: 2px solid ${theme.colors.veryLightPurple};
    background-color: ${theme.colors.veryLightPurple};
  }
  @media (max-width: 1535px) {
    padding: 0px 15px;
    p {
      font-size: 14.5px;
    }
  }
  @media (max-width: 1465px) {
    padding: 0px 5px;
    gap: 0px;
    p {
      padding: 6px 14px;
    }
  }
  @media (max-width: 1350px) {
    p {
      padding: 5px 13px;
      font-size: 14px;
    }
  }
  @media (max-width: 1270px) {
    p {
      padding: 3px 11px;
      font-size: 13.5px;
    }
  }
`

export const HeaderMobile = styled.header`
  z-index: 10;
  display: none;
  @media (max-width: 1221px) {
    display: flex;
    position: fixed;
    right: 16px;
    top: 24px;
  }
`
export const Hamburguer = styled.div`
  cursor: pointer;
`
export const closeSidebar = styled.section`
  display: ${(props) => props.passDisplay};
  position: fixed;
  padding-left: 30px;
  cursor: pointer;
  right: 350px;
  top: 20px;
  z-index: 99999999;
  @media (max-width: 390px) {
    right: 245px;
  }
`
export const Geral = styled.div`
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  right: 0px;
  animation: darkSide 0.6s;
  display: ${(props) => props.passDisplay};
  @keyframes darkSide {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export const MenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(25px * ${(props) => props.passSidebar}) 0px;
  gap: 30px;
  top: 0px;
  right: 0px;
  position: fixed;
  width: 390px;
  height: calc(709px * ${(props) => props.passSidebar});
  background: ${theme.colors.darkPurple};
  transition: 0.6s;
  z-index: 999;
  overflow: hidden;

  span {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 30px;
    margin-left: 25%;
  }
  @keyframes showSidebar {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      opacity: 1;
      height: 679.12px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.purple};
  }

  p {
    cursor: pointer;
    line-height: 20px;
    text-decoration: none;
    color: ${theme.colors.veryLightGrey};
    font-family: ${theme.font.family};
    font-size: ${theme.font.size.normalText};
    font-weight: ${theme.font.bold};
  }

  li {
    display: inline;
  }
  @media (max-width: 390px) {
    width: 280px;
    height: calc(600px * ${(props) => props.passSidebar});
    gap: 18px;
    span {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      padding-left: 0px;
      margin-left: 20%;
    }
  }
`
