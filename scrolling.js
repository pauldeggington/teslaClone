$(document).scroll(function () {

    var scroll_pos = $(window).scrollTop()
    if (scroll_pos > 10) {

        $('.buttonTop').click(function () {

            $(".buttonTop").on("click", function () {
                $("body").scrollTop(0);
            });


        });

    }
});