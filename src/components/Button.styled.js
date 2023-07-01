import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 2px 6px;
  font-family: inherit;
  font-style: normal;
  color: inherit;
  border: 1px solid #8080808a;

  border-radius: 4px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export default StyledButton;
