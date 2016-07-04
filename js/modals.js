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


  const scrollnow = function(e) {
    var target;
    if (e) {
      e.preventDefault();
      target = this.hash;
    } else {
      target = location.hash;
    }
    $.smoothScroll({
      offset: -70,
      easing: 'swing',
      speed: 400,
      autoCoefficient: 2,
      preventDefault: true,
      scrollTarget: target
    });
  };

  if (location.hash) {
    $('html, body').scrollTop(0).show();
      scrollnow();
    }

  $('a[href*="/"][href*=#]').each(function(){
    if (this.pathname.replace(/^\//,'') == location.pathname.replace(/^\//,'') && this.hostname == location.hostname) {
      $(this).attr("href", this.hash);
    }
  });

  $('a[href^=#]:not([href=#])').click(scrollnow);

});
