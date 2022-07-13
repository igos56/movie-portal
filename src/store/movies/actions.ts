import { Dispatch } from "redux";
import getMovies from "services/getMovies";
import { IStore } from "./types";
import { IMoviesList } from "types/IMoviesList";

export const setMoviesAction = (payload: IStore["movies"]) => {
    return {
        type: "movies/setMovies",
        payload: payload
    };
};

export const loadMovies = (genre: string) => async (dispatch: Dispatch) => {
    try {
        const {data} = await getMovies(genre);
        const movies = data.map((item: IMoviesList) => item.show);
        dispatch(setMoviesAction(movies));
    } catch (error) {
        console.log("Данные не загрузились! Ошибка!",);
    }
};