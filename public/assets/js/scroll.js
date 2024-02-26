let isOnce = true;
let isMobileScroll = false;

document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    ScrollTrigger.clearScrollMemory("manual");

    // Disable scroll on 992
    ScrollTrigger.matchMedia({
        "(max-width: 1200px)": function () {
            ScrollTrigger.disable();
            isMobileScroll = true;
        },
    });
    window.addEventListener("resize", function (event) {
        setTimeout(() => {
            location.reload();
        }, 200);
    });

    //Header animation
    const headerBlock = gsap.utils.toArray("header");
    gsap.fromTo(
        headerBlock, {
            autoAlpha: 0,
            y: -100,
        }, {
            duration: 2,
            autoAlpha: 1,
            y: 0,
        }
    );

    console.log("🚀 ~ isMobileScroll:", isMobileScroll);
    if (isMobileScroll) {
        return null;
    }
    // На главной на третьем слайде меняется цвет иконок сверху
    const getPageName = window.location.pathname.split("/");
    const isProgectPage = getPageName[getPageName.length - 1] === "projects";

    let sections = gsap.utils.toArray("section"),
        nav = gsap.utils.toArray(".bottom_nav_link"),
        scrollToContact = !isProgectPage ?
        gsap.utils.toArray("#scroll_to_Contact") :
        undefined,
        getMaxWidth = () =>
        sections.reduce((val, section) => val + section.offsetWidth, 0),
        maxWidth = getMaxWidth(),
        scrollSpeed = 2,
        snapProgress,
        lastScrollTween = Date.now(),
        tl = gsap.timeline();

    tl.to(sections, {
        x: () => window.innerWidth - maxWidth,
        duration: 1,
        ease: "none",
    });

    const setActiveLink = (progress) => {
        const currentSlide = Math.ceil(progress / 0.2);
        const magneticLink = document.querySelectorAll(
            ".bottom_nav_link_magnetic_text"
        );

        const isMinusOneForProject = isProgectPage ? 1 : 0;
        const isMinusOneForIndex = location.pathname === "/" ? 1 : 0;

        for (let i = 1; i <= 6; i++) {
            if (currentSlide == 2 && !isProgectPage) {
                $(".header_social_link").addClass("invert_filter");
                document
                    .querySelector(".tooltip__trigger")
                    .classList.add("invert_filter");
            } else {
                $(".header_social_link").removeClass("invert_filter");
                document
                    .querySelector(".tooltip__trigger")
                    .classList.remove("invert_filter");
            }

            if (magneticLink[i - isMinusOneForIndex] !== undefined) {
                if (
                    i - isMinusOneForIndex <=
                    currentSlide - isMinusOneForProject
                ) {
                    magneticLink[i - isMinusOneForIndex].classList.add(
                        "bottom_nav_link_active"
                    );
                } else {
                    magneticLink[i - isMinusOneForIndex].classList.remove(
                        "bottom_nav_link_active"
                    );
                }
            }
        }
    };

    ScrollTrigger.create({
        animation: tl,
        trigger: "#container",
        pin: true,
        scrub: 1,
        snap: {
            snapTo: directionalSnap(tl),
            duration: 2,
        },
        start: "top",
        end: () => "+=" + maxWidth / scrollSpeed,
        onUpdate: ({
            progress
        }) => {
            setActiveLink(progress.toFixed(2));
            console.log("кайф");
        },
        invalidateOnRefresh: true,
    });

    function init() {
        isOnce = true;

        gsap.set(sections, {
            x: 0,
        });
        maxWidth = getMaxWidth();
        let position = 0,
            distance = maxWidth - window.innerWidth;
        tl.add("label0", 0);

        sections.forEach((section, i) => {
            let progress = position;
            position += section.offsetWidth / distance;
            tl.add("label" + (i + 1), position);
            nav[i].onclick = () => {
                snapProgress = progress;
                lastScrollTween = Date.now();
                gsap.to(window, {
                    scrollTo: (maxWidth / scrollSpeed) * progress,
                    duration: 1,
                    overwrite: "auto",
                });
            };
            if (scrollToContact !== undefined) {
                scrollToContact[0].onclick = () => {
                    snapProgress = progress;
                    lastScrollTween = Date.now();
                    gsap.to(window, {
                        scrollTo: (maxWidth / scrollSpeed) * progress,
                        duration: 1,
                        overwrite: "auto",
                    });
                };
            }
        });
    }

    init();
    ScrollTrigger.addEventListener("refreshInit", init);
    ScrollTrigger.refresh();

    function directionalSnap(timeline) {
        return (value, st) => {
            if (Date.now() - lastScrollTween < 3000) {
                return snapProgress;
            }

            let a = [],
                labels = timeline.labels,
                duration = timeline.duration(),
                p,
                i;
            for (p in labels) {
                a.push(labels[p] / duration);
            }
            a.sort((a, b) => a - b);
            if (st.direction > 0) {
                for (i = 0; i < a.length; i++) {
                    if (a[i] >= value) {
                        return a[i];
                    }
                }
                return a.pop();
            } else {
                i = a.length;
                while (i--) {
                    if (a[i] <= value) {
                        return a[i];
                    }
                }
            }

            return a[0];
        };
    }

    //Progress bar animation
    const progBar = gsap.utils.toArray(".bottom_nav");
    gsap.fromTo(
        progBar, {
            autoAlpha: 0,
            y: 100,
        }, {
            duration: 2,
            autoAlpha: 1,
            y: 0,
        }
    );

    // Progress bar timeline
    let progressBar = gsap.utils.toArray("#progress");
    // gsap.to(progressBar, {
    //     x: () =>
    //         -(progressBar.scrollWidth - document.documentElement.clientWidth) +
    //         "px",
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: progressBar,
    //         start: "top top",
    //         end: () => "+=" + progressBar.offsetWidth,
    //         scrub: true,
    //         pin: true,
    //         anticipatePin: 1,
    //     },
    // });
    gsap.to("#progress", {
        value: 100,
        ease: "none",
        scrollTrigger: {
            scrub: 0.3,
        },
    });

    document
        .querySelector(".contact_row_info")
        .addEventListener("mouseover", () => {
            document
                .querySelector(".contact_map")
                .classList.add("small_contact_map");
        });

    document
        .querySelector(".contact_row_info")
        .addEventListener("mouseout", () => {
            document
                .querySelector(".contact_map")
                .classList.remove("small_contact_map");
        });
});