// Right Side Nav Menu Opening
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