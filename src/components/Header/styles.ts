import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 300px;
  background-image: url('cover.svg');
  background-size: cover;
  background-position: center;

  h2 {
    text-align: center;
    margin-top: 10px;
    color: ${(props) => props.theme['white']};
  }
`

export const GdeGatoImage = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 150px;
    width: auto;
    margin-top: 20px;
  }
`

