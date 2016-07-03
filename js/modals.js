$(function() {
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
});
