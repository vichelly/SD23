import styled from 'styled-components'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  height: 50vh;

  .tags {
    width: 65vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.orange};
    font-family: ${theme.font.family};
    font-size: 16px;

    p {
      font-size: 1.25rem;
    }

    &__lista {
      list-style: none;
      width: 380px;
      padding: 0;
      display: flex;
      justify-content: space-between;
      text-align: center;

      li {
        color: #9c77ac;
        padding: 6px 10px;
        cursor: pointer;
        text-align: center;
        &:hover {
          color: #f6f6f6;
          transform: scale(1.01);
        }
        &:focus {
          color: #f6f6f6;
        }
      }
    }
  }
`
