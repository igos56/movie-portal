import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMovieDetail from "services/getMovieDetail";
import routeMain from "./routes";
import MovieDetail from "components/MovieDetail";
import { ID } from "types/ID";
import { IMovieDetail } from "types/IMovieDetail";

import './styles.scss';

const MovieDetailPage = () => {
    const {id} = useParams<ID>();
    const [movie, setMovie] = useState<IMovieDetail | null>(null);

    useEffect(() => {
        getMovieDetail(id)
            .then(response => {
                setMovie(response.data)
            }) 
    }, [id]);
    
    return movie ? (
       <MovieDetail movie={movie}/>  
    ) : <></>;
};

export {routeMain};
export default MovieDetailPage;