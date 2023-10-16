import axios from 'axios';
import { useEffect, useState } from 'react';
import { GdeGatoProfile, ProfileContent, ProfileIdentityCompany } from './styles';
import { Buildings, MapPin, LinkedinLogo } from 'phosphor-react';

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
                console.log('profile', response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar projetos:', error);
            });
    }, []);

    return (
        <GdeGatoProfile>
            <div>
                <img src='https://media.licdn.com/dms/image/D4D03AQGWeVq4ctXqcQ/profile-displayphoto-shrink_800_800/0/1677353338307?e=1703116800&v=beta&t=r4ScVkYTrZNGDYzBrw1KyKk57sLDw88P4j_fA0qgoRI' />
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

                        <div>
                            <p className='location-profile'>
                                <MapPin size={20} color="#c98cf1" weight="fill" />
                                {profile.location}</p>
                        </div>
                        <div>
                            <a className='link-linkedin' href='https://www.linkedin.com/in/roselefernandes/' target='_blank'>
                                <p>
                                    <LinkedinLogo size={20} color="#3294F8" weight="fill" />
                                    LinkedIn</p></a>
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