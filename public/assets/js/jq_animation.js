export const a_fadeIn = (el, time) => {
    el.style.display = 'block';
    el.style.opacity = 0;

    var last = +new Date();
    var tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
}

export const a_fadeOut = (el, time) => {

    el.style.opacity = 1;

    var last = +new Date();
    var tick = function () {
        el.style.opacity = +el.style.opacity - (new Date() - last) / time;
        last = +new Date();

        if (+el.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        } else {
            el.style.display = 'none';
        }
    };

    tick();
}


export const a_AnimateLeft = (elem, isOpen) => {
    var left = isOpen ? -100 : 0;

    function frame() {
        if (isOpen === true) {
            left++;
            elem.style.left = left + '%';

            if (left == 0) clearInterval(id)
        } else {
            left--;
            elem.style.left = left + '%';

            if (left == -100) {
                clearInterval(id)
            }
        }
    }

    var id = setInterval(frame, 4)
}