import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  gap: 5px;
  align-items: center;

  background: ${(props) => props.theme['base-profile']};
  height: 80px;
  margin-top: 80px;
`
