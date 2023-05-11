import {
    a_fadeIn,
    a_fadeOut,
    a_AnimateLeft
} from "./jq_animation.js";

window.history.scrollRestoration = "manual";

// Add href to index page
const currentLocation = location.pathname;
if (currentLocation !== '/') {
    document.querySelector('.header_logo_link').setAttribute('href', '/');
}

// Set active link for
const setActiveLink = (href) => {
    $(`.mobile_menu_nav_link_main[href='${href}']`, ).addClass("mobile_menu_nav_link_main_active");
}

setActiveLink(currentLocation)



//Magnetic nav links
const magnetFunction = (magnetClass) => {
    if (window.matchMedia("(max-width: 1200px)").matches) {
        return
    }
    let magnets = document.querySelectorAll(magnetClass);
    let strength = 60;
    magnets.forEach((magnet) => {
        magnet.addEventListener("mousemove", moveMagnet);
        magnet.addEventListener("mouseout", function (event) {
            gsap.to(event.currentTarget, 1, {
                x: 0,
                y: 0,
                ease: Power4.easeOut
            });
        });
    });

    function moveMagnet(event) {
        let magnetButton = event.currentTarget;
        let bounding = magnetButton.getBoundingClientRect();
        gsap.to(magnetButton, 1, {
            x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
                strength,
            y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
                strength,
            ease: Power4.easeOut,
        });
    }
}

magnetFunction('.header_logo')
magnetFunction('.header_link_to_index')
magnetFunction('.header_social_link')
magnetFunction('.bottom_nav_link_magnetic')
magnetFunction('.intro_block_left_button')
magnetFunction('.tooltip__trigger')
magnetFunction('.portfolio_block_link')
magnetFunction('.contact_form_submit_magnet')
magnetFunction('.services_block_item_link')

