<?php
include_once('admin/includes/config.php');
include_once('functions.php');

$get_services = getUniqueServices($conn);
?>

<!DOCTYPE html>
<html lang="uk">

<head>
    <? include('includes/meta_tags.php') ?>

    <meta name="description" content="Onixlab: розробка сайтів та додатків під ключ. Портфоліо наших проектів">
    <meta name="keywords" content="Onixlab, розробка сайтів, розробка додатків, портфоліо проектів">

    <link rel="stylesheet" href="assets/css/projects.min.css">
    <link rel="stylesheet" href="assets/css/service_order.min.css">

    <title>Розробка веб-сайтів та додатків під ключ | Портфоліо проектів | Onixlab</title>
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
        <main>
            <div class="container_header">
                <div class="breadcrumbs_block">
                    <a href='/'>Головна</a>
                    <span>Проекти</span>
                </div>

                <!-- Main title -->
                <h1>
                    Проекти <nobr>веб-студії</nobr> Onixlab
                </h1>
            </div>

            <!-- Projects -->
            <section>
                <div class="project_row">
                    <!--  -->
                    <a href="/project/ukritarm" class="project_item">
                        <div class="project_item_img">
                            <img src="./images/projects/ukrItArm_desk.webp" alt="Ukritarm">
                        </div>
                        <div class="project_item_text">
                            <span>Ukritarm</span>
                            <button type="button">Переглянути</button>
                        </div>
                    </a>
                    <!--  -->
                    <a href="/project/vikar" class="project_item">
                        <div class="project_item_img">
                            <img src="./images/projects/vikar_desk.webp" alt="Vikar">
                        </div>
                        <div class="project_item_text">
                            <span>Вікар</span>
                            <button type="button">Переглянути</button>
                        </div>
                    </a>
                    <!--  -->
                    <a href="/project/otaman" class="project_item">
                        <div class="project_item_img">
                            <img src="./images/projects/otaman_desk.webp" alt="Otaman">
                        </div>
                        <div class="project_item_text">
                            <span>Отаман</span>
                            <button type="button">Переглянути</button>
                        </div>
                    </a>
                </div>
            </section>
        </main>
        <!-- Order services -->
        <? include('components/services/service_order.php') ?>

        <!-- Footer -->
        <? include('includes/footer.php'); ?>
    </div>

    <!-- Scripts -->
    <script src="assets/js/formValidation.js"></script>
    <script src="assets/js/service_order.js"></script>
</body>

</html>