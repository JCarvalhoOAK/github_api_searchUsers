import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';
import {GitUser} from "types/gitUser";

type FormData = {
    searchGitName: string;
}


const GitSearch = () => {

    const [formData, setFormData] = useState<FormData>({
        searchGitName: ''
    });

    const [gitUserInfo, setGitUserInfo] = useState<GitUser>();



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value })

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${formData.searchGitName}`)
            .then((response) => {
                setGitUserInfo(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <div className="cep-search-container">
            <h1 className="text-primary">Encontre qualquer usuário do Github!</h1>
            <h3 className='center'>Procure pelo nome de usuário: </h3>
            <div className="container search-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <input
                            type="text"
                            name="searchGitName"
                            value={formData.searchGitName}
                            className="search-input"
                            placeholder="UserName (Ex. JCarvalhoOAK)"
                            onChange={handleChange}
                        />
                        <button type="submit" className="btn btn-primary search-button">
                            Encontrar
                        </button>
                    </div>
                </form>
                {gitUserInfo &&
                    <>
                        <div className="product-details-container">
                            <div className="base-card product-details-card">

                                <div className="row">
                                    <div className="col-xl-6">

                                        <div className="img-container">
                                            <img className="img-circle" src={gitUserInfo.avatar_url} alt={gitUserInfo.name} />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="description-container">
                                            <ResultCard title="Nome" description={gitUserInfo.name} />
                                            <ResultCard title="Perfil" description={gitUserInfo.url} />
                                            <ResultCard title="ID" description={gitUserInfo.id} />
                                            <ResultCard title="Seguidores" description={gitUserInfo.followers} />
                                            <ResultCard title="Localização" description={gitUserInfo.location} />
                                            <ResultCard title="Repositórios Públicos" description={gitUserInfo.public_repos} />
                                            <ResultCard title="Biografia" description={gitUserInfo.bio} />
                                            <p><a className="btn btn-default-one" href={gitUserInfo.html_url}  target= "blanck" role="button">Ver Detalhes</a></p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                }

            </div>
        </div>
    );
};

export default GitSearch;
