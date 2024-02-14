console.log("This is seperate JS file");

// option 1: add onclick function imp
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// option 2
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
document.body.style.backgroundColor = 'purple';}

// option 4
const pinkButton =document.getElementById('make-pink');
       pinkButton.addEventListener('click', makePink)
       function makePink(){
        document.body.style.backgroundColor = 'pink';
       }
    //    another option
    const makeGreenButton = document.getElementById('make-green');
    makeGreenButton.addEventListener('click',function makeGreen(){
     document.body.style.backgroundColor = 'green';
    } )

    // final imp
    document.getElementById('make-goldenRod').addEventListener('click', function(){
        document.body.style.backgroundColor='goldenRod';
       })