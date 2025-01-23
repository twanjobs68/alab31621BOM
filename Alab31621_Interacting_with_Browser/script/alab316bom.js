//Lesson 316.2 - The Browser Object Model
//Browser Object Model(BOM)
/*Group of objects to interact with the Browser
*/
/*Top Hierarchy is the "Window object"-provide access to the methods(all the objects below) in the Bom throuh
its child objects. indirectly or FileSystemDirectoryHandle(window.document 
is a property of the window object)*/
//5 objects under the window object
//location object - information about current URL
//history object - past urls
//screen object-information about the users screen
//navigator object - information about the users browser
//document object - Represents the current webpage and forms of the Dom

// All Global Functions and Objects are members of our window object.
//example console.log; is the same as window.console.log(); just as document.getElementByID(); is the same
//as windo.document.getElementById();
//Iframes(page 8 of lesson 316.2)

//window object properties

/*closed
default
Status
inner height
InnerWidth
outerheight
Outterwidth
location
name
pageXOffset
pageYOffset
screenX
screenY
window.alert()
window.prompt()
window.confirm()
window.open()
window.focus()
window.blur()
wndow.close()
window.print()
window.scroll()
window.stop()*/
//MDN web docs

//Documentation is located at developer.mozilla.org/en-US/docs/Web/API/Window
//w3schools.com

let myWindow;

function newWindow() {
  myWindow = window.open(
    "https://perscholas.org/",
    "perscholas",
    "width=800, height=400, resizable=yes, scrollbars=yes, location=yes"
  );
  myWindow.focus();
}

// Note that the close() method can only
// affect windows created by the open() method.
// You cannot close the current browsing window
// using this method, for example.
function closeWindow() {
  myWindow.close();
}

// A sneak peek at event handling!
// This will be covered in depth during a future lesson.
document.getElementById("openWindowBtn").addEventListener("click", newWindow);
document
  .getElementById("closeWindowBtn")
  .addEventListener("click", closeWindow);

//   //SCREEN OBJECT - open the window 75% and keep it centered. page 16or 17

//   // Get information about the user's screen.
// // We'll use this information below to create
// // a new window that is 75% of the user's screen,
// // and place it centered on their screen.
// let availH = window.screen.availHeight;
// let availW = window.screen.availWidth;

// let myWindow;

// function newWindow() {
//   myWindow = window.open(
//     "https://perscholas.org/",
//     "perscholas",
//     `width=${availW * 0.75}, height=${availH * 0.75}, left=${
//       availW * 0.125
//     }, top=${availH * 0.125}, resizable=yes, scrollbars=yes, location=yes`
//   );
//   myWindow.focus();
// }

// function closeWindow() {
//   myWindow.close();
// }

// // A sneak peek at event handling!
// // This will be covered in depth during a future lesson.
// document.getElementById("openWindowBtn").addEventListener("click", newWindow);
// document
//   .getElementById("closeWindowBtn")
//   .addEventListener("click", closeWindow);

// //History Object - page 18
// // View the current state (which will start as null).
// // Notice how none of the URL information
// // is NOT included in this state object.
// console.log(window.history.state);

// // In order for this example to work, you'll
// // need to navigate to https://sxwyw7.csb.app/(just copy 
// in new tab, enter and then click on go back to see functionality at work)
// // from a browser window that has already been
// // visiting other pages.
// const myBtn = document.getElementById("myBtn");
// if (myBtn)
//   myBtn.addEventListener("click", () => {
//     window.history.back();
//   });

  //Navigator Object
//   const app = document.getElementById("app");

// const uaData = window.navigator.userAgent;

// // Let's use some DOM manipulation to
// // create a new structure for holding
// // the userAgent data:
// const list = (app
//   .appendChild(document.createElement("ul"))
//   .appendChild(document.createElement("li")).textContent = uaData);

/*ALAB316.2.1 Requirements
1. Create a simple guessing game that pushes users toward the correct answer in some iterative way. 
The game does not need to be practical or complicated.
2. Use window object methods to gather input from the user and display information to the user.
3. Use DOM manipulation to give a visual indication of the game's progress in some way.*/