import React, { ReactNode } from "react";
import {
  ListChecks,
  ChartPieSlice,
  Users,
  Printer,
  ClipboardText,
  SignOut,
} from "@phosphor-icons/react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import {
  Container,
  NavContainer,
  Root,
  Image,
  Fallback,
  Body,
  Divider,
  Button,
  ButtonSignout,
} from "./styles";

interface SideBarProps {
  variant: "admin" | "client";
}

export function SideBar({ variant }: SideBarProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const icons = [
    {
      client: [
        {
          label: "myPrints",
          icon: (
            <ClipboardText
              color={"#FFF"}
              size={"1.5rem"}
              weight={pathname === "/client/my_prints" ? "fill" : "regular"}
            />
          ),
          to: "/client/my_prints",
        },
      ],
      admin: [
        {
          label: "List",
          icon: (
            <ListChecks
              color={"#FFF"}
              size={"1.5rem"}
              weight={pathname === "/admin/list_prints" ? "fill" : "regular"}
            />
          ),
          to: "/admin/list_prints",
        },
        {
          label: "Dashboard",
          icon: (
            <ChartPieSlice
              color={"#FFF"}
              size={"1.5rem"}
              weight={pathname === "/" ? "fill" : "regular"}
            />
          ),
          to: "/",
        },
        {
          label: "Users",
          icon: (
            <Users
              color={"#FFF"}
              size={"1.5rem"}
              weight={pathname === "/" ? "fill" : "regular"}
            />
          ),
          to: "/list_users",
        },
        {
          label: "Printers",
          icon: (
            <Printer
              color={"#FFF"}
              size={"1.5rem"}
              weight={pathname === "/" ? "fill" : "regular"}
            />
          ),
          to: "/",
        },
        {
          label: "myPrints",
          icon: (
            <ClipboardText
              color={"#FFF"}
              size={"1.5rem"}
              weight={pathname === "/" ? "fill" : "regular"}
            />
          ),
          to: "/",
        },
      ],
    },
  ];

  return (
    <Container>
      <NavContainer>
        <Root>
          <Image src="" alt="Foto de perfil" />
          <Fallback delayMs={1000}>GM</Fallback>
        </Root>

        <Divider />

        {variant === "admin"
          ? icons[0].admin.map((item) => {
              return (
                <Button
                  key={item.label}
                  onClick={() => navigate(item.to)}
                  isFocus={pathname === item.to}
                >
                  {item.icon}
                </Button>
              );
            })
          : icons[0].client.map((item) => {
              return (
                <Button
                  key={item.label}
                  onClick={() => navigate(item.to)}
                  isFocus={pathname === item.to}
                >
                  {item.icon}
                </Button>
              );
            })}
        <ButtonSignout>
          <SignOut color={"#FFF"} size={"1.5rem"} />
        </ButtonSignout>
      </NavContainer>
      <Body>
        <Outlet />
      </Body>
    </Container>
  );
}
