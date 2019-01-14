var defaultScrollPosition = $(window).scrollTop();
if (defaultScrollPosition > 10) {
    $('#myNavbar').css({
        'background-color': 'gray',
        'z-index' : '999999'
    });
} else {
    $('#myNavbar').css('background-color', 'transparent');
}

$(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition > 20) {
        $('#myNavbar').css({
            'background-color': 'gray',
            'z-index' : '999999'
        });
    } else {
        $('#myNavbar').css('background-color', 'transparent');
    }
});

$(document).ready(function() {
    $('.container').carousel({
        num: 5,
        maxWidth: 450,
        maxHeight: 300,
        distance: 50,
        scale: 0.6,
        animationTime: 1000,
        showTime: 4000
    });
});

// isotope plugin

$('.portfolio-item').isotope({
    itemSelector : '.item',
    layoutMode : 'fitRows'
});

$('.portfolio-menu .text-center a').click(function () {
    event.preventDefault();
    $('.portfolio-menu .text-center a').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
});




// count up plugin

$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 8000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
});

// count up plugin
