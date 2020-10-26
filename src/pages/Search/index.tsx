import Button from "core/components/Button";
import ResultSearch from "pages/ResultSearch";
import React, { useState } from "react";
import './styles.scss';


const Search = () => {

    const [userName, setUserName] = useState("");
    const [showForm, setShowForm] = useState(false);

    const handleOnChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setUserName(name);
        setShowForm(false);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setShowForm(true);
    }

    return (

        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <h1 className="title-field">Encontre um perfil Github</h1>
                    <input
                        name="user"
                        type="text"
                        className="input-text"
                        placeholder="Usuário Github"
                        onChange={handleOnChanged}
                    />
                </div>
                <div className="btn-container">
                        <Button text="Encontrar" />
                </div>
            </form>

            {showForm && (
                <ResultSearch userName={userName} />
            )}
        </div >

    );
}
export default Search;