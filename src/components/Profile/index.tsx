import axios from 'axios';
import { useEffect, useState } from 'react';
import { GdeGatoProfile, ProfileContent, ProfileIdentityCompany } from './styles';
import { Buildings, MapPin, LinkedinLogo, SpotifyLogo, YoutubeLogo } from 'phosphor-react';
import rose from '../../assets/rose-3.jpg';

type Profile = {
    avatar_url: string;
    location: string;
    name: string;
    company: string;
    bio: string
}

export function Profile() {

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
                            <p>
                                <Buildings
                                    size={20}
                                    color="#7b78e5"
                                    weight="fill" />
                                {profile.company}</p>
                        </div>
                        <div className='location-profile'>
                            <p>
                                <MapPin size={20} color="#c98cf1" weight="fill" />
                                {profile.location}
                            </p>
                        </div>
                        <div>
                            <a className='link-linkedin' href='https://www.linkedin.com/in/roselefernandes/' target='_blank'>
                                <p>
                                    <LinkedinLogo size={20} color="#3294F8" weight="fill" />
                                    LinkedIn</p></a>
                        </div>
                        <div>
                            <a className='link-spotify' href='https://open.spotify.com/intl-pt/artist/1Uzxo4SNzx8XPiXH8dy3Nm?si=VJVF4xwtSSGLDzPoWJqSgw' target='_blank'>
                                <p>
                                    <SpotifyLogo size={20} color="#1db954" weight="fill" />
                                    Spotify</p></a>
                        </div>
                        <div>
                            <a className='link-yt' href='https://www.youtube.com/@rosefernandes' target='_blank'>
                                <p>
                                    <YoutubeLogo size={20} color="#c4302b" weight="fill" />
                                    YouTube</p></a>
                        </div>
                    </ProfileIdentityCompany>
                </div>
                <div className='profile-description'>
                    <p>Apaixonada por tecnologia, gatos e música. Minha motivação principal é dar vida a ideias através de tecnologias como React.Js, Typescript, Javascript (e outras), aprimorando a experiência do usuário por meio de interfaces gráficas. Dedico-me a criar soluções visualmente atraentes e funcionais, com o objetivo de simplificar e cativar a interação dos usuários com a tecnologia.</p>
                </div>
            </ProfileContent>
        </GdeGatoProfile>

    )
}