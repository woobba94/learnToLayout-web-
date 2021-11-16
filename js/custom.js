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


// about radio nav function
$(document).ready(function() {
    $("input[name$='about-nav']").click(function() {
        var index = $(this).val();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $("div.about-content").hide();
        $("#about" + index).addClass('active');
        $("#about" + index).show();
    });
});
