import { Container, Title, Row } from "./styles";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Plus } from "@phosphor-icons/react";
import { Table } from "../../../components/Table";
import { ListTableDataProps } from "../../../components/Table/ListTable";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import api from "../../../server/api";

const header = ["Título", "Emissor", "Data", "Status", "Detalhes"];

export function ListPrints() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [printsData, setPrintsData] = useState<ListTableDataProps[]>([]);

  useEffect(() => {
    async function getPrints() {
      try {
        const response = await api.get<ListTableDataProps[]>("/getAllPrints", {
          headers: { Authorization: `$Bearer ${user?.token}` }
        });

        setPrintsData(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getPrints();

  }, []);

  return (
    <Container>
      <Title>Lista de Impressões</Title>
      <Row>
        <Input
          variant="search"
          placeholder="Buscar pedido de impressão"
          style={{ maxWidth: "20%" }}
        />
        <Button
          size="medium"
          title="Adicionar impressão"
          variant="outline"
          onClick={() => navigate("/admin/list_prints/register_print")}
        >
          <Plus size={"1.5rem"} color={"#FFF"} />
        </Button>
      </Row>

      <Table data={printsData} header={header} variant="list" />
    </Container>
  );
}
