import styled from 'styled-components'

export const GdeGatoProfile = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;

  height: 212px;
  width: auto;
  max-width: 1850px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: calc(0px - 1.5rem - 40px);
  
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};

  .profile-identity {
    display: flex;
    justify-content: space-between;
  }

  .profile-identity-name-bio {
    display: flex;
    flex-direction: column;
    h2 {
      margin-bottom: -20px;
    }
  }

  img {
    height: 148px;
    border-radius: 8px;
  } 
`

export const ProfileContent = styled.div`
  padding-left: 20px;

  .profile-description{
    margin-bottom: 20px;
  }
`

export const ProfileIdentityCompany = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    margin: 0;
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 1px;
  }

  .link-linkedin {
    color:${(props) => props.theme['base-text']};
  }

  .link-linkedin:hover{
        color:${(props) => props.theme['purple']};     
        cursor: pointer;
    }
  
`
