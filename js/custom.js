// AOS ANIMATION
AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
});

$(document).ready(function () {
    $('a').on('click', function (event) {
        event.preventDefault();
        $('a').removeClass('active');
        $(this).addClass('active')
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top});
    })
});

