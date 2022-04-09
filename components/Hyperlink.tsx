import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export function HyperLink({ to, lone, children }: HyperlinkProps) {
  return (
    <StyledHyperlink href={to} target='_blank' rel='noopener noreferrer' lone={!!lone}>
      {children}
    </StyledHyperlink>
  );
}

interface HyperlinkProps extends HTMLAttributes<HTMLAnchorElement> {
  to: string;
  lone?: boolean;
}

const StyledHyperlink = styled.a<{ lone: boolean }>`
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  display: inline-block;
  color: ${p => (p.lone ? 'inherit' : p.theme.colors.primary.dark)};
  transition: 0.2s all;
  position: relative;

  ${p => p.theme.util.forTheme('dark')} {
    color: ${p => (p.lone ? 'inherit' : p.theme.colors.primary.light)};
  }

  &::after {
    content: '';
    display: block;
    bottom: -0.5rem;
    height: 1px;
    width: 100%;
    transform: scaleX(0);
    transform-origin: left;
    background-color: ${p => p.theme.colors.primary.dark};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:hover {
    color: ${p => p.theme.colors.primary.dark} !important;

    ${p => p.theme.util.forTheme('dark')} {
      color: ${p => p.theme.colors.primary.light} !important;
    }

    &::after {
      transform: scaleX(1);
    }
  }

  &:hover {
    color: ${p => p.theme.colors.primary.light};
  }

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;
