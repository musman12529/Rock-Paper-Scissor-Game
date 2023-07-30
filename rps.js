const score={
    wins: 0,
    losses: 0,
    ties: 0
};


function computerMove(){
    let compMove="";
    const ranNum= Math.random();
    
    if (ranNum>=0 && ranNum<1/3){
        compMove="rock";
    }else if(ranNum>=1/3 && ranNum<2/3){
        compMove="paper";

    }else if(ranNum>=2/3 && ranNum<1){
        compMove="scissors";
    }
    return compMove;
    
}
let result = '';

function gameResult(playerMove) {
    
    const compMove = computerMove();
    

    if (playerMove === 'scissors') {
    if (compMove === 'rock') {
        result = 'You lose.';
    } else if (compMove === 'paper') {
        result = 'You win.';
    } else if (compMove === 'scissors') {
        result = 'Tie.';
    }

    } else if (playerMove === 'paper') {
    if (compMove === 'rock') {
        result = 'You win.';
    } else if (compMove === 'paper') {
        result = 'Tie.';
    } else if (compMove === 'scissors') {
        result = 'You lose.';
    }
    
    } else if (playerMove === 'rock') {
    if (compMove === 'rock') {
        result = 'Tie.';
    } else if (compMove === 'paper') {
        result = 'You lose.';
    } else if (compMove === 'scissors') {
        result = 'You win.';
    }
    }
    

    if (result === 'You win.') {
        score.wins += 1;
        
        } else if (result === 'You lose.') {
        score.losses += 1;
        } else if (result === 'Tie.') {
        score.ties += 1;
        }
    //alert(`you picked ${playerMove}. computer picked ${compMove}. ${result}
    //Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
    
    score_updater();
    screen_result();
    screen_move(playerMove, compMove);
}



function score_updater(){
    document.querySelector(".js-score")
.innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`


}

function screen_result(){

    if (score.wins===0&&score.losses===0&&score.ties===0){
        document.querySelector(".js-result")
.innerHTML=``

    }else{
        document.querySelector(".js-result")
.innerHTML=`${result}`

        
        
        }


    }
function screen_move(playerMove , compMove){

    if (score.wins===0&&score.losses===0&&score.ties===0){
        document.querySelector(".js-move")
.innerHTML=``

    }else{
        document.querySelector(".js-move")
.innerHTML=`You Picked <img class="moveemoji" src="images/${playerMove}-emoji.png" > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Computer Picked <img class="moveemoji" src="images/${compMove}-emoji.png" > `


}



}
    