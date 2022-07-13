import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "store/movies/selectors";
import { loadMovies } from "store/movies/actions";
import MovieItemCategory from "components/MovieItemCategory";
import { TypedDispatch } from "store";
import { IMovieDetail } from "types/IMovieDetail";

import "./styles.scss";

interface IMoviesListCategoryParams {
    genre: string;
};

const MoviesListCategory: React.FC<IMoviesListCategoryParams> = ({genre}) => {
    const dispatch = useDispatch<TypedDispatch>();
    const movies = useSelector(selectMovies);

    useEffect(() => {
        dispatch(loadMovies(genre));
    }, [dispatch, genre]);

    return (
        <div className="list-category">
            <h1 className="title">Выбранная категория: <span>{genre}</span></h1>
            <div className="category-list-wrapper">
                {movies.length > 0 ? (
                    movies.map((movie: IMovieDetail, index: number) => (
                        <MovieItemCategory
                            key={index}
                            show={movie}
                        />
                    ))
                ) : <div>Данные не загрузились</div>}
            </div>
        </div>
    );
};

export default MoviesListCategory;