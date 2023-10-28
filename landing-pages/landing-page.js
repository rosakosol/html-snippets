// When hamburger clicked, toggle active class
$('.hamburger').click (function(){
    $(this).toggleClass('is-active');
  });

// When the user scrolls down 20px from the top of the document, shrink the navbar padding slightly
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "0px 15px";
  } else {
    document.getElementById("navbar").style.padding = "15px 15px";
  }
}