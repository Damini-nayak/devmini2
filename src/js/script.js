const gototop = document.querySelector(".gototop");
window.addEventListener('scroll', () =>{
    if(window.scrollY >= 100){
        gototop.style.bottom = "0px";
    }else{
        gototop.style.bottom = "-50px";
    }
});

var navlist = document.querySelector('.nav-list');
var nav = document.querySelector('nav');
var down = document.querySelector('#down');
var up = document.querySelector('#up');

function show() {
    setTimeout(() => {
      navlist.style.display = "grid";
    }, 500)
    nav.style.height = "400px";
    down.style.display = "none";
    up.style.display = "block";
  }
  
  function hide(){
    setTimeout(() => {
      navlist.style.display = "none";
    }, 100)
    nav.style.height = "50px";
    up.style.display = "none";
    down.style.display = "block";
  }