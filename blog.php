<?php
include_once('admin/includes/config.php'); 
// Select all posts from the blog table
$query = "SELECT * FROM blog";
$result = mysqli_query($conn, $query);
?>
<!DOCTYPE html>
<html lang="uk">

<head>
    <? include('includes/meta_tags.php') ?>

    <meta name="description"
        content="Блог Onixlab - це джерело корисних статей про веб-розробку, дизайн та DevOps. Ознайомтесь з нашими статтями та підвищуйте свої знання в IT-сфері.">
    <meta name="keywords" content="Onixlab, Онікслаб, блог, статті, веб-розробка, дизайн, DevOps, IT">
    <meta property="og:title" content="Блог Onixlab: корисні статті про веб-розробку, дизайн та DevOps">
    <meta property="og:description"
        content="Блог Onixlab - це джерело корисних статей про веб-розробку, дизайн та DevOps. Ознайомтесь з нашими статтями та підвищуйте свої знання в IT-сфері.">
    <meta property="og:image" content="/images/logo/onixlab_logo_og.svg">
    <meta property="og:image:alt" content="Onixlab Blog">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://onixlab.com.ua/blog">
    <link rel="stylesheet" href="assets/css/blog.min.css">
    <title>Блог Onixlab: корисні статті про веб-розробку, дизайн та DevOps</title>
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

        <div class="news_header">
            <div class="breadcrumbs_block">
                <a href='/'>Головна</a>
                <span>Блог</span>
            </div>
            <h1>
                Блог Onixlab
            </h1>
            <p>
                Корисні статті про веб-розробку, дизайн та DevOps.
            </p>
        </div>
        <div class="news_wrapper">
            <? while ($row = mysqli_fetch_assoc($result)) :
                $url_name = $row['url_name'];
                $title = $row['title'];
                $content = $row['content'];
                $image = $row['image'];
                $created_at = $row['created_at'];
            ?>

            <div class="news_wrapper_item">
                <img class="news_wrapper_item_img" src="uploads/<?=$image?>"></img>
                <h2><?=$title?></h2>
                <p><?=mb_substr($content, 0, 200, 'UTF-8')?>...</p>
                <a href="/post/<?=$url_name?>" class="read-more-btn">
                    Читати далі
                </a>
                <h5>Створено <?= date('d.m.Y', strtotime($created_at)) ?></h5>
            </div>
            <?php endwhile; ?>
        </div>

        <?php include_once('includes/footer.php');?>
    </div>

</body>

</html>