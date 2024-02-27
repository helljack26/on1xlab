<section id="contact" class="section contact">
    <div class="contact_row">

        <!-- Форма -->
        <div class='contact_row_form'>
            <h3>
                Напишiть нам
            </h3>

            <!-- Success submit -->
            <div id="contact_row_form_success" class="contact_row_form_success">
                <div class="contact_row_form_success_block">
                    <span class="contact_row_form_success_block_title">
                        Заявка вiдправлена
                    </span>
                    <span class="contact_row_form_success_block_text">
                        Менеджер зв'яжеться з вами в найближчий час
                    </span>
                </div>
            </div>

            <!-- Subscribe form -->
            <form id="contact_form" class='contact_row_form_block'>

                <!-- Name -->
                <div class="contact_row_form_block_row">

                    <div id="form_input_block" class='contact_row_form_block_item'>
                        <input id="userName" class="contact_row_form_block_item_input" type="text">

                        <label id="name_label" class='contact_row_form_block_item_label'>
                            Ваше Iм'я
                        </label>

                        <span id="input_errorMessage1" class='contact_row_form_block_item_errorMessage'>
                            Мiнiмум 2 символи
                        </span>
                    </div>
                    <!-- Phone -->
                    <div id="form_input_block" class='contact_row_form_block_item'>
                        <input id="userPhone" class="contact_row_form_block_item_input" type="tel" maxlength="13">

                        <label id="phone_label" class='contact_row_form_block_item_label'>
                            Номер телефону
                        </label>

                        <span id="input_errorMessage2" class='contact_row_form_block_item_errorMessage'>
                            Невiрний формат
                        </span>
                    </div>
                </div>

                <!-- Form textarea -->
                <div id="form_input_block1" class='contact_row_form_block_item'>
                    <textarea id="userMessage" class="contact_row_form_block_item_textarea" rows="1"></textarea>

                    <label id="review_label" class='contact_row_form_block_item_label'>
                        Ваше повідомлення
                    </label>
                    <span id="input_errorMessage3" class='contact_row_form_block_item_errorMessageTextArea'>
                        Обов'язкове поле. Мiнiмум 10 символiв.
                    </span>
                </div>
                <div class="contact_form_submit_magnet">
                    <button id="contact_form_submit" class="contact_row_form_block_submit" type="button">
                        Вiдправити
                        <!-- Loader -->
                        <div class="contact_row_form_block_submit_loader"></div>
                    </button>
                </div>
            </form>
        </div>

        <!-- Iнформацiя -->
        <div class="contact_row_info_gsap">

            <div class="contact_row_info">
                <h3>
                    Контакти
                </h3>
                <div class="contact_row_info_item">
                    <!-- Телефони -->
                    <a class="contact_row_info_item_kievstar" href="tel:+380982142238">
                        +38 (098) 214-22-38
                    </a>
                    <a class="contact_row_info_item_lifecell" href="tel:+380936572359">
                        +38 (093) 657-23-59
                    </a>
                </div>
                <div class="contact_row_info_item">

                    <!-- Email -->
                    <a class="contact_row_info_item_mail" href="mailto:manager@onixlab.com.ua">
                        manager@onixlab.com.ua
                    </a>
                </div>
                <div class="contact_row_info_item">
                    <!-- Адреса -->
                    <a class="contact_row_info_item_location"
                        href="https://www.google.com/maps?ll=50.520283,30.577513&z=17&t=m&hl=ua&gl=UA&mapclient=embed&cid=8939337051768359664"
                        target="_blank">
                        м. Київ, вул. Деснянсь​ка, 24Б
                    </a>
                </div>
                <h4>
                    В Соцмережах
                </h4>
                <div class="contact_row_info_social">
                    <!-- Telegram -->
                    <a href="https://t.me/onixlab_ua" class="contact_row_info_social_telegram" target="_blank"></a>

                    <!-- Facebook -->
                    <a href="https://www.facebook.com/onixlabua?hc_ref=ARQUMF943BBe3oKI3zJmiK8Acixcn-kHJnZsX5g6bFrEgnuVgqg0F8ndzeA7rcVUc8I&fref=nf&__xts__[0]=68.ARDdeb28NUhpBHK1J0lYbx1cUvGr1m0oEw1AVCVY-tFTG4YcGvaB795AS-poslCJD_OZ2M4dFZxRiCUOEh7g6Z66Ntw64S1n_1qkD15oGAvKTTW3PO5c_roqnSx2f-ovTvPOno7FLR4MHj_krFnqL6KDtjx1O1MMXS3boj5i00GFqhd55TOjSKZlls_sZXYfqsW1Iz9oQ7dEc6S-s2kqcvZYSDclBBaJYatuP0SJC0KKxN1Pm5mBtntX_g7aMBgTqrDfeo9kIXWRjsqxwbnbJPJOZr_dnYd0rIjzlvfATb6S_eXD6LM"
                        class="contact_row_info_social_facebook" target="_blank"></a>

                    <!-- Viber -->
                    <a href="viber://chat?number=0982142238" class="contact_row_info_social_viber"></a>

                    <!-- Instagram -->
                    <a href="https://www.instagram.com/onixlab_ua" class="contact_row_info_social_instagram"
                        target='_blank'></a>
                </div>

                <!-- Background -->

                <div class="contact_row_info_bg"></div>
            </div>
        </div>

    </div>

    <!-- Карта -->
    <div class="contact_map">
        <!-- Loader -->
        <span class="contact_map_loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </span>
        <!-- Google map -->
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.7521826032767!2d30.575450815856502!3d50.52017769021902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4d12fa5e1fde9%3A0x7c0ee7af9a240af0!2z0J3QsNGB0L7RgdC90LDRjyDQtNC10YHQvdGP0L3RgdC60LDRjyAx!5e0!3m2!1suk!2sua!4v1680037481697!5m2!1suk!2sua"
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
</section>