import styled from 'styled-components'
import theme from 'styles/theme'

export const Frame = styled.img`
  display: none;
  top: 16px;
  left: 8px;
  position: absolute;
  @media (max-width: 1221px) {
    display: block;
  }
`

export const DivPrincipal = styled.div`
  background-image: url('/img/Desk - BG Edições Anteriores.png');
  background-repeat: no-repeat;
  background-size: cover;
  color: #ed8a23;
  width: 100%;
  padding: 3rem;
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1350px) {
    align-items: center;
    justify-content: center;
    padding: 0;
    img {
      display: block;
    }
  }
  @media (max-width: 650px) {
    background-image: none;
    background-color: ${theme.colors.purple};
    align-items: center;
    justify-content: center;
    padding-bottom: 36px;
  }

  & .edicoes {
    margin-top: 80px;
    color: ${theme.colors.orange};
    font-family: ${theme.font.family};
    justify-content: space-between;
    height: 50px;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.size.title};
    @media (max-width: 1350px) {
      margin-top: 150px;
    }
  }

  & .logo {
    display: none;
    top: 16px;
    left: 8px;
    position: absolute;
    @media (max-width: 1350px) {
      width: 100px;
      display: block;
    }

    & .ImgLogo {
      width: auto;
      height: 100px !important;
    }
  }

  & .divCarrossel {
    //height: 200px;
    margin: 50px 0;
    width: 100%;

    & .carousel-inner {
      overflow: visible;
    }

    @media (max-width: 1350px) {
      //width: 100px;
      //display: block;
    }

    & .evimg {
      border-radius: 20px;
      //min-height: 200px;
      //max-height: 200px;
      margin-right: 1rem;
      margin-bottom: 1.35rem;
      cursor: pointer;
      height: 100%;
      object-fit: cover;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.025);
        transition: 0.18s;
      }
    }
  }

  & h3 {
    font-size: ${theme.font.size.subtitle};
    background-color: #41464b52;
    background-size: 100px 200px;
  }
`
export const Container = styled.div`
  width: ${theme.grid.content};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 15px;
    gap: 0px;
  }
`
