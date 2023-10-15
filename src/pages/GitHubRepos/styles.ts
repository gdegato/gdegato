import styled from 'styled-components'

export const GitHubProjectsNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1850px;
  margin-right: 40px;

  p{
    color: ${(props) => props.theme['base-span']};
  }
`
export const TitleGitHubProjects = styled.h2`
  margin-left: 40px;
  padding-top: 10px;
`
export const SearchFormContainer = styled.form`
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-span']};
    padding: 1rem;
    margin-bottom: 1rem;
    max-width: 1850px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }  
`
export const CardsContainer = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 416px);
  grid-gap: 2rem;
`
export const Card = styled.div`
  background: ${(props) => props.theme['base-post']};
  list-style: none;
  padding: 20px;
  border-radius: 20px;
  min-height: 260px;
  width: 416px;
  margin-right: 1rem;
  margin-bottom: 1.35rem;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.025);
    transition: 0.18s;
  }
`
export const GitHubTitle = styled.h3`
  text-transform: lowercase;
  padding-bottom: 8px;
  color: ${(props) => props.theme['base-title']};
`
export const GitHubLink = styled.p`
  display: flex;
  gap: 0.5rem;
  font-family: 8px;
  padding-bottom: 8px;
`


