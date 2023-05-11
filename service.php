<?php
include_once('admin/includes/config.php');
include_once('functions.php');

$get_pathname = removeRootDir();

if($get_pathname == 'service'){
    show404();
} else {
    $query = "SELECT * FROM services WHERE pathname='$get_pathname'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);

    if ($row) {
        // Services data
        $services_page_name = $row['service_name'];
        $services_pathname = $row['pathname'];
        $description = $row['description'];
        
        $get_services = getUniqueServices($conn);
    }else{
        show404();
    }
}
?>

<!DOCTYPE html>
<html lang="uk">

<head>
    <base href="<?= checkIsHttp() .  $_SERVER['SERVER_NAME']; ?>" />

    <? include('includes/meta_tags.php') ?>
    <meta name="keywords" content="Onixlab, Онікслаб, прайс, ціни, послуги, веб-розробка, дизайн, IT, лендінг">

    <meta name="description" content="Ціни на розробку <?=$services_page_name?> від Onixlab. Пропонуємо веб-розробку, дизайн та інші ІТ-послуги за
        доступними цінами. Звертайтеся до нас!">
    <meta property="og:title" content="Прайс на послуги від Onixlab">
    <meta property="og:description" content="Ціни на розробку <?=$services_page_name?> від Onixlab. Пропонуємо веб-розробку, дизайн та інші ІТ-послуги за
        доступними цінами. Звертайтеся до нас!">
    <meta property="og:image" content="/images/services/og_image.jpg">
    <meta property="og:image:alt" content="Onixlab services List">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://onixlab.com.ua/service/<?=$services_pathname?>">

    <link rel="stylesheet" href="assets/css/service.min.css">
    <link rel="stylesheet" href="assets/css/service_order.min.css">

    <title>Створення <?=$services_page_name?> - ONIXLAB: професійні ІТ-послуги</title>
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
            <? include('components/services/services_bg.php') ?>

            <div class="container_header">
                <div class="breadcrumbs_block">
                    <a href='/'>
                        Головна
                    </a>
                    <a href='/services'>
                        Послуги
                    </a>
                    <span>
                        <?=$services_page_name?>
                    </span>
                </div>

                <!-- Main title -->
                <h1>
                    <?=$services_page_name?>
                </h1>

                <p class="secodary_text">
                    <?=$description?>
                </p>

                <!-- Services switcher -->
                <div class="services_switchers">
                    <h2>
                        Вартість послуги
                    </h2>
                    <div class="services_switchers_row">
                        <? foreach ($get_services as $services_item => $services_value):
                            $service_switch_name = $services_value['service_name'];
                            $switch_pathname = $services_value['pathname'];
                            $is_active_link = $get_pathname == $switch_pathname ? "services_switchers_active" : '';
                        ?>
                        <a href='/service/<?=$switch_pathname?>' class="<?=$is_active_link?>" target="_blank">
                            <?=$service_switch_name?>
                        </a>
                        <? endforeach; ?>
                    </div>
                </div>
            </div>
            <div class="services_wrapper">

                <div class="services_block">
                    <? $query_services_type = "SELECT * FROM services WHERE pathname='$get_pathname' ORDER BY position_on_row ASC";
                    $get_services_type = mysqli_query($conn, $query_services_type);

                    while ($row_services_type = mysqli_fetch_assoc($get_services_type)):
                        $services_type = $row_services_type['services_type'];
                        $price = $row_services_type['price'];
                        $params = json_decode($row_services_type['params'], true);

                        $is_services_block_item_top = intval($row_services_type['position_on_row']) == 2 ?
                        'services_block_item_top': '';
                    ?>

                    <div class="services_block_item <?=$is_services_block_item_top?>">
                        <div class="services_block_item_header">
                            <h3><?=$services_type?></h3>
                            <span class="services_block_item_header_price">
                                <?=addSpaceForThousands($price)?><i>₴</i>
                            </span>
                        </div>

                        <ul class="services_block_item_list">
                            <? // Order params by order position
                                $order = array();
                                foreach ($params as $key => $row) { $order[$key] = $row['order'];}
                                array_multisort($order, SORT_ASC, $params);
                            
                                foreach ($params as $param_name => $param_value): ?>
                            <li class="<?=$param_value['enabled'] == true 
                                        ?
                                        'services_block_item_list_enabled': 
                                        'services_block_item_disabled';
                                        ?>">
                                <?=$param_name?>
                            </li>
                            <?endforeach;?>
                        </ul>

                        <button type="button" class="services_block_item_order">
                            Замовити
                        </button>
                    </div>

                    <?endwhile;?>
                </div>
            </div>

        </main>

        <!-- Order services -->
        <? include('components/services/service_order.php') ?>
    </div>

    <?php include_once('includes/footer.php');?>
    <script src="assets/js/formValidation.js"></script>
    <script src="assets/js/service.js"></script>
    <script src="assets/js/service_order.js"></script>

</body>

</html>