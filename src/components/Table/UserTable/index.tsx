import React from "react";

import {
  Container,
  TableContainer,
  Row,
  Head,
  TH,
  Body,
  TableData,
  RowIcons,
  ButtonIcon,
} from "./styles";

import {
  MagnifyingGlass,
  PencilSimpleLine,
  Trash,
} from "@phosphor-icons/react";

export interface TableUserDataProps {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface TableProps {
  data: TableUserDataProps[];
  header: string[];
  isView?: boolean;
  isDelete?: boolean;
  isEdit?: boolean;
}

export function UserTable({
  data = [] as TableUserDataProps[],
  header,
  isView = false,
  isDelete = false,
  isEdit = false,
}: TableProps) {
  return (
    <Container>
      <TableContainer>
        <Head>
          <Row>
            {header.map((item) => {
              return <TH>{item}</TH>;
            })}
          </Row>
        </Head>

        <Body>
          {data.map((item) => {
            return (
              <Row>
                <TableData>{item.id}</TableData>
                <TableData>{item.name}</TableData>
                <TableData>{item.email}</TableData>
                <TableData>{item.role}</TableData>
                <TableData>
                  <RowIcons>
                    {isView && (
                      <ButtonIcon onClick={() => alert("FOI")}>
                        <MagnifyingGlass size={"1.5rem"} color={"#FFF"} />
                      </ButtonIcon>
                    )}
                    {isEdit && (
                      <ButtonIcon onClick={() => alert("FOI")}>
                        <PencilSimpleLine size={"1.5rem"} color={"#FFF"} />
                      </ButtonIcon>
                    )}
                    {isDelete && (
                      <ButtonIcon onClick={() => alert("FOI")}>
                        <Trash size={"1.5rem"} color={"#FFF"} />
                      </ButtonIcon>
                    )}
                  </RowIcons>
                </TableData>
              </Row>
            );
          })}
        </Body>
      </TableContainer>
    </Container>
  );
}