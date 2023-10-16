/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardsContainer, Card, GitHubLink, GitHubTitle, TitleGitHubProjects, SearchFormContainer, GitHubProjectsNumber } from './styles';
import { GithubLogo, Globe } from 'phosphor-react';

type Repos = {
    description: string;
    homepage: string;
    visibility: string
    svn_url: string;
    name: string;
    full_name: string;
    id: number;
    owner: {
        avatar_url: string
    }
}

export type FilterData = {
    textProject?: string | undefined;
}

function GitHubRepos() {

    const [projectData, setProjectData] = useState<Repos[]>([]);
    useEffect(() => {
        axios.get('https://api.github.com/users/gdegato/repos', {})
            .then(response => {
                const projects = response.data;
                setProjectData(projects);                
            })
            .catch(error => {
                console.error('Erro ao buscar projetos:', error);
            });
    }, []);

    const [formData, setFormData] = useState<FilterData>({
        textProject: ''
    })

    const [filteredProjects, setFilteredProjects] = useState<Repos[]>([]);

    useEffect(() => {
        if (formData.textProject) {
            const filtered = projectData.filter((project) =>
                project.name.toLowerCase().includes(formData.textProject?.toLowerCase() || '')
            );
            setFilteredProjects(filtered);
        } else {
            setFilteredProjects(projectData);
        }
    }, [formData.textProject, projectData]);


    function handleChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div >
            <GitHubProjectsNumber>
                <TitleGitHubProjects>Meus projetos no GitHub</TitleGitHubProjects>
                <p>{filteredProjects.length} projetos</p>
            </GitHubProjectsNumber>
            <SearchFormContainer>
                <input
                    name='textProject'
                    value={formData.textProject || ''}
                    type="text"
                    placeholder='Buscar projetos'
                    className="search-input"
                    onChange={handleChange}
                />
            </SearchFormContainer>
            <CardsContainer>
                {filteredProjects.map((project) => (
                    <Card>
                        <li key={project.id}>
                            {project.visibility === 'public' && (
                                <>
                                    <GitHubTitle>
                                        {project.name}
                                    </GitHubTitle>
                                    <GitHubLink>
                                        <Globe size={20}
                                            color="#7b78e5" /> <a href={project.homepage} target='_blank'>{project.full_name}</a>
                                    </GitHubLink>
                                    <GitHubLink>
                                        <GithubLogo size={20} weight="fill" color="#c98cf1" />
                                        <a href={project.svn_url} target='_blank'>
                                            {project.svn_url}</a>
                                    </GitHubLink>
                                    <p>{project.description}</p>
                                </>
                            )}
                        </li>
                    </Card>
                ))}
            </CardsContainer>
        </div >
    );
}
export default GitHubRepos;
