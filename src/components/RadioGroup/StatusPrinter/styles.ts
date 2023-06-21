import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'
import { theme } from '../../../styles/theme';

export const Form = styled.form``;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Root = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Item = styled(RadioGroup.Item)`
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  box-shadow: 0 2px 10px ${theme.colors.black};
  :focus{
    box-shadow: 0 0 0 2px ${theme.colors.black};
  }
`;

export const Indicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  ::after{
    content: '';
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${theme.colors.blue.light};
  }
`;

export const Label = styled.label`
  color: white;
  font-size: 15px;
  line-height: 1;
  padding-left: 15px;
`;



