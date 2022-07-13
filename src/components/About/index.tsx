import aboutImg from "assets/img/about.jpg";

import "./styles.scss";

const About = () => {
    return (
        <div className="about-wrapper">
            <img src={aboutImg} alt="about us"/>
            <div className="info-wrapper">
                <h1 className="info-title">MOVIESinfo</h1>
                <div className="info-content">
                    <p>
                        Вас приветствует лучший портал о фильмах на всем медиа - пространстве!
                        Уникальность нашего сервиса позволяет вам искать фильмы по любым ключевым словам.
                        Это не обязательно должен быть жанр или название фильма, пишите все, что угодно в поиске
                        и получайте подборку из 10 лучших представителей.
                    </p>
                    <hr/>
                    <p>
                        При разработке нашего портала были использованы самые передовые технологии web - разработки,
                        такие как: <span>React, Redux, TypeScript.</span> Данные технологии позволяют нашему порталу использовать все
                        преимущества single page application <span>(SPA).</span> Это высокая скорость загрузки без необходимости подгружать
                        дополнительные файлы с сервера.
                    </p>
                    <hr/>
                    <p>
                        Надеемся, что пребывание на нашем портале будет комфортным и увлекательным!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;