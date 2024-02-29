const indexAnimation = () => {
    if (location.pathname === '/') {
        location.pathname = 'index.html'
    }

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const introTl = gsap.timeline();

    //Left block first section anim
    const introBlock = gsap.utils.toArray(".intro_block_left");
    gsap.fromTo(
        introBlock, {
            autoAlpha: 0,
            y: 40,
        }, {
            duration: 2.5,
            autoAlpha: 1,
            y: 0,
        }
    );

    if (!isMobileScroll) {
        introTl.to(introBlock, {
            xPercent: -300,
            ease: "none",
            scrollTrigger: {
                duration: 2,
                trigger: '.intro',
                scrub: 1,
                start: "top 10",
                end: "+=3500",
            },
        });
    }

    //Intro block geometry first section anim
    const geometryFigure = gsap.utils.toArray(".intro_block_geometry");
    gsap.fromTo(
        geometryFigure, {
            autoAlpha: 0,
            x: 600,
            scale: 0.25,
            rotation: 200
        }, {
            duration: 2.5,
            autoAlpha: 1,
            x: 0,
            scale: 1,
            rotation: 0,
        }
    );

    if (!isMobileScroll) {
        introTl.fromTo(geometryFigure, {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            rotation: 0,
        }, {
            xPercent: -250,
            rotation: 600,
            scale: 12,
            ease: "none",
            scrollTrigger: {
                duration: 2,
                trigger: '.intro',
                scrub: 1.3,
                start: "top",
                end: "+=3500",
            },
        });
    }

    //Geometry image
    let geometryImage = gsap.utils.toArray(".intro_block_geometry_image");
    if (!isMobileScroll) {
        introTl.to(geometryImage, {
            xPercent: -100,
            rotation: -600,
            scale: 1.8,
            duration: 1,
            ease: "none",
            scrollTrigger: {
                trigger: '.intro',
                scrub: 1.3,
                start: "top",
                end: "+=3500",
            },
        });
    }


    // Проекти
    const projectsBlock = gsap.utils.toArray(".portfolio_block");

    if (!isMobileScroll) {
        introTl.fromTo(projectsBlock, {
            yPercent: 200,
            scale: 0.1,
            rotation: -7,
        }, {
            duration: 2,
            autoAlpha: 1,
            yPercent: -100,
            scale: 1.3,
            rotation: 10,
            scrollTrigger: {
                trigger: '.portfolio',
                scrub: 3,
                start: "top 10",
                end: "+=3500",
            },
        });
    }

    // Переваги
    const boxes = gsap.utils.toArray(".advantages_block_item");
    boxes.forEach((box, i) => {
        const anim = gsap.fromTo(
            box, {
                autoAlpha: 0,
                y: 100
            }, {
                duration: 2.5,
                autoAlpha: 1,
                y: 0,
            }
        );
        ScrollTrigger.create({
            animation: anim,
            delay: 2,
            trigger: '.advantages',
            start: "bottom",
        });
    });

    // Спiвпрацюючи з Onixlav
    if (!isMobileScroll) {

        const listAdvBox = gsap.utils.toArray(".listAdvantages_block_item");
        listAdvBox.forEach((boxItem, i) => {
            const duration = 2 + (i + i);
            const animItemIcon = gsap.fromTo(
                boxItem, {
                    autoAlpha: 0,
                    y: 100
                }, {
                    duration: duration,
                    autoAlpha: 1,
                    y: 0,
                    paused: true,
                }
            );
            ScrollTrigger.create({
                trigger: boxItem,
                animation: animItemIcon,
                start: "bottom -=100%",
            });
        });

        const listAdvIcon = gsap.utils.toArray(".listAdvantages_block_item_icon");
        listAdvIcon.forEach((boxItemIcon, i) => {
            const duration = 2 + (i + i);
            const animIcon = gsap.fromTo(
                boxItemIcon, {
                    autoAlpha: 0,
                    x: -100
                }, {
                    duration: duration,
                    autoAlpha: 1,
                    x: 0,
                    paused: true
                }
            );
            ScrollTrigger.create({
                trigger: boxItemIcon,
                animation: animIcon,
                delay: 5,
                start: "bottom -=100%",
            });
        });

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

        const servicesItems = gsap.utils.toArray(".services_block_item");

        servicesItems.forEach((servicesItem, i) => {
            const duration = (i + i + 1) / 4;
            const currentservices = servicesData[i];
            const animservices = gsap.from(
                servicesItem, {
                    duration: duration,
                    xPercent: -30,
                    autoAlpha: 0,
                    paused: true,
                    onStart() {
                        counter(currentservices[0], currentservices[1], currentservices[2], 10);
                    },
                    onComplete() {
                        servicesItem.classList.remove('services_block_item_active');
                        if (i === 3) {
                            setTimeout(() => {
                                document.querySelector('.services_block').style.pointerEvents = 'visible';
                            }, 1000);
                        }
                    },
                }
            );

            ScrollTrigger.create({
                animation: animservices,
                trigger: servicesItem,
                delay: 5,
                start: "bottom -=200%",
                end: "+=500",
            });
        });
    }

    // Laptop and phone disable body scroll on hover 
    document.querySelector('.contact_map').addEventListener('mouseover', (e) => {
        document.querySelector('#mouse-circle').classList.add('hidden');
    });
    document.querySelector('.contact_map').addEventListener('mouseout', (e) => {
        document.querySelector('#mouse-circle').classList.remove('hidden');
    });
}

indexAnimation()