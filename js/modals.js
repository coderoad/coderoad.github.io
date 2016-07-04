$(function() {
  // modals
  $("#atom-coderoad").animatedModal({
    modalTarget: 'atom-coderoad-demo',
    animatedIn:'zoomIn',
    animatedOut:'zoomOut',
    beforeOpen: function() {
      $('#atom-coderoad-demo .modal-content img')
      .attr("src", "images/demos/atom-coderoad.gif");
    }
  });
  $("#builder-coderoad").animatedModal({
    modalTarget: 'builder-coderoad-demo',
    beforeOpen: function() {
      $('#builder-coderoad-demo .modal-content img')
        .attr("src", "images/demos/builder-demo.gif");
    }
  });

  // images
  $("img.lazy").lazyload({
    effect: "fadeIn",
    threshold : 200,
  });

  // smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});
