import React, { useState } from "react";

import {
  Container,
  Label,
  ContainerInput,
  InputArea,
  Button,
  IconArea,
} from "./styles";

import { Eye, EyeSlash, MagnifyingGlass } from "@phosphor-icons/react";
import { theme } from "../../styles/theme";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
  variant: "search" | "form";
  password?: boolean;
}

export function Input({
  label,
  placeholder,
  variant,
  password,
  ...rest
}: InputProps) {
  const [isViewPassword, setIsViewPassword] = useState(password ? true : false);

  switch (variant) {
    case "form":
      return (
        <Container>
          <Label>{label}</Label>
          <ContainerInput variant="form">
            <InputArea
              placeholder={placeholder}
              type={isViewPassword ? "password" : "text"}
              {...rest}
            />
            {password && (
              <Button onClick={() => setIsViewPassword(!isViewPassword)}>
                {isViewPassword ? (
                  <Eye color={theme.colors.divider} size={24} />
                ) : (
                  <EyeSlash color={theme.colors.divider} size={24} />
                )}
              </Button>
            )}
          </ContainerInput>
        </Container>
      );
    case "search":
      return (
        <Container>
          <ContainerInput variant="search">
            <InputArea placeholder={placeholder} type={"text"} />
            <IconArea>
              <MagnifyingGlass color={theme.colors.white} size={24} />
            </IconArea>
          </ContainerInput>
        </Container>
      );

  }
}
