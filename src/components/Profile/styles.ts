import styled from 'styled-components'

export const GdeGatoProfile = styled.div`
  display: flex;
  padding: 20px;
  height: auto;
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  margin-top: calc(0px - 1.5rem - 40px); 
  box-shadow: rgba(58, 83, 107, 1) -20px 25px 50px -50px;
  
  img {
    height: 88px;
    border-radius: 50%;
  }

  .profile-identity-name-bio {
    display: flex;
    flex-direction: column;
    h2 {
      margin-bottom: -20px;
      margin-top: 0;
    }
  }

  .location-profile {
    display: none;
  }

  .profile-description {
    margin-left: -100px;
  }

  @media (min-width: 576px) {
    .location-profile {
      display: unset;
    }
  }
  
  @media (min-width: 768px) {
    padding: 40px;
    align-items: center;
    height: auto;
    width: auto;
    margin-left: 60px;
    margin-right: 60px;
    border-radius: 10px;

    img {
      height: 148px;
      border-radius: 8px;
    }

    .profile-description {
      margin-left: 0;
    }

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
  }
`

export const ProfileContent = styled.div`
  padding-left: 20px;

  .profile-description {
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
    color: ${(props) => props.theme['base-text']};
  }

  .link-linkedin:hover {
    color: ${(props) => props.theme['purple']};
    cursor: pointer;
  }
`
