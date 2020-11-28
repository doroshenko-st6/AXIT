// BUTTON UP !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

jQuery(document).ready(function() {
  const btn = $('.up-button');  
  $(window).scroll(function() {     
    if ($(window).scrollTop() > 600) {
       btn.fadeIn();
     } else {
       btn.fadeOut();
     }
   });
   btn.on('click', function(event) {
     event.preventDefault();
     $('html, body').animate({scrollTop:2}, '300');
   });
});

// STICKY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const $header = $('.header');

$(window).on('scroll', function(event) {
  const scrollTop = $('html, body').scrollTop();
  const offset = $('.social').offset().top;

  if (scrollTop > offset) {
    $header.addClass('header-sticky');

    const height = $header.outerHeight();
    $header.css('top', -height);

    $header.animate({top: 0}, 200);

  } else if (scrollTop <= 9) {
    $header.removeClass('header-sticky');
    // $header.css('top', '');
  }
});

// ANCHOR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$('[href^="#anchor"]').on('click', function (event) {
  event.preventDefault();

  const $header = $('.header');

  const headerHeight = $header.height();
  
  

  const $link = $(this);
  const selector = $link.attr('href');
  const $target = $(selector);
  const offset = $target.offset().top;

  $('html, body').animate({scrollTop: offset - headerHeight}, 300);
  $header.css('top', '');
});

// NAVIGATION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$(document).ready(function() {
  $('html, body').on('click', '.nav-toggle', function() {
    $('.nav').addClass('nav2');
    $('.exit_toggle').addClass('toggle-none');
    $('body').css('overflow', 'hidden');
  });
});

$(document).ready(function() {
  $('html, body').on('click', '.nav-list__link', function() {
    $('.nav').removeClass('nav2');
    $('.exit_toggle').removeClass('toggle-none');
    $('body').css('overflow', '');

  });
});

$(document).ready(function() {
  $('html, body').on('click', '.exit_toggle', function() {
    $('.nav').removeClass('nav2');
    $('.exit_toggle').removeClass('toggle-none');
    $('body').css('overflow', '');

  });
});

// TABS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


(function($) {
  $(function() {
  
      $('.tabs-toggle').on('click', '.tabs-toggle__item:not(.toggle-orange)', function() {
          $(this).addClass('toggle-orange').siblings().removeClass('toggle-orange')
              .closest('div.tabs').find('div.tab-text').removeClass('active').eq($(this).index()).addClass('active');
      })
  })
  })(jQuery);


// SLICK SLIDER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

$('.process-grid').slick({
  slidesToShow: 3,
  slidesToScroll: 1,

  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
  dots: true,
  responsive: [
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 1
      }
    }
    
  ]

});

$('.testimonial-grid').slick({
  slidesToShow: 3,
  slidesToScroll: 1,

  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
  dots: true,
  responsive: [
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 2
      }
    },



    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]

});

$('.pricing-grid').slick({
  slidesToShow: 2,
  slidesToScroll: 1,

  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
  dots: true,
  responsive: [
    {
      breakpoint: 981,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]

});


