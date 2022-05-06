let headerSize = 2;
let bodySize = 1.4;

const headerStep = 0.2;
const bodyStep = 0.1;

const makeBigger = () => {
   headerSize += headerStep;
   bodySize += bodyStep;
   updateFontSize();
};

const makeSmaller = () => {
   headerSize -= headerStep;
   bodySize -= bodyStep;
   updateFontSize();
};

function updateFontSize() {
   document.querySelector("h1").style.fontSize = headerSize + "em";
   document.querySelector("div.content").style.fontSize = bodySize + "em";
}

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

