import styled from 'styled-components'
import theme from 'styles/theme'


export const Frame = styled.img`
  display: none;
  @media (max-width: 1350px) {
    display: none;
    top: 16px;
    left: 8px;
    position: absolute;
  }
  @media (max-width: 1221px) {
    display: block;
    top: 16px;
    left: 8px;
    position: absolute;
  }
`


export const Container = styled.div`
  width: ${theme.grid.container};

  @media (max-width: 1320px) {
    width: 100%;
    padding: 10px;
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
  }
  @media (max-width: 650px) {
    background-image: none;
    background-color: ${theme.colors.purple};
    align-items: center;
    justify-content: center;
    padding-bottom: 36px;
  }

  & .carrousel {
    //margin-bottom: 80px;
    cursor: grab;
    overflow: hidden;
    padding: 20px;
    transition: all 0.32s;

    @media (max-width: 508px) {
      padding: 5px;
    }
  }

  & .inner {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  & .itemImg {
    padding: 20px;
    //width: 650px;

    & img {
      width: 490px;
      height: 300px;
      border-radius: 20px;
      pointer-events: none;
      object-fit: cover;

      /* @media (max-width: 608px) {
        width: 390px;
        height: 300px;
      }

      @media (max-width: 508px) {
        width: 400px;
      } */
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
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;

  @media (max-width: 508px) {
    margin: 10px 0 0 0;
  }

  & ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-left: -15px;

    & li {
      font-size: ${theme.font.size.subtitle};
      color: ${theme.colors.lightPurple};
      list-style: none;
      cursor: pointer;
      //border-bottom: 1px solid transparent;
      transition: all 0.2s;
      border-bottom: 2px solid transparent;
      padding-bottom: 3px;

      &:hover {
        transform: scale(1.05);
        color: white;
        border-bottom: 2px solid white;
      }
    }
    & .active {
      color: white;
      border-bottom: 2px solid white;
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
  margin-top: 80px;

  @media (max-width: 900px) {
    margin-top: 150px;
  }
`
