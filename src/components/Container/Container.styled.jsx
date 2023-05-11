import styled from 'styled-components';

export const ContainerBox = styled.div`
  width: 600px;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: ${props => props.theme.spacing(15)};
  background: #00c9ff;
  background: -webkit-linear-gradient(to left, #92fe9d, #00c9ff);
  background: linear-gradient(to left, #92fe9d, #00c9ff);
  padding: ${props => props.theme.spacing(8)};
  margin: 0 auto;
`;
