
$(function(){
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});

(function(document){
  var div = document.getElementById('container');
  var icon = document.getElementById('icon');
  var open = false;

  div.addEventListener('click', function(){
    if(open){
      icon.className = 'navbar-toggler-icon';
    } else{
      icon.className = 'navbar-toggler-icon open';
    }

    open = !open;
  });
})(document);


$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery").fadeTo(100, 0.1);
$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery").fadeTo(300, 1);
}, 300);
});
});
