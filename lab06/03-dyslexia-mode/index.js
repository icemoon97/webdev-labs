/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

document.querySelector("#dyslexia-toggle").addEventListener('click', function() {
  if (dys_mode) {
    document.querySelector("body").className = "dyslexia-mode";
  } else {
    document.querySelector("body").className = "default";
  }
  dys_mode = !dys_mode
  
});

let dys_mode = false;