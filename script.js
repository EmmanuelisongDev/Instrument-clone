const ham  = document.querySelector('.ham');
const navMenu = document.querySelector('.nav-menu');
var prevScrollpos = window.pageYOffset;
function appD (){

      if(navMenu.classList.contains('hidden')){
            navMenu.classList.remove('hidden');

      }else{
            navMenu.classList.add('hidden');
      }
}
window.onscroll = function (){
      var currentScrollPos = window.pageYOffset;

      if(prevScrollpos > currentScrollPos){
            document.querySelector('#bar').style.top = "0";
      }else{
            document.querySelector('#bar').style.top = "-50px";

      }
      prevScrollpos = currentScrollPos;
}

ham.addEventListener("click", appD)


