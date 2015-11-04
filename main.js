console.log('linked!')

var gameBoard=document.querySelector('#board');
var resetButton=document.querySelector('.reset-button');

var square1 =document.getElementById('s1');
var square2=document.getElementById('s2');
var square3=document.getElementById('s3');
var square4=document.getElementById('s4');
var sqaure5=document.getElementById('s5');
var square6=document.getElementById('s6');
var square7=document.getElementById('s7');
var sqaure8=document.getElementById('s8');
var square9=document.getElementById('s9');


var getGameToWork = 0;

var chooseSquare = function(){
   var square = event.target;
       if (getGameToWork === 0) {
           square.content = 'X';
           square.classList.add('x');
           getGameToWork++;
           square.removeEventListener('click',chooseSquare);
   } else if (getGameToWork % 2 === 0) {
           square.textContent = 'X';
           square.classList.add('x');
           getGameToWork++;
          square.removeEventListener('click',chooseSquare);
   } else if (getGameToWork % 2 !== 0) {
           square.textContent = 'O';
           square.classList.add('o');
           getGameToWork++;
           square.removeEventListener('click',chooseSquare);
   }
};

var resetBoard = function(){
   location.reload(true);

};

gameBoard.addEventListener('click', chooseSquare);
resetButton.addEventListener('click', resetBoard);

square1.addEventListener('click',chooseSquare);
square2.addEventListener('click',chooseSquare);
square3.addEventListener('click',chooseSquare);
square4.addEventListener('click',chooseSquare);
square5.addEventListener('click',chooseSquare);
square6.addEventListener('click',chooseSquare);
square7.addEventListener('click',chooseSquare);
square8.addEventListener('click',chooseSquare);
square9.addEventListener('click',chooseSquare);
resetButton.addEventListener('click', resetBoard);





