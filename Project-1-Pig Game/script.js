

var score, roundScore, activePlayer, gamePlaying, winScore;
var score_1, score_2, current_1, current_2, player_1_panel, player_2_panel, name_1, name_2;
var prevsDice;

score_1 = document.getElementById('score-0');
score_2 = document.getElementById('score-1');
current_1 = document.getElementById('current-0');
current_2 = document.getElementById('current-1');
player_1_panel = document.querySelector('.player-0-panel');
player_2_panel =  document.querySelector('.player-1-panel');
name_1 = document.querySelector('#name-0');
name_2 = document.querySelector('#name-1');

init();

document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
    // random number
    var dice1 =  randomNumber();
    var dice2 =  randomNumber();
    var diceTot = dice1 + dice2;  
    // display the result
    var diceDOM1 = (document.querySelector('#dice-1')) ;
    diceDOM1.style.display = 'block';
    diceDOM1.src = 'dice-' + dice1 + '.png';

    var diceDOM2 = (document.querySelector('#dice-2')) ;
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-' + dice2 + '.png';


    // update the roundscore if the score is not equal to zero
       // console.log(dice,prevsDice);
        if(dice1 === 6 && dice2 === 6){
           // player looses score
            score[activePlayer] = 0 ;   
            document.querySelector('#current-'+ activePlayer).textContent = score[activePlayer];         

        }else if(dice1 !== 1 && dice2 !== 1){ //  SAME AS (dice > 1) // doesnt do type coerition
         // add score
            roundScore += diceTot;
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }
      //  prevsDice = dice;
    }
}) // end of roll btn click

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    // add current score to global score
    score[activePlayer] += roundScore

    // update the user interface
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

    // check if player won the game

        if(winScore === 0 || winScore ==  null){
            winScore = 100;
        }

        if(score[activePlayer] >= winScore  ){
            
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!!'
            displayThis('#dice-1', 'none' );
            displayThis('#dice-2', 'none' );
            document.querySelector('.player-'+activePlayer+"-panel").classList.remove('active');
            document.querySelector('.player-'+activePlayer+"-panel").classList.add('winner');

            gamePlaying = false;
        } else {
        nextPlayer();  // next player
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init ); // calling init function 

function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    current_1.textContent = 0;
    current_2.textContent = 0;

    player_1_panel.classList.toggle('active');
    player_2_panel.classList.toggle('active');
    displayThis('#dice-1', 'none' );
    displayThis('#dice-2', 'none' );

    roundScore = 0;
}

function init(){
    
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    winScore = 0;
    
    displayThis('#dice-1', 'none' );
    displayThis('#dice-2', 'none' );

    score_1.textContent = '0'; // setting value to the elements which is in the html
    score_2.textContent = '0'; // setting value to the elements which is in the html
    current_1.textContent = '0'; // setting value to the elements which is in the html
    current_2.textContent = '0'; // setting value to the elements which is in the html

    name_1.textContent = prompt("Player 1 Name : "); //'Player 1' ;
    name_2.textContent = prompt("Player 2 Name : "); //'Player 2' ;

    if((name_1.textContent) == '' && (name_2.textContent) == ''){
        name_1.textContent = "Player 1";  name_2.textContent = "Player 2";        
    }

    player_1_panel.classList.remove('winner');
    player_2_panel.classList.remove('winner');
    player_1_panel.classList.remove('active');
    player_2_panel.classList.remove('active');

    player_1_panel.classList.add('active');

}

function randomNumber(){
    return (Math.floor(Math.random() * 6) + 1);
}
function changeWinScore(){
    var newWinscore = prompt("Enter New Winning score Value");

    if((name_1.textContent) == 'Winner!!' || (name_2.textContent) == 'Winner!!' ||
            (name_1.textContent) == '' && (name_2.textContent) == ''){
                init();
    } else {
        if(score_1.textContent == newWinscore || (score_2.textContent == newWinscore)){
                alert("Cannot enter the score value..!!");
                changeWinScore();
        } else {
            winScore = newWinscore;
        }
    } 
}

function displayThis(name, style){
    document.querySelector(name).style.display = style;
}

//document.querySelector('#current-' + activePlayer).textContent = dice;  #current is id name 
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = (document.querySelector('#current-0').textContent = dice);
//console.log(x);