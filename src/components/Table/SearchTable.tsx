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

export interface SearchTableDataProps {
  id: string;
  idSearch: string;
  title: string;
  date: string;
  status: "pending" | "approved" | "decline";
}

interface SearchTableProps {
  data: SearchTableDataProps[];
  header: string[];
  isView?: boolean;
  isDelete?: boolean;
  isEdit?: boolean;
}

export function SearchTable({
  data = [] as SearchTableDataProps[],
  header,
  isView = false,
  isDelete = false,
  isEdit = false,
}: SearchTableProps) {
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
              <Row key={item.id}>
                <TableData>{item.idSearch}</TableData>
                <TableData>{item.title}</TableData>
                <TableData>{item.date}</TableData>
                <TableData>
                  <Status variant={item.status} />
                </TableData>
                <TableData>
                  {isView && (
                    <ButtonIcon onClick={() => alert("FOI")}>
                      <MagnifyingGlass size={"1rem"} color={"#FFF"} />
                    </ButtonIcon>
                  )}
                  {isEdit && (
                    <ButtonIcon onClick={() => alert("FOI")}>
                      <PencilSimpleLine size={"1rem"} color={"#FFF"} />
                    </ButtonIcon>
                  )}
                  {isDelete && (
                    <ButtonIcon onClick={() => alert("FOI")}>
                      <Trash size={"1rem"} color={"#FFF"} />
                    </ButtonIcon>
                  )}
                </TableData>
              </Row>
            );
          })}
        </Body>
      </TableContainer>
    </Container>
  );
}
