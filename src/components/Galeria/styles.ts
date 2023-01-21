import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  font-size: 14px;
  background-color: ${theme.colors.purple};
  img {
    display: none;
  }
  @media (max-width: 1350px) {
    align-items: center;
    justify-content: center;
    padding-bottom: 36px;
    img {
      display: block;
    }
  }

  .galeria {
    font-family: ${theme.font.family};
    margin-bottom: 2rem;

    @media (max-width: 650px) {
      align-items: center;
      justify-content: center;
      padding-bottom: 36px;
    }

    h2 {
      color: ${theme.colors.orange};
      font-size: 28px;
    }

    &__cards {
      list-style: none;
      padding: 0;
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }

    &__card {
      border-radius: 20px;
      height: 180px;
      width: 285px;
      margin-right: 1rem;
      margin-bottom: 1.35rem;
      cursor: pointer;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.025);
        transition: 0.18s;
      }

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        box-sizing: border-box;
        width: 100%;

        span {
          width: 20%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          img {
            cursor: pointer;
          }
        }
      }
    }

    &__imagem {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
      @media (max-width: 650px) {
        align-items: center;
        justify-content: center;
      }
    }
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    justify-content: flex-start;
    margin-bottom: 30px;
  }
`

export const Logo = styled.img`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    width: 120px;
  }
`
