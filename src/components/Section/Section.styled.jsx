import styled from 'styled-components';

export const BoxSection = styled.section`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(10)};
`;
export const BoxTitle = styled.h2`
  width: 30%;
  font-size: ${props => props.theme.fontSize(11)};
  text-align: center;
  color: ${props => props.theme.colors.grey};
  border-radius: ${props => props.theme.spacing(5)};
  padding: 8px 150px;
  border: 4px solid ${props => props.theme.colors.grey};
  box-shadow: 10px 22px 24px -6px rgba(0, 0, 0, 0.29);
`;
