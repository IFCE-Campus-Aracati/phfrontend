import React from "react";

import { Status } from "./../Status";

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

export interface ListTableDataProps {
  id: string;
  title: string;
  owner: string;
  date: string;
  status: "pending" | "approved" | "decline";
}

interface TableProps {
  data: ListTableDataProps[];
  header: string[];
  isView?: boolean;
  isDelete?: boolean;
  isEdit?: boolean;
}

export function ListTable({
  data = [] as ListTableDataProps[],
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
                <TableData>{item.title}</TableData>
                <TableData>{item.owner}</TableData>
                <TableData>{item.date}</TableData>
                <TableData>
                  <Status variant={item.status} />
                </TableData>
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
