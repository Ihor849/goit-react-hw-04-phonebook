import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  max-height: 50px;
  gap: ${props => props.theme.spacing(3)};
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.spacing(2)};
  padding: 5px 15px;
`;

export const Button = styled.button`
  border: 1px solid ${props => props.theme.colors.black};
  padding: ${props => props.theme.spacing(3)};
  border-radius: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.colorBg};
  &:hover {
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 2px 5px ${props => props.theme.colors.colorShadow};
  }
  &:active {
    background-color: ${props => props.theme.colors.grey};
    fill: ${props => props.theme.colors.white};
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.colorShadow};
  }
`;
