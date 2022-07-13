export interface IMovieDetail {
    genres: string[];
    id: string;
    image: {medium: string, original: string};
    name: string;
    network: {country: {name: string}};
    premiered: string;
    rating: {average: number};
    summary: string;
};