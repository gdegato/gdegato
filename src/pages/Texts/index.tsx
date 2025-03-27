import { useEffect, useState } from 'react';
import {
    TitleGitHubProjects,
    CardsContainer,
    Card,
    GitHubLink,
    PdfTitle,
    CardSpan,
    GitHubProjectsNumber
} from '../GitHubRepos/styles';

import { pdfFiles } from './docs.json';
import { Profile } from '../../components/Profile';
import { FilePdf } from 'phosphor-react';

type Docs = {
    name: string,
    author: string,
    link: string,
    resume: string
    id: number
}

function PdfFiles() {
    const [docs, setDocs] = useState<Docs[]>([]);

    useEffect(() => {
        setDocs(pdfFiles);
    }, []);

    return (
        <>
            <Profile />
            <GitHubProjectsNumber>
                <TitleGitHubProjects>Documentos</TitleGitHubProjects>
            </GitHubProjectsNumber>
            <CardsContainer>
                {docs.map((doc) => (
                    <Card key={doc.id}>
                        <div style={{ flex: 1 }}>
                            <PdfTitle>{doc.name}</PdfTitle>
                            <GitHubLink><strong>Resumo:</strong> {doc.resume}</GitHubLink>
                        </div>
                        <div>
                            <CardSpan>
                                <FilePdf size={22} />
                                <a href={doc.link} target="_blank" rel="noopener noreferrer">
                                    Download
                                </a>
                            </CardSpan>
                        </div>
                    </Card>
                ))}
            </CardsContainer>

        </>
    );
}

export default PdfFiles;
