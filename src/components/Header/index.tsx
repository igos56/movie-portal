import { NavLink } from "react-router-dom";
import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeCategoriesPage } from "pages/CategoriesPage";
import { routeMain as routeAboutPage } from "pages/AboutPage";
import { routeMain as routeSearchPage } from "pages/SearchPage";
import Logo from "assets/img/main-logo.png";

import "./styles.scss";

const Header = () => {
    return (
        <header className="header-wrapper">
            <NavLink to={routeMainPage()}><img src={Logo} alt="logo"/></NavLink>
            <nav className="main-nav">
                <NavLink to={routeMainPage()} activeClassName={"link-active"}>Главная</NavLink>
                <NavLink to={routeCategoriesPage()} activeClassName={"link-active"}>Фильмы по категории</NavLink>
                <NavLink to={routeAboutPage()} activeClassName={"link-active"}>О нас</NavLink>
                <NavLink to={routeSearchPage()} activeClassName={"link-active"}>Поиск</NavLink>
            </nav>
        </header>
    );
};

export default Header;