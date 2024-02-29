$(document).ready(function () {

    // Services price object
    const servicesData = [];

    $('.services_block_item_price').each(function () {
        const thisId = $(this).attr('id').trim();
        const thisPrice = parseInt($(this).text().trim());
        const servicesItem = [thisId, thisPrice - 500, thisPrice];

        servicesData.push(servicesItem);
    });

    // Services text animation
    const counter = (id, start, end, duration) => {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range));

        if (obj != null) {
            let timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
        }
    }

    const servicesItems = $(".services_block_item");

    servicesItems.each(function (i, id) {
        const currentservices = servicesData[i];

        setTimeout(() => {
            counter(currentservices[0], currentservices[1], currentservices[2], 10);

            $(this).removeClass('services_block_item_active')
        }, parseInt(`${i+1}000`) - 500);
    })

    $('h2').hide()
})