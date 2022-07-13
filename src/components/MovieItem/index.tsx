import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as routeMovieDetail } from "pages/MovieDetailPage";
import prepareGenres from "utils/prepareGenres";
import prepareYearCountry from "utils/prepareYearCountry";
import { IMovieDetail } from "types/IMovieDetail";

import "./styles.scss";

interface IMovieItemParams {
    show: IMovieDetail;
};

const MovieItem: React.FC<IMovieItemParams> = ({show}) => {
    return (
        <NavLink className="item-wrapper" to={routeMovieDetail(show.id)}>
            <img src={show.image ? show.image.medium : "http://dummyimage.com/180x260"} alt={show.name}/>
            <h3 className="item-title">{show.name}</h3>
            <p className="year-country">{prepareYearCountry(show.premiered, show.network)}</p>
            <p className="genre">{prepareGenres(show.genres)}</p>
        </NavLink>
    );
};

export default MovieItem;