// Phone popup
{
    const config = {
        amras: {
            in: {
                base: {
                    duration: 1,
                    delay: 50,
                    easing: 'linear',
                    opacity: 1
                },
                path: {
                    duration: 800,
                    delay: 100,
                    easing: 'easeOutElastic',
                    delay: function (t, i) {
                        return i * 20;
                    },
                    scale: [0, 1],
                },
                content: {
                    duration: 300,
                    delay: 250,
                    easing: 'easeOutExpo',
                    scale: [0.7, 1],
                    opacity: {
                        value: 1,
                        easing: 'linear',
                        duration: 100
                    }
                },
                trigger: {
                    translateY: [{
                            value: '50%',
                            duration: 100,
                            easing: 'easeInQuad'
                        },
                        {
                            value: ['-50%', '0%'],
                            duration: 100,
                            easing: 'easeOutQuad'
                        }
                    ],
                    opacity: [{
                            value: 0,
                            duration: 100,
                            easing: 'easeInQuad'
                        },
                        {
                            value: 1,
                            duration: 100,
                            easing: 'easeOutQuad'
                        }
                    ],
                    color: {
                        value: '#6fbb95',
                        duration: 1,
                        delay: 100,
                        easing: 'easeOutQuad'
                    }
                }
            },
            out: {
                base: {
                    duration: 1,
                    delay: 450,
                    easing: 'linear',
                    opacity: 0
                },
                path: {
                    duration: 500,
                    easing: 'easeOutExpo',
                    delay: function (t, i, c) {
                        return (c - i - 1) * 40;
                    },
                    scale: 0
                },
                content: {
                    duration: 300,
                    easing: 'easeOutExpo',
                    scale: 0.7,
                    opacity: {
                        value: 0,
                        duration: 100,
                        easing: 'linear'
                    }
                },
                trigger: {
                    translateY: [{
                            value: '-50%',
                            duration: 100,
                            easing: 'easeInQuad'
                        },
                        {
                            value: ['50%', '0%'],
                            duration: 100,
                            easing: 'easeOutQuad'
                        }
                    ],
                    opacity: [{
                            value: 0,
                            duration: 100,
                            easing: 'easeInQuad'
                        },
                        {
                            value: 1,
                            duration: 100,
                            easing: 'easeOutQuad'
                        }
                    ],
                    color: {
                        value: '#666',
                        duration: 1,
                        delay: 100,
                        easing: 'easeOutQuad'
                    }
                }
            }
        }
    };

    const tooltips = Array.from(document.querySelectorAll('.tooltip'));

    class Tooltip {
        constructor(el) {
            this.DOM = {};
            this.DOM.el = el;
            this.type = this.DOM.el.getAttribute('data-type');
            this.DOM.trigger = this.DOM.el.querySelector('.tooltip__trigger');
            this.DOM.triggerSpan = this.DOM.el.querySelector('.tooltip__trigger-text');
            this.DOM.base = this.DOM.el.querySelector('.tooltip__base');
            this.DOM.shape = this.DOM.base.querySelector('.tooltip__shape');
            this.isOpen = false;
            if (this.DOM.shape) {
                this.DOM.path = this.DOM.shape.childElementCount > 1 ? Array.from(this.DOM.shape.querySelectorAll('path')) : this.DOM.shape.querySelector('path');
            }
            this.DOM.deco = this.DOM.base.querySelector('.tooltip__deco');
            this.DOM.content = this.DOM.base.querySelector('.tooltip__content');

            this.DOM.letters = this.DOM.content.querySelector('.tooltip__letters');
            if (this.DOM.letters) {
                // Create spans for each letter.
                charming(this.DOM.letters);
                // Redefine content.
                this.DOM.content = this.DOM.letters.querySelectorAll('span');
            }
            this.initEvents();
        }
        initEvents() {
            this.mouseClick = () => {
                if (!this.isOpen) {
                    this.isOpen = true;
                    this.mouseTimeout = setTimeout(() => {
                        this.isShown = true;
                        this.show();
                    }, 75);
                } else {
                    this.isOpen = false;
                    clearTimeout(this.mouseTimeout);
                    if (this.isShown) {
                        this.isShown = false;
                        this.hide();
                    }

                }
            }
            this.DOM.trigger.addEventListener('click', this.mouseClick);
        }
        show() {
            this.animate('in');
            this.DOM.base.style.pointerEvents = 'visible'
        }
        hide() {
            this.animate('out');
            this.DOM.base.style.pointerEvents = 'none'
        }
        animate(dir) {
            if (config[this.type][dir].base) {
                anime.remove(this.DOM.base);
                let baseAnimOpts = {
                    targets: this.DOM.base
                };
                anime(Object.assign(baseAnimOpts, config[this.type][dir].base));
            }
            if (config[this.type][dir].shape) {
                anime.remove(this.DOM.shape);
                let shapeAnimOpts = {
                    targets: this.DOM.shape
                };
                anime(Object.assign(shapeAnimOpts, config[this.type][dir].shape));
            }
            if (config[this.type][dir].path) {
                anime.remove(this.DOM.path);
                let shapeAnimOpts = {
                    targets: this.DOM.path
                };
                anime(Object.assign(shapeAnimOpts, config[this.type][dir].path));
            }
            if (config[this.type][dir].content) {
                anime.remove(this.DOM.content);
                let contentAnimOpts = {
                    targets: this.DOM.content
                };
                anime(Object.assign(contentAnimOpts, config[this.type][dir].content));
            }
            if (config[this.type][dir].trigger) {
                anime.remove(this.DOM.triggerSpan);
                let triggerAnimOpts = {
                    targets: this.DOM.triggerSpan
                };
                anime(Object.assign(triggerAnimOpts, config[this.type][dir].trigger));
            }
            if (config[this.type][dir].deco) {
                anime.remove(this.DOM.deco);
                let decoAnimOpts = {
                    targets: this.DOM.deco
                };
                anime(Object.assign(decoAnimOpts, config[this.type][dir].deco));
            }
        }
    }

    const init = (() => tooltips.forEach(t => {
        const phoneTooltip = new Tooltip(t);
        // Listen if click outside

        document.addEventListener("click", (e) => {
            const informationParentBlock = document.querySelector(".tooltip");
            if (!informationParentBlock.contains(e.target)) {
                phoneTooltip.hide();
                phoneTooltip.isOpen = false;
            }
        });
    }))();
};



