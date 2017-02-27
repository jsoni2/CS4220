###Week 4 Homework - Due 3/05/17 at 11:59pm (100 pts)

Create a Mystery Word Game.

####Guidelines

(1) The app should run from the command line. <br />
- The app should display a help menu by typing: <br />
```node app.js -h```
- The app should allow you to pick a difficulty (easy or hard): <br />
```node cli.js --difficulty easy``` or  ```node cli.js -d easy```

<br />
[2] Based on the diffculty the app should pick a word at random. Using the hw4._words.js file on github.
- The word should NOT be hard coded.
- All words for the app to use should be contained in a separate file(s).

<br />
[3] The app should follow the rules that are outlined in the below section on How the Game is Played.

<br />
[4] While playing the game the user should be able to:
- Get a hint. <br />
  - (Fills in a letter that is contained the least amount of times in a word and then closest to the start of the word) <br />
  - For example: If the mystery word is: amazon The the hint would fill in 'm'.  If another hint is asked for then 'z'. <br />
  - For example: If the mystery word is: books The the hint would fill in 'b'.  If another hint is asked for then 'k'. <br />

- View the letters guessed.

- View how many guess until game ends

<br />
[5] At the end of a game (win or lose) the app should prompt the user to ask if they want to play a new game.  If yes - a new game is started.  If no - exit the program.

<br />
[Extra Credit] Update your console.logs to print in color.
- Game board prints in yellow
- Win message prints in green.
- Lose message prints in red.
- Previously guessed letters prints in blue.


####How the Game Is Played:
The program random picks a word and prints a row of low dashes ( _ ), giving the number of letters in the word.
- Example: mystery word is amazon
- Prints:  _ _ _ _ _ _

<br />
The guessing player now guesses a letter, asks for a hint or views previously guessed letters.

<br />
If the guessing player guesses a letter which occurs in the word, the program displays it in the correct position(s). And the player does not lose a guess.
- Example: Player guesses a
- Prints:  a _ a _ _ _

<br />
If the suggested letter does not occur in the word, the player loses a guess.
<br />
The game is over when - the guessing player completes the word.  Or the guessing player has used 4 guesses.
