# R.P.S The Game 

R.P.S The Game is a simple game of Rock, Paper, Scissors you can play when you have some free time (or not). Rock, Paper, Scissors is a simple game so I wanted this website to reflect that, it makes it easy for any user to jump right in and start playing.  

![Responsive Mockup](assets/images/Screenshot%202022-11-26%20094601.png)



## Features 


### Existing Features

- __Header__

  - The haeder on this website is a simple one that only includes the name of the game styled appropriately to match the rest of the website.

![Header](assets/images/header.png)




- __The Game Area__

  - The Game Area shows the user what side they are playing on by using icons this helps the user visualy know right away what side is the user and what side is the computer. 
  - Under the user and computer icons you have there score, the score updates every round showing the user who is winning and who is losing.
  - The Game Area also has a welcome message to let the user know what game they are playing as R.P.S might not be clear on first 
  glanse, this welcome text also changes every round to show the user who won the round.

![Game area](assets/images/game-area.png)




- __Options Area__
  - The options area includes the buttons to play the game, each button has a hand icon to easily show the user what option is what. When a rock, paper or scissors button is clicked the users icon will update to show the user there choice, the cumputer icon will also update showing the computers choice.
  - Under the buttons to play the game is a reset button, this button when clicked resets both scores of the game and also reset the user and computer icons back to default.

![Options area](assets/images/buttons-area.png)




- __The Footer__ 

  - The footer section includes the rules of the game and is very simple and easy to read.
  - I used a different colour background so that it would catch the users attention and draw them to read the rules of the game.

![Footer](assets/images/footer-area.png)


### Theme and design of website

- I wanted to keep the website clean and easy to use so any user can play.
- The colours i went with are easy on the eyes and simple so the user would get familure quickly.
- The colours i used:
  - #333C7B (Navy blue, Used for the game area + buttons + header title)
  - #393A3E (Grey, used for the footer)
  - White



### Features to Implement in the future

- I would like to add a mode where you could play with a friend.
- I would like to add some throphys to give to user some milestone achievements.
- I would like to add a new game mode that gives the user 3 lives to beat the computer.

## Testing

### Website Testing

- Website was tested on Chrome, Internet Explorer and Firefox and passed all tests

### Validator Testing 

- HTML
  - No errors were returned when passing through the official W3C validator.
- CSS
  - No errors were found when passing through the official W3C CSS validator.
- WebDev score
    - Score was given by official [Webdev](https://web.dev/measure/?gclid=CjwKCAjw-rOaBhA9EiwAUkLV4pZbeEVqP9vuP4NPNqvQs7TVgbh62-3Yyva7M_aGi5DsBzNf4GFicxoC6mYQAvD_BwE&url=https%3A%2F%2Fbarryk112.github.io%2Fdog-day-care%2F)
![Webdev score](assets/images/webdev-score.png)

### Bugs

- Solved bugs
  - When updating the icons to change upon users choice, when it was a tie icons would not update correctly. I solved this bug by having to update my calculateWinner() function to read in all possible tie combinations

- Unsolved bugs
  - None



## Deployment

- The site was deployed to GitHub pages. 

The live link can be found here - https://barryk112.github.io/rock-paper-scissors/


## Credits 

### Content 

- The icons used in the webpage were taken from [Font Awesome](https://fontawesome.com/)

 