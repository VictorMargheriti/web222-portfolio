AOS.init();

// PAGE LOAD DELAY
let myVar;
const myFunction = () => {
  myVar = setTimeout(showPage, 1500);
};

// LOADING ICON
const showPage = () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
};

// RESPONSIVE HAMBURGER MENU
const hamburgerMenu = () => {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

// EMAIL VALIDATION
const emailValidation = () => {
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regEx.test(document.getElementById("email").value)) {
    return true;
  }
  alert("Please ensure you input a valid email address!");
  return false;
};

// POSTAL CODE VALIDATION
const postalValidation = () => {
    let regEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
    if(regEx.test(document.getElementById("postal").value)){
        return true;
    }
    alert("Please enter a valid Canadian Postal Code!");
    return false;
};

// DYNAMIC TEXTBOX DISPLAYS
const show1 = () => {
    console.log("Hourly Rate displayed")
    document.getElementById('div1').style.display = 'block';
    document.getElementById('div2').style.display = 'none';
  }
const show2 = () => {
    console.log("Question/Comment box displayed")
    document.getElementById('div2').style.display = 'block';
    document.getElementById('div1').style.display = 'none';
  }