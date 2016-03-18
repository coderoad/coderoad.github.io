$(function() {
  $(".gif").hover(function() {
    var t = $(this).attr("src"),
      e = t.substring(0, t.lastIndexOf(".")) + ".gif";
    $(this).attr("src", e)
  }, function() {
    var t = $(this).attr("src"),
      e = t.substring(0, t.lastIndexOf(".")) + ".png";
    $(this).attr("src", e)
  })
});
