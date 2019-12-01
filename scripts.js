// Right Side Menu Open Script
nav = {
  status: true,
  menu: function(){
    console.log(nav.status)
    if (nav.status){
      // here put class when menu is open - eg:
      document.querySelector(".hamburgerMenu").classList.add("menuOpen");
      nav.status = false;
    } else {
      // here put class when menu is closed - eg:
      document.querySelector(".hamburgerMenu").classList.remove("menuOpen");
      nav.status = true;
    } 
  }
}

// Hamburger Menu Animations Script
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
// Toggle class "is-active"
  hamburger.classList.toggle("is-active");
// Do something else, like open/close menu
});