  const LEAV_LOGO = document.getElementById('LEAV_LOGO');
  LEAV_LOGO.src = "https://raw.githubusercontent.com/fieme-one/Cacha-fitness/refs/heads/main/leaf (2).png";

  document.getElementById('NAVBAR_ICON').src = "https://raw.githubusercontent.com/fieme-one/Cacha-fitness/refs/heads/main/menu.png";
document.addEventListener("DOMContentLoaded", function() {
  const tap = document.getElementById('NAVBAR_ICON');
  const wHeight = window.innerHeight/ 1.2 + "px";
  const cancel = document.getElementById('CANCEL_IMG');
  const nav = document.getElementById('NAVBAR_APPS');
  cancel.src="https://raw.githubusercontent.com/fieme-one/Cacha-fitness/refs/heads/main/close.png";
 
   nav.style.height= "0";
  const footer_zindex = document.getElementById('FOOTER_EXP')
   
  tap.addEventListener("click", 
    function(){
      nav.style.display= "block"
       nav.style.height= wHeight;
    });
    cancel.addEventListener("click",
      function(){
        nav.style.height="0";

      });
});