

var score, roundScore, activePlayer, gamePlaying, winScore;

init();

function randomNumber(){
    return (Math.floor(Math.random() * 6) + 1);
}

var prevsDice;
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
   // var winScore = document.getElementById('win-score').value ;

    if(winScore === 0 || winScore ==  null){
        winScore = 100;
    }

    if(score[activePlayer] >= winScore  ){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!!'
        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';

        document.querySelector('.player-'+activePlayer+"-panel").classList.remove('active');
        document.querySelector('.player-'+activePlayer+"-panel").classList.add('winner');

        gamePlaying = false;

    } else {
        // next player
        nextPlayer();
    }
    }
})

document.querySelector('.btn-new').addEventListener('click', init ); // calling init function 

function nextPlayer(){

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            
            // if(activePlayer === 0){
            //         activePlayer = 1;
            // } else {
            //     activePlayer = 0;
            // }
            
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('#dice-1').style.display = 'none';
            document.querySelector('#dice-2').style.display = 'none';

            // document.querySelector('.player-0-panel').classList.remove('active');
            // document.querySelector('.player-1-panel').classList.add('active');
            roundScore = 0;
}

function init(){
    
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0'; // setting value to the elements which is in the html
    document.getElementById('score-1').textContent = '0'; // setting value to the elements which is in the html

    document.getElementById('current-0').textContent = '0'; // setting value to the elements which is in the html
    document.getElementById('current-1').textContent = '0'; // setting value to the elements which is in the html
    
    document.querySelector('#name-0').textContent = prompt("Player 1 Name : "); //'Player 1' ;
    document.querySelector('#name-1').textContent = prompt("Player 2 Name : ");//'Player 2' ;

    if((document.querySelector('#name-0').textContent) == '' && (document.querySelector('#name-1').textContent) == ''){
        document.querySelector('#name-0').textContent = "Player 1";
        document.querySelector('#name-1').textContent = "Player 2";        
    }

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}

function changeWinScore(){
    var newWinscore = prompt("Enter New Winning score Value");
  //  console.log(newWinscore);

    if((document.querySelector('#name-0').textContent) == 'Winner!!' || 
        (document.querySelector('#name-1').textContent) == 'Winner!!' ||
            (document.querySelector('#name-0').textContent) == '' && (document.querySelector('#name-1').textContent) == ''){
                init();
    } else {
        if(document.getElementById('score-0').textContent == newWinscore ||
                (document.getElementById('score-1').textContent == newWinscore)){
                alert("Cannot enter the score value..!!");
                changeWinScore();
        } else {
            winScore = newWinscore;
        }
    } 
}

//document.querySelector('#current-' + activePlayer).textContent = dice;  #current is id name 
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = (document.querySelector('#current-0').textContent = dice);
//console.log(x);