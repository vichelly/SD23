import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  background-color: #f6f6f6;
  color: #ed8a23;
  width: 100%;
  min-height: 100%;
  padding: 3rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;

  @media (max-width: 650px) {
    align-items: center;
    justify-content: center;
    padding-bottom: 36px;
  }

  & div {
    color: #ed8a23;
    text-align: left;
    font-size: ${theme.font.size.title};
    font-family: ${theme.font.family};
    font-weight: bold;
  }

  & form {
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 20px;

    & .radios {
      display: flex;
      gap: 10px;
      justify-content: space-between;

      & div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-weight: bold;
      }

      & label {
        color: #2c394c;
        font-size: 13px;
      }
      & input[type='radio'] {
        width: 20px;
        height: 20px;
        top: 2px;
        left: 2px;
        display: flex;
        cursor: pointer;
        align-items: center;
        display: inline-block;
        border-style: none;

        &:after {
          width: 20px;
          height: 20px;
          border-radius: 15px;
          top: -2px;
          left: -1px;
          position: relative;
          background-color: #d1d3d1;
          content: '';
          display: inline-block;
          visibility: visible;
          border: 2px solid white;
        }
        &:checked:after {
          width: 20px;
          height: 20px;
          border-radius: 15px;
          top: -2px;
          left: -1px;
          position: relative;
          background-color: #ffa500;
          content: '';
          display: inline-block;
          visibility: visible;
          border: 2px solid white;
        }
      }
    }

    & input {
      background-color: transparent;
      border: 2px solid #6f7885;
      height: 50px;
      border-radius: 50px;
      color: #6f7885;
      font-family: 'Montserrat';
      font-size: 18px;
      padding: 10px;

      &::placeholder {
        color: #6f7885;
        font-family: 'Montserrat';
        font-size: 18px;
        padding: 10px;
      }

      &.btnForm {
        background-color: #ed8a23;
        color: #fff;
        border: none;
        cursor: pointer;
        transition: all 0.5s;

        &:hover {
          background-color: #cdbbd6;
          transform: scale(1.01);
        }
      }
    }
    & span {
      margin-top: -15px;
      font-weight: 400;
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

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  line-height: 3.5rem;
  & span {
    color: rgb(239, 217, 48);
  }
`

export const Description2 = styled.h2`
  font-size: 3rem;
  font-weight: 700;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: 0rem;
  background-color: trasparent;
`

export const Button = styled.a`
  padding: 12px 120px;
  background-color: transparent;
  color: #cdbbd6;
  border-radius: 50px;
  border: 1px solid #cdbbd6;
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none;
`
