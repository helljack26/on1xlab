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

    <? // Extra fields for services form 
        $uri = $_SERVER['REQUEST_URI'];
        if (strpos($uri, 'service') !== false || 
            strpos($uri, 'services') !== false ||
            strpos($uri, 'projects') !== false ||
            strpos($uri, 'project') !== false) {
            include('components/services/service_dropdown_for_form.php');
        }
    ?>

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