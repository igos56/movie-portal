import MoviesList from "components/MoviesList";
import routeMain from "./routes";

import "./styles.scss";

const MainPage = () => {
    return (
        <div className="main-page-wrapper">
            <h1 className="main-page-title">MOVIESinfo</h1>
            <p className="info">Самый популярный портал о фильмах</p>
            <MoviesList
                genre="thriller"
            />
        </div>
    );
};

export {routeMain};
export default MainPage;