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
  $('a.smooth').smoothScroll({
    offset: -70,
    direction: 'top',
    easing: 'swing',
    speed: 400,
    autoCoefficient: 2,
    preventDefault: true
  });

});
