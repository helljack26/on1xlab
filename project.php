<?php 
include_once('admin/includes/config.php');
include_once('functions.php');

$get_pathname = removeRootDir();
$projectName = '';
$projectDescription = '';
$projectBgClass = '';


switch ($get_pathname) {
    case 'ukritarm':
        $projectName = 'Ukritarm';
        $projectDescription = 'Виробник арматурних конструкцій';
        $projectBgClass = 'portfolio_ukritarm';
        break;
    case 'vikar':
        $projectName = 'Vikar.center';
        $projectDescription = 'Надійний постачальник будівельних матеріалів';
        $projectBgClass = 'portfolio_vikar';
        break;
    case 'otaman':
        $projectName = 'Otaman.net';
        $projectDescription = 'Мілітарі магазин для військовослужбовців';
        $projectBgClass = 'portfolio_otaman';
        break;
    
    default:
        show404();
        break;
}
?>

<!DOCTYPE html>
<html lang="uk">

<head>
    <base href="<?= checkIsHttp() .  $_SERVER['SERVER_NAME']; ?>" />

    <? include('includes/meta_tags.php') ?>

    <meta name="description" content="Onixlab: розробка сайтів та додатків під ключ. Портфоліо наших проектів">
    <meta name="keywords" content="Onixlab, розробка сайтів, розробка додатків, портфоліо проектів">

    <link rel="stylesheet" href="assets/css/project.min.css">
    <link rel="stylesheet" href="assets/css/service_order.min.css">

    <title> <?=$projectName?> | Проекти | Onixlab</title>
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

        <!-- Main -->
        <main class="<?=$projectBgClass?>">
            <div class="container_header">
                <div class="breadcrumbs_block">
                    <a href='/'>Головна</a>
                    <a href='/projects'>Проекти</a>
                    <span><?=$projectName?></span>
                </div>

                <!-- Main title -->
                <h1>
                    Проект<?=" $projectName"?>
                </h1>
                <p class="secodary_text">
                    <?=$projectDescription?>
                </p>
            </div>

            <? if ($get_pathname == 'ukritarm'): ?>
            <!-- Ukritarm -->
            <section id="ukritarm" class="portfolio">
                <div class="portfolio_row">
                    <!-- Phone view -->
                    <div class="portfolio_phone">
                        <div class="portfolio_phone_body"></div>
                        <div class="portfolio_phone_screen_ukritarm">
                            <div class="portfolio_phone_screen_header_ukritarm"></div>

                            <iframe id="ukritarm_phone" class="portfolio_phone_screen_iframe" width="377"
                                height="763"></iframe>

                            <img src="" id="ukritarm_phone_img" class="portfolio_phone_screen_img" width="360"></img>
                        </div>
                    </div>

                    <!-- Laptop view -->
                    <div class="portfolio_laptop">

                        <!-- Screen -->
                        <div class="portfolio_laptop_part_screen_ukritarm portfolio_laptop_part">
                            <iframe id="ukritarm_laptop" class="portfolio_laptop_part_screen_iframe"></iframe>

                            <img src="" id="ukritarm_laptop_img"></img>
                        </div>
                        <!-- Keyboard -->
                        <div class="portfolio_laptop_part_keyboard portfolio_laptop_part">
                            <div class="portfolio_laptop_part_keyboard_img"></div>
                        </div>

                        <div class="portfolio_laptop_part_keyboard_back portfolio_laptop_part">
                        </div>
                    </div>
                </div>
            </section>
            <? endif;?>

            <? if ($get_pathname == 'vikar'): ?>
            <!-- Vikar -->
            <section id="vikar" class="portfolio">
                <div class="portfolio_row">

                    <!-- Phone view -->
                    <div class="portfolio_phone">
                        <div class="portfolio_phone_body"></div>
                        <div class="portfolio_phone_screen_vikar">
                            <!-- Header -->
                            <div class="portfolio_phone_screen_header"></div>

                            <!-- Screen -->
                            <iframe id="vikar_phone" class="portfolio_phone_screen_iframe" width="377"
                                height="763"></iframe>

                            <!-- Image for mobile -->
                            <img id="vikar_phone_img" class="portfolio_phone_screen_img_mobile">
                        </div>
                    </div>

                    <!-- Laptop view -->
                    <div class="portfolio_laptop">

                        <!-- Screen -->
                        <div class="portfolio_laptop_part_screen_vikar portfolio_laptop_part">
                            <iframe id="vikar_laptop" class="portfolio_laptop_part_screen_iframe"
                                scrolling="yes"></iframe>

                            <!-- Image for mobile -->
                            <img id="vikar_laptop_img" class="portfolio_laptop_part_screen_img">
                        </div>
                        <!-- Keyboard -->
                        <div class="portfolio_laptop_part_keyboard portfolio_laptop_part">
                            <div class="portfolio_laptop_part_keyboard_img"></div>
                        </div>

                        <div class="portfolio_laptop_part_keyboard_back portfolio_laptop_part">
                        </div>
                    </div>
                </div>
            </section>
            <? endif;?>

            <? if ($get_pathname == 'otaman'): ?>
            <!-- Отаман -->
            <section id="otaman" class="portfolio">
                <div class="portfolio_row">

                    <!-- Phone view -->
                    <div class="portfolio_phone">
                        <div class="portfolio_phone_body"></div>
                        <div class="portfolio_phone_screen_otaman">
                            <!-- Header -->
                            <div class="portfolio_phone_screen_header_otaman"></div>

                            <!-- Screen -->
                            <iframe id="otaman_phone" class="portfolio_phone_screen_iframe" width="377"
                                height="763"></iframe>

                            <!-- Image for mobile -->
                            <img id="otaman_phone_img" class="portfolio_phone_screen_img_mobile">
                        </div>
                    </div>

                    <!-- Laptop view -->
                    <div class="portfolio_laptop">

                        <!-- Screen -->
                        <div class="portfolio_laptop_part_screen_otaman portfolio_laptop_part">
                            <iframe id="otaman_laptop" class="portfolio_laptop_part_screen_iframe"></iframe>

                            <!-- Image for mobile -->
                            <img id="otaman_laptop_img" class="portfolio_laptop_part_screen_img">
                        </div>
                        <!-- Keyboard -->
                        <div class="portfolio_laptop_part_keyboard portfolio_laptop_part">
                            <div class="portfolio_laptop_part_keyboard_img"></div>
                        </div>

                        <div class="portfolio_laptop_part_keyboard_back portfolio_laptop_part">
                        </div>
                    </div>
                </div>
            </section>
            <? endif;?>
        </main>

        <!-- Order services -->
        <? include('components/services/service_order.php') ?>

        <!-- Footer -->
        <? include('includes/footer.php'); ?>
    </div>

    <script src="assets/js/formValidation.js"></script>
    <script src="assets/js/project.js"></script>
</body>

</html>