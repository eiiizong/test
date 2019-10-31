// tab 切换
$(function() {
  var tabs = $(".tabs ul li");
  var len = tabs.length;
  for (var i = 0; i < len; i++) {
    var item = $(tabs[i]);
    item.on("click", function(e) {
      for (var j = 0; j < len; j++) {
        $(tabs[j]).removeClass("active");
      }
      $(this).addClass("active");
    });
  }
});
