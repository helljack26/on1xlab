// Import necessary libraries and components
import React, { useEffect, useState } from "react";

// Store
import { observer } from "mobx-react-lite";

// Components
import Burger from "../Buttons/Burger/Burger";

// Style
import { HeaderStyle } from "./HeaderStyle";
import IMAGES from "src/assets/images";
const { Header } = HeaderStyle;

// HeaderBar component definition
const HeaderBar = observer(() => {
    // Render the HeaderBar component
    return (
        <>
            {/* Mouse circle  */}
            <div id="mouse-circle"></div>

            {/* Header  */}
            <header>
                <div className="header_row">
                    <Burger />

                    {/* Logo  */}
                    <div className="header_logo">
                        <span className="header_logo_link">
                            <img src={IMAGES.Logo} alt="logo" />
                        </span>
                    </div>
                </div>

                {/* Social links  */}
                <div className="header_social">
                    <div className="tooltip" data-type="amras">
                        {/* Icon  */}
                        <div
                            className="tooltip__trigger"
                            role="tooltip"
                            aria-describedby="info-amras"
                        ></div>
                        {/* Popup  */}
                        <div className="tooltip__base">
                            <svg
                                className="tooltip__shape"
                                width="100%"
                                height="100%"
                                viewBox="0 0 400 300"
                            >
                                <path
                                    className="path-amras-2"
                                    d="M 293,106 A 90.1,90.1 0 0 1 203,197 90.1,90.1 0 0 1 112,106 90.1,90.1 0 0 1 203,16.2 90.1,90.1 0 0 1 293,106 Z"
                                />
                                <path
                                    className="path-amras-3"
                                    d="M 324,66.2 A 46.9,46.9 0 0 1 277,113 46.9,46.9 0 0 1 230,66.2 46.9,46.9 0 0 1 277,19.3 46.9,46.9 0 0 1 324,66.2 Z"
                                />
                                <path
                                    className="path-amras-1"
                                    d="M 180,111 A 67.2,67.2 0 0 1 112,178 67.2,67.2 0 0 1 45.9,111 67.2,67.2 0 0 1 112,43.5 67.2,67.2 0 0 1 180,111 Z"
                                />
                                <path
                                    className="path-amras-4"
                                    d="M 371,98.6 A 52.7,52.7 0 0 1 318,152 52.7,52.7 0 0 1 266,98.6 52.7,52.7 0 0 1 318,45.9 52.7,52.7 0 0 1 371,98.6 Z"
                                />
                                <path
                                    className="path-amras-9"
                                    d="M 375,167 A 66.8,55.1 0 0 1 308,222 66.8,55.1 0 0 1 241,167 66.8,55.1 0 0 1 308,112 66.8,55.1 0 0 1 375,167 Z"
                                />
                                <path
                                    className="path-amras-5"
                                    d="M 187,199 A 52,52 0 0 1 136,251 52,52 0 0 1 84.1,199 52,52 0 0 1 136,147 52,52 0 0 1 187,199 Z"
                                />
                                <path
                                    className="path-amras-6"
                                    d="M 287,217 A 66.8,66.8 0 0 1 221,284 66.8,66.8 0 0 1 154,217 66.8,66.8 0 0 1 221,150 66.8,66.8 0 0 1 287,217 Z"
                                />
                                <path
                                    className="path-amras-7"
                                    d="M 132,168 A 53.9,53.9 0 0 1 78.7,222 53.9,53.9 0 0 1 24.8,168 53.9,53.9 0 0 1 78.7,114 53.9,53.9 0 0 1 132,168 Z"
                                />
                                <path
                                    className="path-amras-8"
                                    d="M 343,211 A 48.7,48.7 0 0 1 295,260 48.7,48.7 0 0 1 246,211 48.7,48.7 0 0 1 295,163 48.7,48.7 0 0 1 343,211 Z"
                                />
                            </svg>
                            {/* Content  */}
                            <div className="tooltip__content" id="info-amras">
                                <a
                                    className="tooltip__content_kievstar"
                                    href="tel:+380982142238"
                                >
                                    +38 (098) 214-22-38
                                </a>
                                <a
                                    className="tooltip__content_lifecell"
                                    href="tel:+380936572359"
                                >
                                    +38 (093) 657-23-59
                                </a>
                            </div>
                        </div>
                    </div>

                    <a
                        className="header_social_link telegram_icon"
                        href="https://t.me/onixlab_ua"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &nbsp;
                    </a>

                    <a
                        className="header_social_link viber_icon"
                        href="viber://chat?number=0982142238"
                    >
                        &nbsp;
                    </a>

                    <a
                        className="header_social_link facebook_icon"
                        href="https://www.facebook.com/onixlabua?hc_ref=ARQUMF943BBe3oKI3zJmiK8Acixcn-kHJnZsX5g6bFrEgnuVgqg0F8ndzeA7rcVUc8I&fref=nf&__xts__[0]=68.ARDdeb28NUhpBHK1J0lYbx1cUvGr1m0oEw1AVCVY-tFTG4YcGvaB795AS-poslCJD_OZ2M4dFZxRiCUOEh7g6Z66Ntw64S1n_1qkD15oGAvKTTW3PO5c_roqnSx2f-ovTvPOno7FLR4MHj_krFnqL6KDtjx1O1MMXS3boj5i00GFqhd55TOjSKZlls_sZXYfqsW1Iz9oQ7dEc6S-s2kqcvZYSDclBBaJYatuP0SJC0KKxN1Pm5mBtntX_g7aMBgTqrDfeo9kIXWRjsqxwbnbJPJOZr_dnYd0rIjzlvfATb6S_eXD6LM"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &nbsp;
                    </a>

                    <a
                        className="header_social_link instagram_icon"
                        href="https://www.instagram.com/onixlab_ua"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &nbsp;
                    </a>
                </div>
            </header>
        </>
    );
});

export default HeaderBar;
