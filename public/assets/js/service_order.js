// City popup
$(document).ready(function () {
    $('#contact_form_submit').text('Відправити заявку');

    // Scroll to form
    $(".services_block_item_order").click(function () {
        const thisServicesType = $(this).prevAll('.services_block_item_header').children('h3').text().trim();
        $('#select_type_text').text(thisServicesType);

        // Set active link
        const selectTypeLi = $('#select_type').children('.services_form_row_select_hidden').children('.services_form_row_select_hidden_list').children('li')
        selectTypeLi.each(function () {
            if ($(this).text().trim() == thisServicesType) {
                $(this).parent().children('.services_form_row_select_hidden_list_option').removeClass("services_form_row_select_hidden_list_option_active");
                $(this).addClass("services_form_row_select_hidden_list_option_active");
            }
        });

        // Scroll to form
        $("html:not(:animated),body:not(:animated)").animate({
                scrollTop: $('#service_order').offset().top,
            },
            300
        );
    });


    // Dropdown
    const openServicesDropdown = (thisNextHidden) => {
        thisNextHidden.prev('.services_form_row_select_selected').attr('data-is-open', 'true');
        thisNextHidden.show();
        thisNextHidden.prev('.services_form_row_select_selected').children('.services_form_row_select_selected_arrow').addClass('services_form_row_select_selected_arrow_active');
    }

    const closeServicesDropdown = (thisNextHidden) => {
        thisNextHidden.prev('.services_form_row_select_selected').attr('data-is-open', 'false');
        thisNextHidden.hide();
        thisNextHidden.prev('.services_form_row_select_selected').children('.services_form_row_select_selected_arrow').removeClass('services_form_row_select_selected_arrow_active');
    }

    // 
    // Services header event
    // 
    $(".services_form_row_select_selected").click(function (event) {
        const isOpen = $(this).attr('data-is-open') !== 'false';
        const thisNextHidden = $(this).next('.services_form_row_select_hidden');

        if (isOpen === true) {
            closeServicesDropdown(thisNextHidden)
        } else {
            openServicesDropdown(thisNextHidden);
        }

        return false;
    });

    // Close popups if click outside
    $(document).click(function (e) {
        const hiddenServicesName = $("#select_name");
        if (hiddenServicesName.has(e.target).length === 0) {
            const thisNextHidden = hiddenServicesName.children('.services_form_row_select_hidden');
            closeServicesDropdown(thisNextHidden);
        }

        const hiddenServicesType = $("#select_type");
        if (hiddenServicesType.has(e.target).length === 0) {
            const thisNextHidden = hiddenServicesType.children('.services_form_row_select_hidden');
            closeServicesDropdown(thisNextHidden);
        }
    });

    // 
    // Click on department
    // 
    $(document).on(
        "click",
        ".services_form_row_select_hidden_list_option",
        function () {
            $(this).parent().children('.services_form_row_select_hidden_list_option').removeClass("services_form_row_select_hidden_list_option_active");
            $(this).addClass("services_form_row_select_hidden_list_option_active");
            const selectParent = $(this).parent().parent().parent();
            selectParent.children('.services_form_row_select_selected').children('span').text($(this).text().trim());
            closeServicesDropdown(selectParent.children('.services_form_row_select_hidden'));
            return false;
        }
    );
});