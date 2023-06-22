import { Container, IconContainer, RootContainer, SelectContent, SelectItem, SelectLabel, SelectPortal, SelectValue, SelectViewPort, TextItem, TriggerContainer } from "./styles";
import * as Select from '@radix-ui/react-select';
import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";
import classnames from 'classnames';
import React, { SelectHTMLAttributes, useState, forwardRef, useRef } from "react";
import { SelectProps } from '@radix-ui/react-select'


interface Options {
  value: string;
  text: string;
}

interface SelectRadixProps extends SelectProps {
  placeholder: string;
  options: Options[];
  open?: boolean;
  onValueChange: (value: string) => void;
}

export function SelectInput({ placeholder, open, options, onValueChange, ...props }: SelectRadixProps) {
  const [openSelect, isOpenSelect] = useState(open);
  const [value, setValue] = useState(props.value || "");

  const handleValueChange = (text: string) => {
    onValueChange(text);
    setValue(text);
  };

  return (
    <Container>
      <RootContainer onOpenChange={isOpenSelect} value={value} onValueChange={handleValueChange}>
        <TriggerContainer {...props} aria-label="Opções" value={value}>
          <SelectValue placeholder={placeholder}>
            {value ? value : placeholder}
          </SelectValue>
          <IconContainer className="SelectIcon">
            <CaretDown size={20} />
          </IconContainer>
        </TriggerContainer>

        <SelectPortal>
          <SelectContent className="SelectContent" position="popper">
            <SelectViewPort className="SelectViewport">
              <Select.Group>
                <SelectLabel className="SelectLabel">Materiais Disponíveis</SelectLabel>
                {options.map((option) => (
                  <SelectItem className="SelectItem" value={option.value}>
                    <TextItem>{option.text}</TextItem>
                  </SelectItem>
                ))}
              </Select.Group>
            </SelectViewPort>
          </SelectContent>
        </SelectPortal>
      </RootContainer>
    </Container>
  );
}
