
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const navbar = document.getElementsByTagName("nav"); // <nav>
const navList = document.querySelector(".nav-list"); // <ul class="nav-list">
const sections = document.getElementsByTagName("section");
// const navTitle = document.hasAttribute("[data-nav]");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

document.addEventListener('DOMContentLoaded', function(event){
  for (i = 0; i < sections.length; i++) {
    const currentSection = sections[i];
    if (currentSection.hasAttribute("data-nav")) {
      let link = document.createElement("a");
      let linkTitle = currentSection.getAttribute('data-nav');
      let linkText = document.createTextNode(linkTitle);
      link.appendChild(linkText);
      let currentSectionId = currentSection.getAttribute('id');
      link.href = `#${currentSectionId}`;
      let linkItem = document.createElement("li");
      linkItem.classList.add("nav-link");
      linkItem.appendChild(link);
      navList.appendChild(linkItem);
    }
  }
});


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// Add class 'active' to section when near top of viewport
/* My thoughts:
1. check if an element has surpassed 50% of the viewport. 
2. if so, add a class or custom behaviour
*/


// Scroll to anchor ID using scrollTO event (don't jump))

let linkItem = document.querySelectorAll('.nav-link');
/*
1. Click
object.onclick = function(){myScript};
OR
object.addEventListener("click", myScript);

2. Scroll
window.scrollTo(x-coord, y-coord)
window.scrollTo(options)
-> behavior: 'smooth'
*/


/**
 * End Main Functions
 * Begin Events
 *
*/
