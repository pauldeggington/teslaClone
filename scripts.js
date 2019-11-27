// Go to top button

var btn = $('#goToButton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Menuing system

window.nav = {
  status: false,
  menu: function(){
    if (nav.status){
      // here put class when menu is open - eg:
      document.getElementById("menu-box").className = "menu-box menuopen";
      nav.status = false;
    } else {
      // here put class when menu is closed - eg:
      document.getElementById("menu-box").className = "menu-box";
      nav.status = true;
    } 
  }
}
