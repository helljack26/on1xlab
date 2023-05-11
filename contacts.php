<?php
include_once('functions.php');
?>

<!DOCTYPE html>
<html lang="uk">

<head>
    <base href="<?= checkIsHttp() .  $_SERVER['SERVER_NAME']; ?>" />

    <? include('includes/meta_tags.php') ?>
    <meta name="keywords" content="Onixlab, Онікслаб, прайс, ціни, послуги, веб-розробка, дизайн, IT, лендінг">

    <meta name="description"
        content="Контакти Onixlab. Пропонуємо веб-розробку, дизайн та інші ІТ-послуги за доступними цінами. Звертайтеся до нас!">
    <meta property="og:title" content="Прайс на послуги від Onixlab">
    <meta property="og:description"
        content="Контакти Onixlab. Пропонуємо веб-розробку, дизайн та інші ІТ-послуги за доступними цінами. Звертайтеся до нас!">
    <meta property="og:image" content="/images/services/og_image.jpg">
    <meta property="og:image:alt" content="Onixlab контакти">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://onixlab.com.ua/contacts">

    <link rel="stylesheet" href="assets/css/contacts.min.css">

    <title>Контакти - ONIXLAB: професійні ІТ-послуги</title>
</head>

<!-- Mobile nav -->
<? include('includes/mobile_menu.php') ?>

<body id="body_wrapper" class="body_mobile">
    <!-- Google Tag Manager (noscript) -->
    <? include('includes/body_google_manager.php') ?>
    <!-- End Google Tag Manager (noscript) -->

    <div id="body_mobile_block">
        <!-- Header -->
        <? include('includes/header.php') ?>

        <!-- Services content -->
        <main class="container">
            <? include('components/contacts/contacts_section.php') ?>
        </main>
    </div>

    <?php include_once('includes/footer.php');?>
    <script src="assets/js/formValidation.js"></script>

</body>

</html>