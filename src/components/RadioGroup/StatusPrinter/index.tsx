import { Form, Indicatior, Item, Label, RadioContainer, Root } from './styles';

export function StatusPrinter() {
  return (
    <Form>
      <Root defaultValue="avaliable" aria-label="View density">
        <RadioContainer>
          <Item value="avaliable" id="r1">
            <Indicatior />
          </Item>
          <Label htmlFor="r1">
            Disponível
          </Label>
        </RadioContainer>
        <RadioContainer>
          <Item value="unavaliable" id="r2">
            <Indicatior />
          </Item>
          <Label htmlFor="r2">
            Indisponível
          </Label>
        </RadioContainer>
      </Root>
    </Form>
  );
}