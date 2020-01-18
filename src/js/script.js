$( () => {

    $('#slider').slick({
        slidesToShow: 4,
        arrows: false,
        dots: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
        
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