


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


    //  organize the carousel into teams Section

});