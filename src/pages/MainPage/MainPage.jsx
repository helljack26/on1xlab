import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Store
import { observer } from "mobx-react-lite";
import { useSidePanelStore } from "src/store/sidePanelStore"; // Import the side panel store

// Components
import ClientPageWrapper from "src/components/ClientPageWrapper/ClientPageWrapper";
import ServicesSection from "src/components/ServicesSection/ServicesSection";
import ContactSection from "src/components/ContactSection/ContactSection";
// Hooks
import useDelayedScriptLoader from "src/hooks/useDelayedScriptLoader";
// Variables
import SIDE_PANELS from "src/assets/sidePanelName";
import IMAGES from "src/assets/images";

// Style
import { MainPageStyle } from "./MainPageStyle";
// const {} = MainPageStyle;

import "src/assets/css/index.css";

const MainPage = observer(() => {
    // Define the list of script URLs and the delay interval
    const scriptList = [
        { src: "assets/js/libs/ScrollToPlugin.min.js", isModule: false },
        { src: "assets/js/libs/ScrollTrigger.min.js", isModule: false },
        { src: "assets/js/scroll.js", isModule: false },
        { src: "assets/js/formValidation.js", isModule: false },
        { src: "assets/js/scripts.js", isModule: true },
        { src: "assets/js/index.js", isModule: false },
    ];

    return (
        <>
            <ClientPageWrapper scriptList={scriptList}>
                {/* Main  */}
                <main id="container">
                    {/* Интро  */}
                    <section id="intro" className="section intro">
                        <div className="intro_block">
                            {/* Content  */}
                            <div className="intro_block_left">
                                <h1 id="onix">ONIXLAB</h1>
                                <p>
                                    Розробка веб-сайтів та додатків
                                    <nobr> під ключ / IT-послуги</nobr>
                                </p>
                                <div className="intro_block_left_button">
                                    <button
                                        data-hash="contact"
                                        type="button"
                                        id="scroll_to_Contact"
                                    >
                                        НАПИСАТИ НАМ
                                    </button>
                                </div>
                            </div>

                            {/* Geometry  */}
                            <div className="intro_block_geometry">
                                <img
                                    src={IMAGES.GeometryBackground}
                                    className="intro_block_geometry_image"
                                    alt="Masked"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Проекти  */}
                    <section id="portfolio" className="section portfolio">
                        <div className="portfolio_block">
                            <div className="portfolio_block_text">
                                <div className="portfolio_block_text_image"></div>
                            </div>

                            <div className="portfolio_block_link">
                                <a href="projects">Переглянути всi</a>
                            </div>
                        </div>
                    </section>

                    {/* Переваги  */}
                    <section id="advantages" className="section advantages">
                        <h2>ПЕРЕВАГИ РОБОТИ З ONIXLAB</h2>

                        <div className="advantages_grid">
                            <div className="advantages_block_item">
                                <h3>
                                    <span>01</span>
                                    ВИЗНАЧЕННЯ ТА ПЕРЕЛІК ОБСЛУГОВУВАНИХ
                                    СЕГМЕНТІВ
                                </h3>
                                <p>
                                    Вигідною перевагою співпраці з Onixlab є
                                    можливість визначити перелік обслуговуваних
                                    сегментів або сервісів. Згідно з договором
                                    можна передати нашим фахівцям у сфері
                                    IT-підтримки функції від технічного
                                    обслуговування мереж до заправки картриджів
                                    і ремонту техніки. Разом з тим, великі
                                    підприємства надають перевагу розділу
                                    функцій IT​-підтримки між різними
                                    компаніями​-аутсорсерами. Моніторинг і
                                    супровід специфічного програмного
                                    забезпечення краще доручити розробнику,
                                    більш компетентному в особливостях свого
                                    продукту.
                                </p>
                            </div>
                            <div className="advantages_block_item">
                                <h3>
                                    <span>02</span>
                                    БЕЗПЕРЕРВНА РОБОТА КВАЛІФІКОВАНОГО ШТАТУ
                                    ФАХІВЦІВ.
                                </h3>
                                <p>
                                    Onixlab забезпечує безперебійну роботу
                                    цілого штату фахівців. Тобто, незалежно від
                                    часу, доби, календарних свят або погодних
                                    умов замовнику гарантується надання послуг
                                    кваліфікованого фахівця для вирішення
                                    виниклих проблем. Усуненням проблеми буде
                                    займатися фахівець вже знайомий з усіма
                                    особливостями роботи системи, що істотно
                                    скорочує час, витрачений на виправлення
                                    неполадок і помилок. До того ж згідно з
                                    договором, Onixlab постійно діагностує
                                    роботу IT-інфраструктури компанії з якою
                                    співпрацює.
                                </p>
                            </div>
                            <div className="advantages_block_item">
                                <h3>
                                    <span>03</span>
                                    ЗАОЩАДЖЕННЯ БЮДЖЕТУ
                                </h3>
                                <p>
                                    Onixlab зобов'язується надавати компетентних
                                    фахівців незалежно від зовнішніх обставин,
                                    тоді як штатний працівник може бути
                                    відсутнім через відпустку або хворобу. До
                                    того ж Вам непотрібно витрачати час та кошти
                                    на навчання фахівця. Комп'ютерні технології
                                    не стоять на місці та знаходяться в
                                    постійному розвитку. Встежити за всіма
                                    інноваціями одному спеціалісту практично
                                    неможливо, тоді як політика Onixlab
                                    ґрунтується на постійному удосконаленні
                                    цілої команди.
                                </p>
                            </div>
                        </div>

                        <div className="advantages_bg"></div>
                    </section>

                    {/* Спiвпрацюючи  */}
                    <section id="listAdvantages" className="section">
                        <div className="listAdvantages">
                            <h2>Cпівпрацюючи з нами ви отримаєте:</h2>
                            <div className="listAdvantages_grid">
                                <div className="listAdvantages_block_item listAdvantages_block_one">
                                    <div className="listAdvantages_block_item_icon">
                                        <img
                                            src="./images/icons/animated/money-bag.webp"
                                            loading="lazy"
                                            alt="gifEconomy"
                                        />
                                    </div>
                                    <h3>Економія</h3>
                                    <p>
                                        На 30% економите свій бюджет не наймаючи
                                        штатних працівників, а використовуючи
                                        аутсорсинг Onixlab
                                    </p>
                                </div>
                                <div className="listAdvantages_block_item listAdvantages_block_two">
                                    <div className="listAdvantages_block_item_icon">
                                        <img
                                            src="./images/icons/animated/like.webp"
                                            loading="lazy"
                                            alt="gifQuality"
                                        />
                                    </div>
                                    <h3>Якість</h3>
                                    <p>
                                        Ми на 10% випереджаємо ринок конкурентів
                                        та аналогічні компанії згідно зі
                                        статистикою аутсорсинг компаній в
                                        Україні
                                    </p>
                                </div>
                                <div className="listAdvantages_block_item listAdvantages_block_three">
                                    <div className="listAdvantages_block_item_icon">
                                        <img
                                            src="./images/icons/animated/shield.webp"
                                            loading="lazy"
                                            alt="gifSecurity"
                                        />
                                    </div>
                                    <h3>Безпека</h3>
                                    <p>
                                        На 40% збільшення безпеки з правильно
                                        налаштованим ПЗ та сервером
                                    </p>
                                </div>
                                <div className="listAdvantages_block_item listAdvantages_block_four">
                                    <div className="listAdvantages_block_item_icon">
                                        <img
                                            src="./images/icons/animated/clock.webp"
                                            loading="lazy"
                                            alt="gifProductivity"
                                            width="20px"
                                            height="20px"
                                        />
                                    </div>
                                    <h3>Продуктивність</h3>
                                    <p>
                                        20% - Це загальний приріст
                                        продуктивності наших клієнтів при роботі
                                        з нами
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Послуги  */}
                    <ServicesSection />

                    {/* Контакти  */}
                    <ContactSection />
                </main>

                {/* Bottom navigation  */}
                <div className="bottom_nav">
                    <nav>
                        <span className="bottom_nav_link">
                            <button
                                type="button"
                                className="bottom_nav_link_magnetic"
                            >
                                <span className="bottom_nav_link_magnetic_text bottom_nav_link_active">
                                    Інтро
                                </span>
                            </button>
                        </span>
                        <span className="bottom_nav_link">
                            <button
                                type="button"
                                className="bottom_nav_link_magnetic"
                            >
                                <span className="bottom_nav_link_magnetic_text">
                                    Проекти
                                </span>
                            </button>
                        </span>
                        <span className="bottom_nav_link">
                            <button
                                type="button"
                                className="bottom_nav_link_magnetic"
                            >
                                <span className="bottom_nav_link_magnetic_text">
                                    Переваги
                                </span>
                            </button>
                        </span>
                        <span className="bottom_nav_link">
                            <button
                                type="button"
                                className="bottom_nav_link_magnetic"
                            >
                                <span className="bottom_nav_link_magnetic_text">
                                    Ви отримаєте
                                </span>
                            </button>
                        </span>
                        <span className="bottom_nav_link">
                            <button
                                type="button"
                                className="bottom_nav_link_magnetic"
                            >
                                <span className="bottom_nav_link_magnetic_text">
                                    Послуги
                                </span>
                            </button>
                        </span>
                        <span className="bottom_nav_link">
                            <button
                                type="button"
                                className="bottom_nav_link_magnetic"
                            >
                                <span className="bottom_nav_link_magnetic_text">
                                    Контакти
                                </span>
                            </button>
                        </span>
                    </nav>

                    {/* Progress bar  */}
                    <progress max="100" value="0" id="progress"></progress>
                </div>
            </ClientPageWrapper>
        </>
    );
});

export default MainPage;
