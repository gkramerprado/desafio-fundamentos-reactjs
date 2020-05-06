import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  pageFrom?: 'home' | 'import';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      position: relative;

      & .active-bar {
        position: absolute;
        width: 73px;
        height: 2px;
        top: 40px;
        ${props =>
          props.pageFrom === 'home'
            ? css`
                left: 0;
              `
            : css`
                right: 0%;
              `}
        background: #ff872c;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        position: relative;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
