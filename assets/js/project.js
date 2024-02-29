const projectAnimation = () => {
    // Laptop and phone disable body scroll on hover 
    const disableMouseCircle = (id) => {
        document.querySelector(id).addEventListener('mouseover', () => {
            document.getElementById('mouse-circle').classList.add('hidden');
            document.body.classList.add('overflow_hidden');
        });

        document.querySelector(id).addEventListener('mouseout', () => {
            document.getElementById('mouse-circle').classList.remove('hidden');
            document.body.classList.remove('overflow_hidden');
        });
    }
    disableMouseCircle('.portfolio_phone')
    disableMouseCircle('.portfolio_laptop')

    // Insert links after document load
    const insertLink = (iframeClass, link, timeout) => {
        setTimeout(() => {
            document.getElementById(iframeClass).setAttribute('src', link);
        }, timeout);
    };

    const projectHref = location.href;
    let isMobileScroll
    if (window.matchMedia("(max-width: 1200px)").matches) {
        isMobileScroll = true;
    } else {
        isMobileScroll = false;
    }

    if (!isMobileScroll) {
        // Ukritarm
        insertLink('ukritarm_phone', 'https://ukritarm.com.ua', 100)
        insertLink('ukritarm_laptop', 'https://ukritarm.com.ua', 200)
    } else {
        // Ukritarm
        insertLink('ukritarm_phone_img', './images/projects/ukrItArm_mob.webp', 100)
        insertLink('ukritarm_laptop_img', './images/projects/ukrItArm_desk.webp', 200)
    }
}

projectAnimation()

window.addEventListener('resize', function (event) {
    setTimeout(() => {
        location.reload();
    }, 200);
});