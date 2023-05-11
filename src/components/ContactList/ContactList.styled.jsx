import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  max-height: 250px;
  overflow-y: scroll;
  width: 93%;
  display: grid;
  gap: ${props => props.theme.spacing(3)};
  padding: ${props => props.theme.spacing(10)};
  border-radius: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.colors.greyBg};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.32);
`;
