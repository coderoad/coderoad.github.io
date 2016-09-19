$(function() {
  var $window = $(window);

  function resize() {
      if ($window.width() > 850) {
        $('.doc-contents').addClass('sticky-docs');
        $('.sticky-docs').sticky({
          topSpacing: 100,
          bottomSpacing: 200,
        });
      } else {
        $('.doc-contents').removeClass('sticky-docs');
        $('.sticky-docs').unstick();
      }
  }

  $window.resize(resize).trigger('resize');
});
