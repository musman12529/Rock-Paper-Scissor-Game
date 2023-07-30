# Rock-Paper-Scissors Game



## Description

This is a simple Rock-Paper-Scissors game implemented using HTML, CSS, and JavaScript. The game allows the player to pick their move (rock, paper, or scissors) by clicking on the corresponding buttons. The computer randomly selects its move, and the game determines the winner based on the classic Rock-Paper-Scissors rules. The player's score is updated according to the game results, and there is an option to reset the score.

## How to Play

1. Open the game in your web browser using this link https://musman12529.github.io/Rock-Paper-Scissor-Game/Rock-Paper-Scissors.html
2. Click on one of the buttons labeled with "rock," "paper," or "scissors" to make your move.
3. The computer will randomly choose its move.
4. The game will display the result, whether you win, lose, or it's a tie.
5. Your score will be updated accordingly.



## Score

The score is displayed at the bottom of the page and shows the number of wins, losses, and ties.

## Reset Score

To reset the score to zero, click on the "Reset Score" button.

## Development

The game was built using HTML, CSS, and JavaScript. The code for the game logic is located in the "rps.js" file.

### Styling

The game is styled using CSS to make it visually appealing. The background image adds to the overall look and feel.

### JavaScript Functions

- `gameResult(playerMove)`: This function determines the outcome of the game based on the player's move and the computer's randomly generated move. It updates the result and the score accordingly.

- `computerMove()`: This function generates a random move for the computer.

- `score_updater()`: This function updates the displayed score on the page.

- `screen_result()`: This function displays the game result on the page.

- `screen_move(playerMove, compMove)`: This function displays the moves chosen by the player and the computer.

