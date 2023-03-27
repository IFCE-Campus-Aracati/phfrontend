import React from "react";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Body,
  HeaderNavigation,
  ImageSide,
  LinkButton,
  TextLink,
  Logo,
  RowButtons,
} from "./styles";

import HomeImage from "../../assets/home-image.png";
import LogoImage from "../../assets/logo-image.svg";

export function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Body>
        <HeaderNavigation>
          <LinkButton to={"/signin"}>
            <TextLink>Login</TextLink>
          </LinkButton>
          <LinkButton to={""}>
            <TextLink>Buscar impressão</TextLink>
          </LinkButton>
          <LinkButton to={"/anonymous/request_print"}>
            <TextLink>Solicitar impressão</TextLink>
          </LinkButton>
        </HeaderNavigation>

        <Logo src={LogoImage} />
        <RowButtons>
          <Button
            size="large"
            title="Buscar impressão"
            variant="fill"
            onClick={() => navigate("")}
          />
          <Button
            size="large"
            title="Solicitar impressão"
            variant="fill"
            onClick={() => navigate("")}
          />
        </RowButtons>
      </Body>

      <ImageSide src={HomeImage} />
    </Container>
  );
}
