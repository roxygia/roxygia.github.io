
function responsiveNavigation() {
    var x = document.getElementById("main-navigation");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }