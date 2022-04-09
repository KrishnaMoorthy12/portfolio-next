import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export function Button({ link, onClick, children, ...rest }: IButtonProps) {
  return (
    <StyledAnchor href={link} target='_blank' rel='noopener noreferrer' onClick={onClick} {...rest}>
      {children}
    </StyledAnchor>
  );
}

interface IButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  link: string;
  onClick?: () => void;
}

const StyledAnchor = styled.a<HTMLAttributes<HTMLAnchorElement>>`
  position: relative;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.4rem;

  padding: 1.2rem 3rem;
  border: 2px solid transparent;
  background-clip: padding-box;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.3rem ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.slate.darker};
  background-size: 220%;
  border: 2px solid ${({ theme }) => theme.colors.primary.dark};
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    ${({ theme }) => theme.colors.primary.dark} 50%
  );
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  ${({ theme }) => theme.util.forTheme('dark')} {
    border-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.pureWhite};
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      ${({ theme }) => theme.colors.primary.main} 50%
    );
  }

  & > span {
    margin-right: 1rem;
  }

  &:hover,
  &:active {
    background-position: 100%;
    color: ${({ theme }) => theme.colors.pureWhite};
    box-shadow: 0 0 1rem ${({ theme }) => theme.colors.primary.dark};
  }

  @keyframes load {
    0% {
      background-position: 150%;
    }
    100% {
      background-position: -50%;
    }
  }

  &:disabled {
    pointer-events: none;
    background-position: 100%;
    box-shadow: 0 0 0rem ${({ theme }) => theme.colors.primary.dark};

    color: inherit;

    background-image: linear-gradient(
      120deg,
      transparent 33%,
      ${({ theme }) => theme.colors.primary.dark} 33%,
      ${({ theme }) => theme.colors.primary.dark} 66%,
      transparent 66%
    );

    ${({ theme }) => theme.util.forTheme('dark')} {
      background-image: linear-gradient(
        120deg,
        transparent 33%,
        ${({ theme }) => theme.colors.primary.main} 33%,
        ${({ theme }) => theme.colors.primary.main} 66%,
        transparent 66%
      );
    }

    animation-name: load;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`;
