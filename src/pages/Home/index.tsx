import React from "react";

import { Container, Image, Title } from "./styles";

import image from "../../assets/constrution.svg";

export function Home() {
  return (
    <Container>
      <Image src={image} alt="Em contruição" />
      <Title>Em Contrução...</Title>
    </Container>
  );
}
