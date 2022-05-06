/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/


document.querySelector("#ocean").addEventListener('click', function() {
   document.querySelector("body").className = "ocean";
});
document.querySelector("#desert").addEventListener('click', function() {
   document.querySelector("body").className = "desert";
});
document.querySelector("#default").addEventListener('click', function() {
   document.querySelector("body").className = "default";
});
document.querySelector("#high-contrast").addEventListener('click', function() {
   document.querySelector("body").className = "high-contrast";
});