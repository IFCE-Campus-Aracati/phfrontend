import { Form, Indicatior, Item, Label, RadioContainer, Root } from './styles';

export function UserRole() {
  return (
    <Form>
      <Root defaultValue="operator" aria-label="View density">
        <RadioContainer>
          <Item value="operator" id="r1">
            <Indicatior />
          </Item>
          <Label htmlFor="r1">
            Bolsista
          </Label>
        </RadioContainer>
        <RadioContainer>
          <Item value="admin" id="r2">
            <Indicatior />
          </Item>
          <Label htmlFor="r2">
            Administrador
          </Label>
        </RadioContainer>
        <RadioContainer>
          <Item value="student" id="r3">
            <Indicatior />
          </Item>
          <Label htmlFor="r3">
            Aluno
          </Label>
        </RadioContainer>
      </Root>
    </Form>
  );
}