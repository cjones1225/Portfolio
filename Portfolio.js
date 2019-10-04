$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
  
$(window).on('resize scroll', function(e) {
    $('.container').each(function() {
      if ($('#bio').isInViewport()) {
        $('a[href$="#bio"]').addClass('active')
        $('a[href$="#projects"]').removeClass('active')
        $('a[href$="#contact"]').removeClass('active')
      } else if ($('#projects').isInViewport()) {
        $('a[href$="#bio"]').removeClass('active')
        $('a[href$="#projects"]').addClass('active')
        $('a[href$="#contact"]').removeClass('active')
      } else if ($('#contact').isInViewport()) {
        $('a[href$="#bio"]').removeClass('active')
        $('a[href$="#projects"]').removeClass('active')
        $('a[href$="#contact"]').addClass('active')
      }
    });
  });