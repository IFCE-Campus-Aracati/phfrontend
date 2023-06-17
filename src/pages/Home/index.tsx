import React, { useEffect, useLayoutEffect } from "react";
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
import { useAuth } from "../../hooks/auth";

export function Home() {
  const navigate = useNavigate();

  const { userRole, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated && userRole) {
      console.log("ROLE", userRole);
      if (userRole === 'client') {
        navigate('/client/my_prints');
      } else if (userRole === 'admin') {
        navigate('/admin/list_prints');
      }
    }
  }, [isAuthenticated, userRole]);

  return (
    <Container>
      <Body>
        <HeaderNavigation>
          <LinkButton to={"/signin"}>
            <TextLink>Login</TextLink>
          </LinkButton>
          <LinkButton to={"/signup"}>
            <TextLink>Cadastre-se</TextLink>
          </LinkButton>
        </HeaderNavigation>

        <Logo src={LogoImage} />
        <RowButtons>
          <Button
            size="large"
            title="Buscar impressão"
            variant="fill"
            onClick={() => navigate("/anonymous/search_print")}
          />
          <Button
            size="large"
            title="Solicitar impressão"
            variant="fill"
            onClick={() => navigate("/anonymous/request_print")}
          />
        </RowButtons>
      </Body>

      <ImageSide src={HomeImage} />
    </Container>
  );
}
