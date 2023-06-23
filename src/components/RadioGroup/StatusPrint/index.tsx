import { Form, Indicatior, Item, Label, RadioContainer, Root } from './styles';

export function StatusPrint() {
  return (
    <Form>
      <Root defaultValue="pending" aria-label="View density">
        <RadioContainer>
          <Item value="pending" id="r1">
            <Indicatior />
          </Item>
          <Label htmlFor="r1">
            Pendente
          </Label>
        </RadioContainer>
        <RadioContainer>
          <Item value="aproved" id="r2">
            <Indicatior />
          </Item>
          <Label htmlFor="r2">
            Aprovado
          </Label>
        </RadioContainer>
        <RadioContainer>
          <Item value="decline" id="r3">
            <Indicatior />
          </Item>
          <Label htmlFor="r3">
            Recusado
          </Label>
        </RadioContainer>
      </Root>
    </Form>
  );
}