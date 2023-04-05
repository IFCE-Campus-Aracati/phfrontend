import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { Icon, Trigger, Root, Value, Portal, Content, ScrollUpButton, Viewport, Group, Label, Item, ItemText} from '@radix-ui/react-select';

export const Container = styled.div``;

export const RootContainer = styled(Root)``;

export const TriggerContainer = styled(Trigger)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0 15px;
  font-size: 13px;
  font-family: 'Roboto';
  line-height: 1;
  height: 35px;
  gap: 5px;
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  border: none;
  
  :hover {
 // background-color: ${theme.colors.blue.light};
}

&:[data-placeholder] {
  color: ${theme.colors.white};
}
`;

export const SelectValue = styled(Value)`
`;

export const IconContainer = styled(Icon)`
   color: ${theme.colors.black};
`;

export const SelectPortal = styled(Portal)``;

export const SelectContent = styled(Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const SelectScrollButtonContainer = styled(ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: ${theme.colors.black};
  cursor: default;
`;

export const SelectViewPort = styled(Viewport)`
   padding: 5px;
`;

export const SelectGroup = styled(Group)``;

export const SelectLabel = styled(Label)`
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
  color: ${theme.colors.black};
`;

export const SelectItem = styled(Item)`
  display: flex;
  font-size: 0.875rem;
  line-height: 1;
  color: ${theme.colors.black};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 2rem, 0 1.563rem;
  position: relative;
  user-select: none;
`;

export const TextItem = styled(ItemText)`
`;