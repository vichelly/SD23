import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  min-height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;

  & form {
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 20px;

    & input {
      background-color: transparent;
      border: 2px solid #f8098c87;
      height: 50px;
      border-radius: 50px;
      color: #fffff5;
      font-family: 'Montserrat';
      font-size: 18px;
      padding: 10px;

      &:-webkit-autofill,
      :-webkit-autofill:focus {
        background-color: red;
      }

      &::placeholder {
        color: #fffff587;
        font-family: 'Montserrat';
        font-size: 18px;
        padding: 10px;
      }

      &.btnForm {
        background-color: #f8098cde;
        cursor: pointer;
        transition: all 0.5s;

        &:hover {
          background-color: #06092b;
          transform: scale(1.01);
        }
      }
    }
  }
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
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
  //margin-top: 3rem;
  width: 50rem;
`

export const Button = styled.a`
  padding: 12px 120px;
  background-color: transparent;
  color: #fff;
  border-radius: 50px;
  border: 1px solid #fff;
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none;
`
