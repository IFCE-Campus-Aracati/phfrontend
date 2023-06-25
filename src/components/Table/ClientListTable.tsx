import { useNavigate } from "react-router-dom";
import { MagnifyingGlass, Trash } from "@phosphor-icons/react";
import { Modal } from "../Modal";
import { useAuth } from "../../hooks/auth";
import { Status } from "./../Status";
import { ListTableDataProps } from "../../utils/interfaces";

import { Container, TableContainer, Row, Head, TH, Body, TableData, RowIcons, ButtonIcon } from "./styles";
interface TableProps {
  data: ListTableDataProps[];
  header: string[];
  isView?: boolean;
  isDelete?: boolean;
  isEdit?: boolean;
}

export function ClientListTable({
  data = [] as ListTableDataProps[],
  header,
  isView = false,
  isDelete = false,
  isEdit = false,
}: TableProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
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
                <TableData>{item.created_at}</TableData>
                <TableData>
                  <Status variant={item.status} />
                </TableData>
                <TableData>
                  <RowIcons>
                    {isView && (
                      <Modal
                        title="Detalhes"
                        variant="detailsPrint"
                        route={`/${user?.role}/my_prints/edit_print/${item.identifier}`}
                        data={item}
                      >
                        <ButtonIcon>
                          <MagnifyingGlass size={"1rem"} color={"#FFF"} />
                        </ButtonIcon>
                      </Modal>
                    )}
                    {item.status === "pending" && (
                      <Modal data={item} title="Você deseja excluir?" variant="deletePrint" route="">
                        <ButtonIcon>
                          <Trash size={"1rem"} color={"#FFF"} />
                        </ButtonIcon>
                      </Modal>
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