const paperFront = document.getElementById('body_mobile_block');
const mobileMenuBg = document.querySelector('.mobile_menu_bg');
const mobileMenu = document.getElementById('mobile_menu');
const bodyMobile = document.querySelector('.body_mobile');
const hamburger = document.querySelector('.header_hamburger');
const closeButton = document.querySelector('.mobile_menu_close')

const offset = 1800;
const pageMobileBlock = document.getElementById('body_mobile_block');

var pageHeight = pageMobileBlock.offsetHeight;
pageHeight += parseInt(window.getComputedStyle(pageMobileBlock).getPropertyValue('margin-top'));
pageHeight += parseInt(window.getComputedStyle(pageMobileBlock).getPropertyValue('margin-bottom'));
var isOpenMobileMenu = false;

const open = () => {
    isOpenMobileMenu = true;
    if (window.matchMedia("(max-width: 1200px)").matches) {
        mobileMenu.style.display = 'inline-block';
        bodyMobile.classList.add('tilt');
        hamburgerFix(true);
    } else {
        $('.mobile_menu_bg').fadeIn();
        $('#mobile_menu').animate({
                left: "0px",
            },
            "slow"
        );

        hamburgerFix(true);
    }
}
const close = () => {
    isOpenMobileMenu = false;
    if (window.matchMedia("(max-width: 1200px)").matches) {
        bodyMobile.classList.remove('tilt');
        hamburgerFix(false);
    } else {
        $('.mobile_menu_bg').fadeOut();
        $('#mobile_menu').animate({
                left: "-100%",
            },
            "slow"
        );

        hamburgerFix(false);
    }
}

// Scroll to link
const scrollToLink = (hash) => {
    if (isOpenMobileMenu == true) {
        close();
    }

    const linkHash = hash.attributes[0].textContent;
    const destination = document.getElementById(linkHash).offsetTop;
    setTimeout(() => {
        gsap.to(window, {
            scrollTo: destination,
            duration: 0.3
        });
    }, 100);

    return false;
}

const updateTransformOrigin = () => {
    const scrollTop = window.scrollY;
    const equation = (scrollTop + offset) / pageHeight * 100;

    paperFront.style.transformOrigin = 'center ' + equation + '%';
}

// Hamburger icon fix to keep its position
const hamburgerFix = (isOpening) => {
    if (isOpening) {
        document.querySelector('.header_hamburger').style.pointerEvents = "none";
        document.querySelector('.header_hamburger').style.opacity = "0";
    } else {
        setTimeout(function () {
            document.querySelector('.header_hamburger').style.pointerEvents = "visible";
            document.querySelector('.header_hamburger').style.opacity = "1";
        }, 300);
    }
}

hamburger.addEventListener("click", () => {
    open()
});

closeButton.addEventListener("click", () => {
    close()
});

mobileMenuBg.addEventListener("click", () => {
    close()
});

const scrollToLinkInit = (id) => {
    document.getElementById(id).addEventListener("click", (e) => {
        scrollToLink(e.target)
    });
}

if (currentLocation === '/') {
    scrollToLinkInit('scroll_to_Contact');
}

var isScrolling;

updateTransformOrigin()
// Listen and update when scroll animation end
window.addEventListener('scroll', function () {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
        updateTransformOrigin()
    }, 66);
}, false);


// Preloader
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        document.body.classList.add('body_visible');
        a_fadeOut(preloader, 400);

        setTimeout(() => {
            preloader.display = 'none';
        }, 410);
    }, 900);

    // Cursor circle
    if (window.matchMedia("(min-width: 991px)").matches) {
        const mouse_circle = document.getElementById('mouse-circle');
        document.addEventListener('mousemove', function (e) {
            setTimeout(function () {
                mouse_circle.style.left = e.clientX + 'px';
                mouse_circle.style.top = e.clientY + 'px';
            }, 50);
        });

        // Scale cursor circle if click
        document.addEventListener('mousedown', function () {
            mouse_circle.style.transform = 'scale(0.8)';
        });
        document.addEventListener('mouseup', function () {
            setTimeout(function () {
                mouse_circle.style.transform = 'scale(1)';
            }, 50);
        });
    }
});