<?php
include_once('admin/includes/config.php');
include_once('functions.php');

$get_services = getUniqueServices($conn);
?>

<!DOCTYPE html>
<html lang="uk">

<head>
    <base href="<?= checkIsHttp() .  $_SERVER['SERVER_NAME']; ?>" />

    <? include('includes/meta_tags.php') ?>
    <meta name="keywords" content="Onixlab, Онікслаб, прайс, ціни, послуги, веб-розробка, дизайн, IT, лендінг">

    <meta name="description" content="Послуги від Onixlab. Пропонуємо веб-розробку, дизайн та інші ІТ-послуги за
        доступними цінами. Звертайтеся до нас!">
    <meta property="og:title" content="Послуги від Onixlab">
    <meta property="og:description" content="Послуги від Onixlab. Пропонуємо веб-розробку, дизайн та інші ІТ-послуги за
        доступними цінами. Звертайтеся до нас!">
    <meta property="og:image" content="/images/services/og_image.jpg">
    <meta property="og:image:alt" content="Onixlab services List">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://onixlab.com.ua/services">

    <link rel="stylesheet" href="assets/css/service_order.min.css">
    <link rel="stylesheet" href="assets/css/services.min.css">

    <title>Послуги - ONIXLAB: професійні ІТ-послуги</title>
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
            <div class="container_header">
                <div class="breadcrumbs_block">
                    <a href='/'>
                        Головна
                    </a>

                    <span>
                        Послуги
                    </span>
                </div>

                <!-- Main title -->
                <h1>
                    Послуги <nobr>веб-студії</nobr> Onixlab
                </h1>

                <p class="secodary_text">
                </p>
            </div>

            <? include('components/services/services_section.php') ?>
        </main>

        <!-- Order services -->
        <? include('components/services/service_order.php') ?>
    </div>

    <?php include_once('includes/footer.php');?>

    <script src="assets/js/formValidation.js"></script>
    <script src="assets/js/services.js"></script>
    <script src="assets/js/service_order.js"></script>

</body>

</html>