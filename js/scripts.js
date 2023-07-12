console.log("Hi, welcome to my portfolio site!");

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
	var isMobileBreakpoint = window.innerWidth < 641

  if (x.className === 'navtoggle' && isMobileBreakpoint) {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

// Get the button:
let fabbutton = document.getElementById("fabbutton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 750 ||
    document.documentElement.scrollTop > 750
  ) {
    fabbutton.style.display = "block";
  } else {
    fabbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
