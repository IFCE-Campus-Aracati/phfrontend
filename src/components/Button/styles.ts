import styled from "styled-components";
import { theme } from "../../styles/theme";

interface ButtonProps {
  variant: "fill" | "outline";
}

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "fill" ? theme.colors.blue.light : "transparent"};
  border: ${(props) =>
    props.variant === "fill" ? "none" : `1px solid ${theme.colors.blue.light}`};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: ${theme.colors.white};
`;
