
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
const fragment = document.createDocumentFragment();

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


// Scroll to anchor ID using scrollTO event (don't jump))


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
