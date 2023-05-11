<?php
include_once('admin/includes/config.php'); 
include_once('functions.php'); 

// Select all posts from the blog table
if(isset($_GET['name'])){
    $name = removeRootDir();

    $query = "SELECT * FROM blog WHERE url_name='$name'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);

    // Post data
    $title = $row['title'];
    $content = $row['content'];
    $image = $row['image'];
    $created_at = $row['created_at'];
    
    // All post
    $query_all = "SELECT * FROM blog LIMIT 10";
    $result_all = mysqli_query($conn, $query_all);
}
?>
<!DOCTYPE html>
<html lang="uk">

<head>
    <base href="<?= checkIsHttp() .  $_SERVER['SERVER_NAME']; ?>" />

    <? include('includes/meta_tags.php') ?>

    <meta property="og:title" content="ONIXLAB: IT - послуги ➞ <?=replaceDoubleQuote($title)?>" />
    <meta property="og:description" content="<?=replaceDoubleQuote($content)?>" />

    <meta property="og:image" content="uploads/<?=$image?>">
    <meta property="og:image:alt" content="Onixlab Post <?=replaceDoubleQuote($title)?>">

    <meta name="description" content="<?=replaceDoubleQuote($title)?> > Розробка сайтів в Україні ONIXLAB">
    <meta name="keywords"
        content="<?=replaceDoubleQuote($title)?> Onixlab, Онікслаб, блог, статті, веб-розробка, дизайн, DevOps, IT">
    <meta property="og:type" content="website">

    <link rel="stylesheet" href="assets/css/post.min.css">

    <title>ONIXLAB: IT - послуги ➞ <?=$title?></title>
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


        <div class="container_header">
            <div class="breadcrumbs_block">
                <a href='/'>
                    Головна
                </a>
                <a href='/blog'>
                    Блог
                </a>
                <span>
                    <?=$title?>
                </span>
            </div>
        </div>

        <div class="news_wrapper">

            <div class="news_wrapper_item">
                <!-- Main title -->
                <h1><?=$title?></h1>

                <div class="news_wrapper_item_row">
                    <img src="uploads/<?=$image?>" />


                    <div class="news_wrapper_item_row_col">

                        <div class="news_wrapper_item_row_col_text">
                            <p><?=$content?></p>
                        </div>

                        <h5>Створено <?= date('d.m.Y', strtotime($created_at)) ?></h5>
                    </div>

                </div>
            </div>

            <!-- Blog navigation -->
            <div class="news_wrapper_nav">
                <h2>Схожі статті</h2>
                <div class="news_wrapper_nav_list">
                    <? while ($row = mysqli_fetch_assoc($result_all)) :
                            $url_name = $row['url_name'];
                            $title = $row['title'];
                            $content = $row['content'];
                            $image = $row['image'];
                            $created_at = $row['created_at'];
                    ?>
                    <a href="/post/<?=$url_name?>">
                        <img src="uploads/<?=$image?>" />
                        <span><?=$title?></span>
                    </a>
                    <? endwhile;?>
                </div>
            </div>
        </div>
        <?php include_once('includes/footer.php'); ?>
    </div>
</body>

</html>