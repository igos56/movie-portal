import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies } from "store/movies/selectors";
import { loadMovies } from "store/movies/actions";
import MovieItem from "components/MovieItem";
import { TypedDispatch } from "store";
import { IMovieDetail } from "types/IMovieDetail";

import "./styles.scss";


interface IMoviesListParams {
    genre: string;
};

const MoviesList: React.FC<IMoviesListParams> = ({genre}) => {
    const dispatch = useDispatch<TypedDispatch>();
    const movies = useSelector(selectMovies);

    useEffect(() => {
        dispatch(loadMovies(genre));
    }, [dispatch, genre]);

    return (
        <div className="movies-list">
            {movies.length > 0 ? (
                movies.slice(0, 8).map((movie: IMovieDetail, index: number) => (
                    <MovieItem
                        key={index}
                        show={movie}
                    />
                ))
            ) : <div>Данные не загрузились</div>}
        </div>
    );
};

export default MoviesList;