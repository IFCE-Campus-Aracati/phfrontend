import { Status } from "./../Status";
import { MagnifyingGlass, PencilSimpleLine, Trash } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal";
import { ListTableDataProps } from "../../utils/interfaces";

import { Container, TableContainer, Row, Head, TH, Body, TableData, RowIcons, ButtonIcon } from "./styles";

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
  const navigate = useNavigate();
  return (
    <Container>
      <TableContainer>
        <Head>
          <Row>
            {header.map((item) => {
              return <TH key={item}>{item}</TH>;
            })}
          </Row>
        </Head>

        <Body>
          {data.map((item) => {
            return (
              <Row key={item.id}>
                <TableData>{item.title}</TableData>
                <TableData>{item.owner?.name ? item.owner.name : "Usuário anônimo"}</TableData>
                <TableData>{item.created_at}</TableData>
                <TableData>
                  <Status variant={item.status} />
                </TableData>
                <TableData>
                  <RowIcons>
                    {isView && (
                      <Modal
                        data={item}
                        title="Detalhes"
                        variant="detailsPrint"
                        route={`/admin/list_prints/edit_print/${item.identifier}`}
                      >
                        <ButtonIcon>
                          <MagnifyingGlass size={"1rem"} color={"#FFF"} />
                        </ButtonIcon>
                      </Modal>
                    )}
                    {isEdit && (
                      <ButtonIcon onClick={() => navigate(`/admin/list_prints/edit_print/${item.identifier}`)}>
                        <PencilSimpleLine size={"1rem"} color={"#FFF"} />
                      </ButtonIcon>
                    )}
                    {isDelete && (
                      <ButtonIcon onClick={() => alert("FOI")}>
                        <Trash size={"1rem"} color={"#FFF"} />
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
