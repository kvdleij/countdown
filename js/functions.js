'use strict';
(function ($) {

    $(document).ready(function () {

        let targetDate = new Date(2018, 7, 12, 12, 23, 0);

        let timer = setInterval(function () {
            let currentTime = $.now();

            let dateDiff = targetDate - currentTime;

            let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

            if (dateDiff <= 0) {
                clearInterval(timer);
                $("[data-unit='hrs'] .countdown__digits").text("0");
                $("[data-unit='min'] .countdown__digits").text("00");
                $("[data-unit='sec'] .countdown__digits").text("00");
            } else {
                $("[data-unit='hrs'] .countdown__digits").text(parseInt(hours + (days * 24)));
                $("[data-unit='min'] .countdown__digits").text(minutes < 10 ? "0" + minutes : minutes);
                $("[data-unit='sec'] .countdown__digits").text(seconds < 10 ? "0" + seconds : seconds);
            }
        }, 500);
    });

})(jQuery);