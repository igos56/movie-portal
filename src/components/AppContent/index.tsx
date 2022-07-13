import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";
import MainPage, {routeMain as routeMainPage} from "pages/MainPage";
import CategoriesPage, {routeMain as routeCategoriesPage} from "pages/CategoriesPage";
import AboutPage, {routeMain as routeAboutPage} from "pages/AboutPage";
import SearchPage, {routeMain as routeSearchPage} from "pages/SearchPage";
import MovieDetailPage, {routeMain as routeMovieDetailPage} from "pages/MovieDetailPage";

import "./styles.scss";

const AppContent = () => {
    return (
        <div className="app-content-wrapper">
            <Header />
            <main>
                <Switch>
                    <Route exact path={routeMainPage()} component={MainPage}/>
                    <Route exact path={routeCategoriesPage()} component={CategoriesPage}/>
                    <Route exact path={routeAboutPage()} component={AboutPage}/>
                    <Route exact path={routeSearchPage()} component={SearchPage}/>
                    <Route exact path={routeMovieDetailPage()} component={MovieDetailPage}/>
                    <Redirect to={{pathname: routeMainPage()}}/>
                </Switch>
            </main>
            <Footer />
        </div>
    );
};

export default AppContent;