import { RadioGroupProps } from "@radix-ui/react-radio-group";
import { Form, Indicator, Item, Label, RadioContainer, Root } from "./styles";
import { useState } from "react";

interface Options {
  value: string;
  text: string;
}
interface StatusPrinterProps extends RadioGroupProps {
  options: Options[];
  onValueChange: (value: string) => void;
}

export function StatusPrinter({ onValueChange, options, ...rest }: StatusPrinterProps) {
  const [value, setValue] = useState("");

  const handleValueChange = (text: string) => {
    onValueChange(text);
    setValue(text);
  };

  return (
    <Form>
      <Root defaultValue={value} aria-label="View density" onValueChange={handleValueChange} {...rest}>
        {options.map((option) => (
          <RadioContainer>
            <Item value={option.value} id="r1">
              <Indicator />
            </Item>
            <Label htmlFor="r1">{option.text}</Label>
          </RadioContainer>
        ))}
      </Root>
    </Form>
  );
}
