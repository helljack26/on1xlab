// Import necessary libraries and components
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Store
import { observer } from "mobx-react-lite";
// Hooks
import useDelayedScriptLoader from "src/hooks/useDelayedScriptLoader";
import IMAGES from "src/assets/images";

// Footer component definition
const Footer = observer(({ scriptList = [] }) => {
    const location = useLocation();
    const pagePath = location.pathname;
    // Detect is main page, on main page show only scripts
    const isMainPage = pagePath === "/";

    // Define the list of script URLs and the delay interval
    const mainScriptList = [
        { src: "assets/js/libs/jquery.min.js", isModule: false },
        { src: "assets/js/libs/gsap.min.js", isModule: false },
        { src: "assets/js/libs/anime.min.js", isModule: false },
        { src: "assets/js/libs/charming.min.js", isModule: false },
        { src: "assets/js/scripts.js", isModule: true },
    ];
    const combinedScripts = [...mainScriptList, ...scriptList];
    const delay = 20;

    // Use the custom hook to load scripts with a delay
    useDelayedScriptLoader(combinedScripts, delay);

    return (
        <>
            {!isMainPage && (
                <footer class="footer">
                    <div class="footer_container">
                        <div class="footer_container_block">
                            {/* Про нас  */}
                            <div class="footer_container_block_aboutus">
                                <h5 class="footer_container_block_aboutus_header">
                                    ONIXLAB
                                </h5>
                                <p class="footer_container_block_aboutus_text">
                                    Розробка веб-сайтів та додатків
                                    <nobr> під ключ / IT-послуги</nobr>
                                </p>
                            </div>

                            {/* Навігація  */}
                            <nav class="footer_container_nav">
                                <h5>Мапа сайту</h5>
                                <a href="/">Головна</a>
                                <a href="services">Послуги</a>
                                <a href="projects">Проекти</a>
                                <a href="blog">Блог</a>
                                <a href="wp-themes">WordPress теми</a>
                                <a href="contacts">Контакти</a>
                            </nav>

                            {/* Наші контакти  */}
                            <div class="footer_container_block_contacts">
                                <h5 class="footer_container_block_contacts_header">
                                    Наші контакти
                                </h5>
                                <a href="tel:+380982142238">
                                    +38 (098) 214-22-38
                                </a>
                                <a href="tel:+380936572359">
                                    +38 (093) 657-23-59
                                </a>

                                {/* Соціальні мережі  */}
                                <div class="footer_container_block_contacts_social">
                                    {/* Telegram  */}
                                    <a href="#" target="_blank">
                                        <span class="footer_container_block_contacts_social_telegram"></span>
                                    </a>
                                    {/* Viber  */}
                                    <a href="#" target="_blank">
                                        <span class="footer_container_block_contacts_social_viber"></span>
                                    </a>
                                    {/* Facebook  */}
                                    <a href="#" target="_blank">
                                        <span class="footer_container_block_contacts_social_fb"></span>
                                    </a>
                                    {/* Instagram  */}
                                    <a href="#" target="_blank">
                                        <span class="footer_container_block_contacts_social_instagram"></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Copyright  */}
                        <div class="footer_container_copyright">
                            <span>Copyright © 2023 ТОВ "Onixlab"</span>
                        </div>
                    </div>
                </footer>
            )}
        </>
    );
});

export default Footer;
