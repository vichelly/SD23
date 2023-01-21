import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  & img {
    width: 80px;
  }

  & h3 {
    margin-top: 20px;
    font-family: ${theme.font.family};
    font-size: 22px;
    font-weight: 700;
    color: ${theme.colors.purple};
    text-align: center;
  }

  & p {
    text-align: center;
  }
`
