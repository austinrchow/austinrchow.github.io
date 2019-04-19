
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
