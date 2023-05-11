$(document).ready(function () {
    //////////////////////////////////////////////// Mobile filters open ////////////////////////////////////////////////
    const openMobileFilter = () => {
        $(".product_filters").animate({
                right: "0px",
            },
            "slow"
        );
        $(".product_filters_mobile_bg").fadeIn("slow");
        $("body").css("overflow-y", "hidden");
        return;
    };
    const closeMobileFilter = () => {
        // $(".filter_buttons_button").removeClass("filter_buttons_button_open");

        $(".product_filters").animate({
                right: "-100%",
            },
            "slow"
        );
        $(".product_filters").attr("data", "0");
        $(".product_filters_mobile_bg").fadeOut("slow");
        $("body").css("overflow-y", "scroll");
        return;
    };
    // Mobile side filters button
    $(".filter_buttons_button").click(function () {
        if ($(".product_filters").attr("data") == "0") {
            openMobileFilter();
        } else {
            closeMobileFilter();
        }
    });
    // If touch opacity bg close
    $(
        ".product_filters_mobile_bg, .product_filters_container_header_icon_sidefilters"
    ).click(function () {
        closeMobileFilter();
    });

    // Swipe close side filters
    var touchstartX = 0;
    var touchendX = 0;

    var gestureZone = document.querySelector(".product_filters_mobile_bg");

    gestureZone.addEventListener(
        "touchstart",
        function (event) {
            touchstartX = event.changedTouches[0].screenX;
        },
        false
    );

    gestureZone.addEventListener(
        "touchend",
        function (event) {
            touchendX = event.changedTouches[0].screenX;
            handleGesture();
        },
        false
    );

    function handleGesture() {
        if (
            touchendX > touchstartX + 100 &&
            $(".product_filters").css("right") == "0px"
        ) {
            closeMobileFilter();
        }
    }
});