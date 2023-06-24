import { useLayoutEffect, useEffect, useState } from "react";
import { ListChecks, ChartPieSlice, Users, Printer, ClipboardText, SignOut } from "@phosphor-icons/react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { Container, NavContainer, Root, Image, Fallback, Body, Divider, Button, ButtonSignout } from "./styles";
import { useAuth } from "../../hooks/auth";

interface SideBarProps {
  variant: "admin" | "client";
}

export function SideBar({ variant }: SideBarProps) {
  const { signOut, user } = useAuth();
  const [nameUser, setNameUser] = useState("");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    function empytPhotoName(name: string | undefined) {
      const nomes = name?.split(" ");

      if (nomes?.length === 2) {
        const firstName = nomes[0][0].toUpperCase();
        const lastName = nomes[1][0].toUpperCase();

        setNameUser(`${firstName}${lastName}`);
      } else if (nomes?.length === 1) {
        setNameUser(`${nomes[0][0].toUpperCase()}`);
      }
    }

    empytPhotoName(user?.name);
  }, []);

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
        // {
        //   label: "Dashboard",
        //   icon: (
        //     <ChartPieSlice
        //       color={"#FFF"}
        //       size={"1.5rem"}
        //       weight={pathname === "/admin/dashboard" ? "fill" : "regular"}
        //     />
        //   ),
        //   to: "/admin/dashboard",
        // },
        {
          label: "Users",
          icon: (
            <Users color={"#FFF"} size={"1.5rem"} weight={pathname === "/admin/list_users" ? "fill" : "regular"} />
          ),
          to: "/admin/list_users",
        },
        {
          label: "Printers",
          icon: (
            <Printer
              color={"#FFF"}
              size={"1.5rem"}
              weight={pathname === "/admin/list_printers" ? "fill" : "regular"}
            />
          ),
          to: "/admin/list_printers",
        },
        {
          label: "myPrints",
          icon: (
            <ClipboardText
              color={"#FFF"}
              size={"1.5rem"}
              weight={pathname === "/admin/my_prints" ? "fill" : "regular"}
            />
          ),
          to: "/admin/my_prints",
        },
      ],
    },
  ];

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <NavContainer>
        <Root onClick={() => navigate(`/${user?.role}/profile`)}>
          <Image src="" alt="Foto de perfil" />
          <Fallback delayMs={1000}>{nameUser}</Fallback>
        </Root>

        <Divider />

        {variant === "admin"
          ? icons[0].admin.map((item) => {
              return (
                <Button key={item.label} onClick={() => navigate(item.to)} isFocus={pathname === item.to}>
                  {item.icon}
                </Button>
              );
            })
          : icons[0].client.map((item) => {
              return (
                <Button key={item.label} onClick={() => navigate(item.to)} isFocus={pathname === item.to}>
                  {item.icon}
                </Button>
              );
            })}
        <ButtonSignout onClick={handleSignOut}>
          <SignOut color={"#FFF"} size={"1.5rem"} />
        </ButtonSignout>
      </NavContainer>
      <Body>
        <Outlet />
      </Body>
    </Container>
  );
}
