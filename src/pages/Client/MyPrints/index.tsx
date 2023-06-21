import { Plus } from "@phosphor-icons/react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Container, Row, Title } from "./styles";
import { Table } from "../../../components/Table";
import { ClientListTableDataProps } from "../../../components/Table/ClientListTable";
import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks/auth";
import { useEffect, useState } from "react";
import api from "../../../server/api";

const header = ["Título", "Data", "Status", "Detalhes"];

export function MyPrints() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [myPrintsData, setMyPrintsData] = useState<ClientListTableDataProps[]>([]);

  useEffect(() => {
    async function getMyPrints() {
      try {
        const response = await api.get<ClientListTableDataProps[]>("/getUserPrint", {
          headers: { Authorization: `$Bearer ${user?.token}` }
        });

        setMyPrintsData(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getMyPrints();

  }, []);

  return (
    <Container>
      <Title>Minhas Impressões</Title>
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
          onClick={() => navigate("/client/my_prints/create_print")}
        >
          <Plus size={"1.5rem"} color={"#FFF"} />
        </Button>
      </Row>

      <Table data={myPrintsData} header={header} variant="client" />
    </Container>
  );
}