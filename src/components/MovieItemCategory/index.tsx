import React from "react";
import { NavLink } from "react-router-dom";
import { routeMain as routeMovieDetail } from "pages/MovieDetailPage";
import prepareGenres from "utils/prepareGenres";
import { IMovieDetail } from "types/IMovieDetail";

import "./styles.scss";

interface IMovieItemCategoryParams {
    show: IMovieDetail;
};

const MovieItemCategory: React.FC<IMovieItemCategoryParams> = ({show}) => {
    return (
        <NavLink className="item-category-wrapper" to={routeMovieDetail(show.id)}>
            <img src={show.image ? show.image.medium : "http://dummyimage.com/185x229"} alt={show.name}/>
            <div className="info-wrapper">
                <h3 className="item-title">{show.name}</h3>
                <p className="genre">{show.genres.length > 0 ? prepareGenres(show.genres) : "Different"}</p>
            </div>
        </NavLink>
    );
};

export default MovieItemCategory;