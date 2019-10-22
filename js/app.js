window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

let navItem = document.querySelectorAll('*[id]');

var navItemArr = Array.from(navItem);



/* Navigation

1. Load DOM fully
2. Listen for events
  --> section with IDs = nav items
3. create nav item
  <li><a href="#{name of ID}">{data-nav}</a></li>
5. add nav item to DOM and insert into structure
*/


/*
 <section id="firstSection" data-name="First">
 Then in the app.js file, I initialized a variable to hold all the nav items, say menuItems. Grab all the sections using document.getElement..., save that in a variable, say content . Then, in the function, use a for-loop to iterate over the content variable and push each section's dataset value in the menuItems` array.

menuitems.push( content[x].dataset.name);
}
Now all you have to do is iterate over the menuItems array and create a <li> element, populate it with each item in the array and append it to the <ul> element.

Let me know if that helps...

I gave each section a 'data-name' attribute with the value that I wanted that section of the menu to have. <section id="firstSection" data-name="First"> Then in the app.js file, I initialized a variable to hold all the nav items, say menuItems. Grab all the sections using document.getElement..., save that in a variable, say content . Then, in the function, use a for-loop to iterate over the content variable and push each section's dataset value in the menuItems` array.

menuitems.push( content[x].dataset.name);
}
Now all you have to do is iterate over the menuItems array and create a <li> element, populate it with each item in the array and append it to the <ul> element.

Let me know if that helps...

*/

/*
document.getElementById().querySelectorAll("data-nav");


document.getElementById().appendChild(node);



// select sections

elementList = parentNode.querySelectorAll(selectors);

// select ID
var element = document.getElementById(id);


var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);
*/

/*
- nav menu should dinamically update based on the amount of content that is added to the page.
  --> when a section is added it should appear as a menu item

  1. listen to an event for the navigation to be built.
  2. place of the nav menu
  3. where is the text coming from for the nav menu

- the section actively being viewed should be differentiated in some way.

- when a user clicks on a navigation item, the item should scroll you to the appropriate section rather than giving you the default jump.
*/

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


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
