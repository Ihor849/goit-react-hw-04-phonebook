import styled from 'styled-components';
import { font } from 'style/mixins';

export const BoxFilter = styled.div`
  display: grid;
  justify-items: center;
  gap: ${props => props.theme.spacing(3)};
  width: 100%;
`;
export const Label = styled.label`
  ${font({ fs: 20, fw: 500, lh: 20 })};
  margin: 0 auto;
`;
export const Input = styled.input`
  border: transparent;
  outline: 0;
  width: 96%;
  height: ${props => props.theme.spacing(15)};
  border-radius: ${props => props.theme.spacing(3)};
  padding: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.colors.buttonBg};
  ${font({ fs: 16, fw: 500, lh: 20 })};
  box-shadow: inset 2px 2px 5px ${props => props.theme.colors.colorShadow},
    inset -5px -5px 10px ${props => props.theme.colors.white};
  transition: all 0.2s ease-in-out;
  appearance: none;
  &:focus {
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.colorShadow},
      inset -1px -1px 2px ${props => props.theme.colors.white};
  }
`;
