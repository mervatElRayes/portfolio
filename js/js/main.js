// start hamburger variable for make the menu transform to "X" 
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
// this variable prepare to make the navLink hide and show with hamburger-menu smoothly
  const navList = document.querySelector('.nav-list');
let navLink = false;
// start hamburger make the menu transform to "X" 
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;

  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }

// here execute  the navLink hide and show with hamburger-menu smoothly

    if (!navLink) {
    navList.classList.add('open');
    navLink = true;

  } else {
    navList.classList.remove('open');
    navLink = false;
  }
});


//Start recognaize button that make load with scroll to top
const halfCircles = document.querySelectorAll(".half-circle");
const halfCircleTop = document.querySelector(".half-circle-top");
const progressBarCircle = document.querySelector(".progressbar-circle");




document.addEventListener("scroll", () => {
  const pageViewportHeight = window.innerHeight
  const pageHeight = document.documentElement.scrollHeight
  const scrolledPortion = window.pageYOffset
  const scrolledPortionDegree = (scrolledPortion / (pageHeight - pageViewportHeight)) * 360
  // const scrolledPortionPercent = Math.floor(scrolledPortionDegree / 360 * 100) ...... we can run this if we want use counter

  //"this spicialize for progress circle that up page to UP" .... progressBarCircle.textContent = `${scrolledPortionPercent} %` ...... we can run this if we want use counter
    halfCircles.forEach(el => {
      el.style.transform = `rotate(${scrolledPortionDegree}deg)`
      if (scrolledPortionDegree >= 180) {
        halfCircles[0].style.transform = `rotate(180deg)`
        halfCircleTop.style.opacity = '0', halfCircleTop.style.backgroundColor = "rgb(203 184 184)"
      } else {
        halfCircleTop.style.opacity = '1'
      }
    }); 
  
  });


  
  // start the right section that content of name, email ... atc ====>>> into contact section
  function validation() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;


    error_message.style.padding = "10px";

    if (name.length < 5) {
      text = "Please Enter Valid Name";
      error_message.innerHTML = text;
      return false;
    }

    if (subject.length < 10) {
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }

    if (isNaN(phone) || phone.length != 10) {
      text = "Please Enter Valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6) {
      text = "Please Enter Valid Email";
      error_message.innerHTML = text;
      return false;
    }

    if (message.length <= 140) {
        
      text = "Please Enter More Than 140 charactrs";
      error_message.innerHTML = text;
      return false;

    }

    alert("form submitted Successfully")
    return true;
       
  }
  


