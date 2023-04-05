import React from "react";

import { Container, Title } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: "fill" | "outline";
  size: "small" | "medium" | "large" | "xlarge";
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
            style={{ height: "2.25rem", paddingInline: "1rem", gap: 6 }}
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
            style={{ height: "2.5rem", paddingInline: "1.25rem", gap: 8 }}
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
            style={{ height: "3.5rem", paddingInline: "2rem", gap: 8 }}
            variant={variant}
            {...rest}
          >
            {children}
            <Title style={{ fontSize: 18 }}>{title}</Title>
          </Container>
        );
      case "xlarge":
        return (
          <Container
            style={{
              justifyContent: "center",
              height: "3rem",
              paddingInline: 120,
              gap: 8,
            }}
            variant={variant}
          >
            {children}
            <Title style={{ fontSize: 18 }}>{title}</Title>
          </Container>
        );
    }
  }
}
