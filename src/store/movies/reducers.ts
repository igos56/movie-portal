import { AnyAction } from "redux";

const initialState = {
    movies: []
};

const moviesReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case "movies/setMovies":
            return {...state, movies: [...action.payload]};
        default:
            return state;
    }
};

export default moviesReducer;