AOS.init();
let myVar;

const myFunction = () => {
  myVar = setTimeout(showPage, 1500);
}

const showPage = () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

const hamburgerMenu = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }