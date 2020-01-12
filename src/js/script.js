$( () => {

    $('#slider').slick({
        slidesToShow: 4,
        arrows: false,
        dots: false,
        
    });

    $slick = $('#slider');
    $next = $('.icon-arrow-right');
    $prev = $('.icon-arrow-left');

    $next.on('click', () => {
        $slick.slick('slickNext');
    })

    $prev.on('click', () => {
        $slick.slick('slickPrev');
    })
    
});