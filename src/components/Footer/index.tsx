import Logo from "assets/img/main-logo.png";

import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-center-wrapper">
                <img src={Logo} alt="logo"/>
                <p className="diploma">Дипломный проект</p>
                <div className="author">
                    <p className="made-by">Made by</p>
                    <p className="author-name">Штырляев Игорь</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;