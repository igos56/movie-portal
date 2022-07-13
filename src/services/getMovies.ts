import axios, {AxiosResponse} from "axios";

const getMovies = (genre = 'adult'): Promise<AxiosResponse> => {
    return axios.get(`https://api.tvmaze.com/search/shows?q=${genre}`);
};

export default getMovies;