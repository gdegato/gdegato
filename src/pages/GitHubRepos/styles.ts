import styled from 'styled-components'

export const GitHubProjectsNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;

  p {
    color: ${(props) => props.theme['base-span']};
  }

  @media (min-width: 576px) {
    margin: 0 30px;
  }

  @media (min-width: 768px) {
    margin: 0 60px;
  }
`

export const TitleGitHubProjects = styled.h2`
  padding-top: 10px;  
`

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin: 0 20px 20px 20px;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-span']};
    padding: 1rem;
    
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    } 

    @media (min-width: 768px) {
      margin: 0 40px 30px 40px;
      
    }
  }
`
export const CardsContainer = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 416px);
  grid-gap: 2rem;
  margin: 0 20px;

 @media (min-width: 576px) {
  margin: 0 40px;
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between; 
  background: ${(props) => props.theme['base-post']};
  list-style: none;
  padding: 20px;
  border-radius: 20px;
  min-height: 260px;
  margin: 0 auto;
  width: 316px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    transform: scale(1.025);
    transition: 0.18s;
  }

  @media (min-width: 576px) {
    width: 416px;
  }
`;
export const GitHubTitle = styled.h3`
  text-transform: lowercase;
  padding-bottom: 8px;
  color: ${(props) => props.theme['base-title']};
`
export const PdfTitle = styled.h3`
  text-transform: none;
  padding-bottom: 8px;
  color: ${(props) => props.theme['base-title']};
`
export const GitHubLink = styled.p`
  display: flex;
  gap: 0.5rem;
  font-family: 8px;
  padding-bottom: 8px;
`
export const BetweenContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
`
export const BetweenCats = styled.div`
  display: flex;
  align-items: center; 
  gap: 20px; 

  img {
    width: 400px; 
    object-fit: contain; 
  }

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
  }
`;
export const BetweenContentCats = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;  
  align-items: center;
`
export const CardSpan = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
