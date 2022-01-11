// knap til top

var mybutton = document.getElementById("myBtn");

// når man går 20px ned fra toppen bliver knap vist
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Når man klikker når knappen , kommer den op til toppen igen
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
