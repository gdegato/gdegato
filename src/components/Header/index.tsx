import { useEffect, useState } from 'react';
import axios from 'axios';
import { HeaderContainer, GdeGatoImage } from './styles';

type Profile = {
    avatar_url: string;
    location: string;
    name: string;
    company: string;
    bio: string
}

export function Header() {

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
        <HeaderContainer>
            <GdeGatoImage>
                <img src={profile.avatar_url} />
            </GdeGatoImage>
            <h2>G de Gato</h2>
        </HeaderContainer>
    )
}