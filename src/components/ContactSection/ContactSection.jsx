import React from "react";
import { useLocation } from "react-router-dom";
// Store
import { observer } from "mobx-react-lite";
// Variables
import IMAGES from "src/assets/images";

const ContactSection = observer(() => {
    return (
        <section id="contact" className="section contact">
            <div className="contact_row">
                {/* Форма */}
                <div className="contact_row_form">
                    <h3>Напишiть нам</h3>

                    {/* Success submit */}
                    <div
                        id="contact_row_form_success"
                        className="contact_row_form_success"
                    >
                        <div className="contact_row_form_success_block">
                            <span className="contact_row_form_success_block_title">
                                Заявка вiдправлена
                            </span>
                            <span className="contact_row_form_success_block_text">
                                Менеджер зв'яжеться з вами в найближчий час
                            </span>
                        </div>
                    </div>

                    {/* Subscribe form */}
                    <form id="contact_form" className="contact_row_form_block">
                        {/* Name */}
                        <div className="contact_row_form_block_row">
                            <div
                                id="form_input_block"
                                className="contact_row_form_block_item"
                            >
                                <input
                                    id="userName"
                                    className="contact_row_form_block_item_input"
                                    type="text"
                                />

                                <label
                                    id="name_label"
                                    className="contact_row_form_block_item_label"
                                >
                                    Ваше Iм'я
                                </label>

                                <span
                                    id="input_errorMessage1"
                                    className="contact_row_form_block_item_errorMessage"
                                >
                                    Мiнiмум 2 символи
                                </span>
                            </div>
                            {/* Phone */}
                            <div
                                id="form_input_block"
                                className="contact_row_form_block_item"
                            >
                                <input
                                    id="userPhone"
                                    className="contact_row_form_block_item_input"
                                    type="tel"
                                    maxLength="13"
                                />

                                <label
                                    id="phone_label"
                                    className="contact_row_form_block_item_label"
                                >
                                    Номер телефону
                                </label>

                                <span
                                    id="input_errorMessage2"
                                    className="contact_row_form_block_item_errorMessage"
                                >
                                    Невiрний формат
                                </span>
                            </div>
                        </div>

                        {/* Form textarea */}
                        <div
                            id="form_input_block1"
                            className="contact_row_form_block_item"
                        >
                            <textarea
                                id="userMessage"
                                className="contact_row_form_block_item_textarea"
                                rows="1"
                            ></textarea>

                            <label
                                id="review_label"
                                className="contact_row_form_block_item_label"
                            >
                                Ваше повідомлення
                            </label>
                            <span
                                id="input_errorMessage3"
                                className="contact_row_form_block_item_errorMessageTextArea"
                            >
                                Обов'язкове поле. Мiнiмум 10 символiв.
                            </span>
                        </div>
                        <div className="contact_form_submit_magnet">
                            <button
                                id="contact_form_submit"
                                className="contact_row_form_block_submit"
                                type="button"
                            >
                                Вiдправити
                                {/* Loader */}
                                <div className="contact_row_form_block_submit_loader"></div>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Iнформацiя */}
                <div className="contact_row_info_gsap">
                    <div className="contact_row_info">
                        <h3>Контакти</h3>
                        <div className="contact_row_info_item">
                            {/* Телефони */}
                            <a
                                className="contact_row_info_item_kievstar"
                                href="tel:+380982142238"
                            >
                                +38 (098) 214-22-38
                            </a>
                            <a
                                className="contact_row_info_item_lifecell"
                                href="tel:+380936572359"
                            >
                                +38 (093) 657-23-59
                            </a>
                        </div>
                        <div className="contact_row_info_item">
                            {/* Email */}
                            <a
                                className="contact_row_info_item_mail"
                                href="mailto:manager@onixlab.com.ua"
                            >
                                manager@onixlab.com.ua
                            </a>
                        </div>
                        <div className="contact_row_info_item">
                            {/* Адреса */}
                            <a
                                className="contact_row_info_item_location"
                                href="https://www.google.com/maps?ll=50.520283,30.577513&z=17&t=m&hl=ua&gl=UA&mapclient=embed&cid=8939337051768359664"
                                target="_blank"
                                rel="noreferrer"
                            >
                                м. Київ, вул. Деснянсь​ка, 24Б
                            </a>
                        </div>
                        <h4>В Соцмережах</h4>
                        <div className="contact_row_info_social">
                            {/* Telegram */}
                            <a
                                href="https://t.me/onixlab_ua"
                                className="contact_row_info_social_telegram"
                                target="_blank"
                                rel="noreferrer"
                            >
                                &nbsp;
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/onixlabua?hc_ref=ARQUMF943BBe3oKI3zJmiK8Acixcn-kHJnZsX5g6bFrEgnuVgqg0F8ndzeA7rcVUc8I&fref=nf&__xts__[0]=68.ARDdeb28NUhpBHK1J0lYbx1cUvGr1m0oEw1AVCVY-tFTG4YcGvaB795AS-poslCJD_OZ2M4dFZxRiCUOEh7g6Z66Ntw64S1n_1qkD15oGAvKTTW3PO5c_roqnSx2f-ovTvPOno7FLR4MHj_krFnqL6KDtjx1O1MMXS3boj5i00GFqhd55TOjSKZlls_sZXYfqsW1Iz9oQ7dEc6S-s2kqcvZYSDclBBaJYatuP0SJC0KKxN1Pm5mBtntX_g7aMBgTqrDfeo9kIXWRjsqxwbnbJPJOZr_dnYd0rIjzlvfATb6S_eXD6LM"
                                className="contact_row_info_social_facebook"
                                target="_blank"
                                rel="noreferrer"
                            >
                                &nbsp;
                            </a>

                            {/* Viber */}
                            <a
                                href="viber://chat?number=0982142238"
                                className="contact_row_info_social_viber"
                                target="_blank"
                                rel="noreferrer"
                            >
                                &nbsp;
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/onixlab_ua"
                                className="contact_row_info_social_instagram"
                                target="_blank"
                                rel="noreferrer"
                            >
                                &nbsp;
                            </a>
                        </div>

                        {/* Background */}
                        <div className="contact_row_info_bg"></div>
                    </div>
                </div>
            </div>

            {/* Карта */}
            <div className="contact_map">
                {/* Loader */}
                <span className="contact_map_loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                {/* Google map */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.7521826032767!2d30.575450815856502!3d50.52017769021902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d12fa5e1fde9%3A0x7c0ee7af9a240af0!2z0J3QsNGB0L7RgdC90LDRjyDQtNC10YHQvdGP0L3RgdC60LDRjyAx!5e0!3m2!1suk!2sua!4v1680037481697!5m2!1suk!2sua"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map"
                ></iframe>
            </div>
        </section>
    );
});

export default ContactSection;
