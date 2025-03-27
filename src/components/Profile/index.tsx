import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GdeGatoProfile, ProfileContent, ProfileIdentityCompany } from './styles';
import { GithubLogo, LinkedinLogo, SpotifyLogo, YoutubeLogo, Student, BookOpen, Cat, } from 'phosphor-react';
import rose from '../../assets/rose-3.jpg';


type Profile = {
    avatar_url: string;
    location: string;
    name: string;
    company: string;
    bio: string
}

export function Profile() {
    const location = useLocation();
    const linkTo = location.pathname === "/docs" ? "/" : "/docs";
    const linkText = location.pathname === "/docs" ? "Repositórios" : "Textos Técnicos";
    const IconComponent = location.pathname === "/docs" ? GithubLogo : BookOpen;

    const profileDescription = "Desenvolvedora de Aplicações na IBM, atuando com React.js, JavaScript, Material UI e outras tecnologias para criar interfaces intuitivas e funcionais. Além do desenvolvimento frontend, colaboro na elicitação e priorização de atividades, alinhando demandas aos objetivos do negócio para garantir entregas de valor.</br></br> Apaixonada por tecnologia, gatos e música, acredito que boas soluções surgem da combinação entre técnica, criatividade e compreensão das necessidades dos usuários."

    const documentationDescription = "Ao longo da minha trajetória acadêmica e profissional, elaborei diversos materiais técnicos e acadêmicos sobre temas variados, como gestão de riscos, sustentabilidade, direito trabalhista e políticas públicas, demonstrando domínio na pesquisa, análise e produção de conteúdos textuais.";

    const description = location.pathname === "/docs" ? documentationDescription : profileDescription;

    const [profile, setProfile] = useState<Profile>({
        avatar_url: '',
        location: '',
        name: '',
        company: '',
        bio: ''
    })

    useEffect(() => {
        axios.get('https://api.github.com/users/gdegato', {
        })
            .then(response => {
                const userProfile = response.data;
                setProfile(userProfile);
            })
            .catch(error => {
                console.error('Erro ao buscar projetos:', error);
            });
    }, []);

    return (
        <GdeGatoProfile>
            <div>
                <img src={rose} />
            </div>
            <ProfileContent>
                <div className='profile-identity'>
                    <div className='profile-identity-name-bio'>
                        <h2>{profile.name}</h2>
                        <p>{profile.bio}</p>
                    </div>
                    <ProfileIdentityCompany >
                        <div>
                            <Link to={linkTo}>
                                <div className="link-container">
                                    <IconComponent size={20} color="#7b78e5" weight="fill" />
                                    <span>{linkText}</span>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to={'/gdegato'}>
                                <div className="link-container">
                                    <Cat size={20} color="#c98cf1" weight="fill" />
                                    <span>G de Gato</span>
                                </div>
                            </Link>
                        </div>
                        <div className='location-profile'>
                            <a className='link-linkedin' href='https://www.credly.com/users/rosele-fernandes' target='_blank'>
                                <p>
                                    <Student size={20} color="#FA8072" weight="fill" />
                                    Certificados</p>
                            </a>
                        </div>
                        <div className='location-profile'>
                            <a className='link-linkedin' href='https://www.linkedin.com/in/roselefernandes/' target='_blank'>
                                <p>
                                    <LinkedinLogo size={20} color="#3294F8" weight="fill" />
                                    LinkedIn</p></a>
                        </div>
                        <div className='location-profile'>
                            <a className='link-linkedin' href='https://open.spotify.com/intl-pt/artist/1Uzxo4SNzx8XPiXH8dy3Nm?si=VJVF4xwtSSGLDzPoWJqSgw' target='_blank'>
                                <p>
                                    <SpotifyLogo size={20} color="#1db954" weight="fill" />
                                    Spotify</p></a>
                        </div>
                        <div className='location-profile'>
                            <a className='link-linkedin' href='https://www.youtube.com/@rosefernandes' target='_blank'>
                                <p>
                                    <YoutubeLogo size={20} color="#c4302b" weight="fill" />
                                    YouTube</p></a>
                        </div>

                    </ProfileIdentityCompany>
                </div>
                <div className='profile-description'>
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
            </ProfileContent>
        </GdeGatoProfile>

    )
}