import React from "react";
import prepareGenres from "utils/prepareGenres";
import prepareYearCountry from "utils/prepareYearCountry";
import star from "assets/img/star.png";
import prepareRating from "utils/prepareRating";
import { IMovieDetail } from "types/IMovieDetail";

interface IMovieDetailParams {
    movie: IMovieDetail;
};

const MovieDetail: React.FC<IMovieDetailParams> = ({movie}) => {
    return (
        <div className="movie-detail-wrapper">
            <img src={movie.image ? movie.image.original : "http://dummyimage.com/229x339"} alt={movie.name}/>
            <div className="info-wrapper">
                <div className="name-rating-wrapper">
                    <h3 className="name">{movie.name}</h3>
                    <div className="rating-wrapper">
                        <img className="star" src={star} alt={movie.name}/>
                        <div className="rating">{prepareRating(movie.rating)}</div>
                    </div>
                </div>
                <div className="deep-info">
                    <div className="info-tags">
                        <p>Год выхода:</p>
                        <p>Страна:</p>
                        <p>Жанр:</p>
                        <p>Описание:</p>
                    </div>
                    <div className="info-definitions">
                        <div>{prepareYearCountry(movie.premiered)}</div>
                        <div>{movie.network ? movie.network.country.name : 'no info'}</div>
                        <div>{movie.genres.length > 0 ? prepareGenres(movie.genres) : "Different"}</div>
                        <div className="summary" dangerouslySetInnerHTML={{__html: movie.summary}}/>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default MovieDetail;