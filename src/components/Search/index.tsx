import React from "react";
import { useState} from "react";
import MoviesListCategory from "components/MoviesListCategory";

import "./styles.scss";

const Search = () => {
    const [inputData, setInputData] = useState<string>('');
    const [genre, setGenre] = useState<string>('');

    const getInputGenre = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(event.target.value);
    }

    const searchMovies = () => {
        setGenre(inputData);
    };

    return (
        <div className="search-wrapper">
            <h1 className="search-title">Поиск по категории</h1>
            <input type="text" onChange={(event) => getInputGenre(event)} placeholder="Example: drama"/>
            <button onClick={searchMovies}>Найти</button>
            <h2>Результаты поиска:</h2>
            <div className="results-wrapper">
                {
                    genre ? <MoviesListCategory genre={genre}/> : <div className="defaut-search">Введите поисковой запрос для отображения результатов</div>
                }
                
            </div>
        </div>
    );
};

export default Search;