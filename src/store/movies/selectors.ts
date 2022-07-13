import { IStore } from "./types";

export const selectMovies = (state: {moviesReducer: IStore}): IStore["movies"] => state.moviesReducer.movies;