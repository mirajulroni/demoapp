// for sticky header
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() >= 150) {
        jQuery('body').addClass('header-sticky');
    }
    else {
        jQuery('body').removeClass('header-sticky');
    }
});

jQuery(document).ready(function() {

  // for toggle menu
  jQuery('.hamburger-nav').click(function() {
      jQuery('body').toggleClass('menu-open');
  });
  jQuery('.hamburger-nav-close').click(function() {
      jQuery(' body').removeClass('menu-open');
  });
});
 


jQuery(document).ready(function() {

    jQuery('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow:true,
 
        responsive: [
         {
           breakpoint: 992,
           settings: {
            slidesToShow: 3,
           }
         },
         {
          breakpoint: 576,
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
      jQuery('.testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:true
      });

      
    });

jQuery(document).ready(function() {
    // nav arrow set in moblie view
jQuery(".mobile-menubar ul li.menu-item-has-children ").each(function() {
  jQuery(this).children("a").after("<span class='arrow'><i class='fas fa-plus'></i></span>");
});
jQuery(".mobile-menubar ul li.menu-item-has-children  .arrow").click(function(){
  if(jQuery(this).next().is(":visible"))
  {
    jQuery(this).children(".fas").removeClass("fa-minus");
    jQuery(this).children(".fas").addClass("fa-plus");
    jQuery(this).next().slideUp();
  }
  else
  {
    jQuery(".mobile-menubar ul li.menu-item-has-children  .arrow .fas").removeClass("fa-minus");
    jQuery(".mobile-menubar ul li.menu-item-has-children  .arrow .fas").addClass("fa-plus");
    jQuery(".mobile-menubar ul li.menu-item-has-children  .arrow").next().slideUp();
    jQuery(this).children(".fas").removeClass("fa-plus");
    jQuery(this).children(".fas").addClass("fa-minus");
    jQuery(this).next().slideDown();
  }
});
  });


















    