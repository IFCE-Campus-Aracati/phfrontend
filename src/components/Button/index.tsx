import React from "react";

import { Container, Title } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: "fill" | "outline";
  size: "small" | "medium" | "large";
  children?: React.ReactNode;
}

export function Button({
  title,
  variant,
  size,
  children,
  ...rest
}: ButtonProps) {
  {
    switch (size) {
      case "small":
        return (
          <Container
            style={{ height: 36, paddingInline: 16, gap: 6 }}
            variant={variant}
            {...rest}
          >
            {children}
            <Title style={{ fontSize: 14 }}>{title}</Title>
          </Container>
        );
      case "medium":
        return (
          <Container
            style={{ height: 40, paddingInline: 20, gap: 8 }}
            variant={variant}
            {...rest}
          >
            {children}
            <Title style={{ fontSize: 16 }}>{title}</Title>
          </Container>
        );
      case "large":
        return (
          <Container
            style={{ height: 56, paddingInline: 24, gap: 8 }}
            variant={variant}
            {...rest}
          >
            {children}
            <Title style={{ fontSize: 18 }}>{title}</Title>
          </Container>
        );
    }
  }
}
