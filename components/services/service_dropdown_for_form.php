<div class="services_form_row">
    <!-- Services name -->
    <div id='select_name' class="services_form_row_select">
        <button type='button' data-id='1' data-is-open='false' class="services_form_row_select_selected">
            <span
                id="select_name_text"><?=!empty($services_page_name) ? $services_page_name : 'Виберіть тип сайту'  ?></span>
            <i class="services_form_row_select_selected_arrow"></i>
        </button>

        <div class="services_form_row_select_hidden" style="z-index: 50;">
            <ul class="services_form_row_select_hidden_list">
                <? foreach ($get_services as $services_item => $services_value):
                    $select_service_name = $services_value['service_name'];
                    $select_pathname = $services_value['pathname'];
                    $isActiveLink = $get_pathname == $select_pathname ? "services_form_row_select_hidden_list_option_active" : '';
                ?>
                <li class="services_form_row_select_hidden_list_option <?=$isActiveLink?>">
                    <?=$select_service_name?>
                </li>
                <? endforeach; ?>
            </ul>

        </div>
    </div>

    <!-- Services type -->
    <div id='select_type' class="services_form_row_select">
        <button type='button' data-id='2' data-is-open='false' class="services_form_row_select_selected">
            <span id="select_type_text">Виберіть тариф</span>
            <i class="services_form_row_select_selected_arrow"></i>
        </button>

        <div class="services_form_row_select_hidden">
            <ul class="services_form_row_select_hidden_list">
                <?  $query_services_type = "SELECT * FROM services WHERE pathname='landing-page' ORDER BY position_on_row ASC";
                    $get_services_type = mysqli_query($conn, $query_services_type);

                    while ($row_services_type = mysqli_fetch_assoc($get_services_type)):
                        $services_type = $row_services_type['services_type'];
                ?>
                <li class="services_form_row_select_hidden_list_option">
                    <?=$services_type?>
                </li>
                <? endwhile; ?>
            </ul>
        </div>
    </div>
</div>