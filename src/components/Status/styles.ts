import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { StatusProps } from ".";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div<StatusProps>`
  padding: 0.5rem 0.875rem;
  max-width: 6.25rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  ${({ variant }) =>
    variant === "pending" &&
    css`
      background-color: ${theme.colors.gray[800]};
    `}
  ${({ variant }) =>
    variant === "approved" &&
    css`
      background-color: ${theme.colors.green};
    `}
    ${({ variant }) =>
    variant === "decline" &&
    css`
      background-color: ${theme.colors.red};
    `};
  ${({ variant }) =>
    variant === "available" &&
    css`
      background-color: ${theme.colors.green};
    `};
  ${({ variant }) =>
    variant === "unavailable" &&
    css`
      background-color: ${theme.colors.gray[800]};
    `};
`;

export const StatusText = styled.span`
  font-size: 0.8rem;
`;
