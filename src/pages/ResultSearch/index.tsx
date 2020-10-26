import React, { useEffect, useState } from 'react';
import axios from "axios";
import ImageLoader from 'core/components/ImageLoader/ImageLoader';
import InfoLoader from 'core/components/InfoLoader/InfoLoader';
import { UserReponse } from 'core/types/User';
import daysjs from 'dayjs';
import './styles.scss';
import Button from 'core/components/Button';

type Props = {
    userName: string,
}

const ResultSearch = ({ userName }: Props) => {
    const [user, setUserResponse] = useState<UserReponse>();
    const [isLoading, setIsloading] = useState(true);
    const creatAt = daysjs(user?.created_at).locale("pt-br").format('DD-MM-YYYY')

    const makeRequest = (name: string) => {
        axios.get(`https://api.github.com/users/${name}`)
            .then(response => setUserResponse(response.data))
            .catch(err => { alert(`Não foi possivel buscar usuario \n${err}`) })
            .finally(() => setIsloading(user ? false : true))
    }
    useEffect(() => {
        makeRequest(userName)
    }, [userName,user]);

    return (
        <div className="row">
            <div className="card-1">
                {
                    isLoading ? <ImageLoader /> : (
                        <div>
                            <img src={user?.avatar_url} alt={user?.name} className="card-img" />
                            <div className="btn-card">
                                <a href={user?.html_url}>
                                    <Button text="Ver Perfil" />
                                </a>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="card-2">
                {
                    isLoading ? <InfoLoader /> : (
                        <div>
                            <div className="container-lbls">
                                <h6 className="lbl">
                                    Respositorios públicos: {user?.public_repos}
                                </h6>
                                <h6 className="lbl">
                                    Seguidores: {user?.followers}
                                </h6>

                                <h6 className="lbl">
                                    Seguindo: {user?.following}
                                </h6>
                            </div>

                            <div className="card-user-infomation">
                                <h1 className="text-info">Informações</h1>

                                <div className="info-user">
                                    <h1 className="lbl">
                                        Empresa: {user?.company}
                                    </h1>
                                    <h1 className="lbl">
                                        Website/Blog:{user?.blog}
                                    </h1>

                                    <h1 className="lbl">
                                        Localidade: {user?.location}
                                    </h1>

                                    <h1 className="lbl">
                                        Membro desde: {creatAt}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div >
        </div >
    );
}

export default ResultSearch;