import styled from "styled-components";
import { theme } from "../../styles/theme";

interface DivProps {
  variant: "search" | "form";
}

export const Container = styled.div`
  margin-bottom: 1.5rem;
  min-width: 20rem;
`;

export const Label = styled.p`
  color: ${theme.colors.white};
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const ContainerInput = styled.div<DivProps>`
  border: 0.1rem solid
    ${(props) =>
      props.variant === "form"
        ? theme.colors.divider
        : theme.colors.blue.light};
  border-radius: 0.4rem;
  background-color: ${(props) =>
    props.variant === "form" ? "transparent" : theme.colors.blue.dark};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1.2rem;
`;

export const InputArea = styled.input`
  background-color: transparent;
  border: none;
  height: 3rem;
  width: 95%;
  font-size: 1rem;
  color: ${theme.colors.white};
  outline: 0;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 5%;
`;

export const IconArea = styled.div`
  background-color: transparent;
  border: none;
  width: 5%;
`;
