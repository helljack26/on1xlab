import React from "react";
import { useLocation } from "react-router-dom";
// Store
import { observer } from "mobx-react-lite";
// Variables
import IMAGES from "src/assets/images";

const ServicesSection = observer(() => {
    return (
        <section id="services" className="section services">
            <h2>
                Послуги <nobr>веб-студії</nobr> Onixlab
            </h2>
            <div className="services_block">
                {/* Services item */}
                <span className="services_block_item services_block_item_active">
                    <h3>Сайт Візитка</h3>
                    <p>
                        Від
                        <span
                            id="services1"
                            className="services_block_item_price"
                        >
                            10000
                        </span>
                        ₴
                    </p>
                    <span className="services_block_item_link">
                        <a href="/service/">Дізнатися більше</a>
                    </span>
                </span>
                <span className="services_block_item services_block_item_active">
                    <h3>Лендінг</h3>
                    <p>
                        Від
                        <span
                            id="services2"
                            className="services_block_item_price"
                        >
                            20000
                        </span>
                        ₴
                    </p>
                    <span className="services_block_item_link">
                        <a href="/service/">Дізнатися більше</a>
                    </span>
                </span>
                <span className="services_block_item services_block_item_active">
                    <h3>Інтернет магазин</h3>
                    <p>
                        Від
                        <span
                            id="services3"
                            className="services_block_item_price"
                        >
                            30000
                        </span>
                        ₴
                    </p>
                    <span className="services_block_item_link">
                        <a href="/service/">Дізнатися більше</a>
                    </span>
                </span>
                <span className="services_block_item services_block_item_active">
                    <h3>Мобільний застосунок</h3>
                    <p>
                        Від
                        <span
                            id="services4"
                            className="services_block_item_price"
                        >
                            50000
                        </span>
                        ₴
                    </p>
                    <span className="services_block_item_link">
                        <a href="/service/">Дізнатися більше</a>
                    </span>
                </span>
            </div>
        </section>
    );
});

export default ServicesSection;
