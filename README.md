# The Scottish Quiz

![am i responsive](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/3a1638be-e704-4f7f-aea9-2914e5888c54)

The Scottish Quiz is exactly that, a quiz about Scotland. This is a fun, interactive multiple choice quiz aimed to test and broaden the users knowledge of Bonnie Scotland! This quiz is aimed at people of all ages.
There is 10 muliple choice question that the user must answer.

The live site can be accessed via the following link - https://chris-tollan.github.io/The_Scottish_Quiz/index.html

## User Experience

### User Stories

- First Time Visitor Goals
    - The user wants to play a multiple choice general knowledge quiz about Scotland.
    - The user wants to be able to access the quiz across a variety of devices whilst receiving the same experience.
    - The user wants the quiz format and layout to be simple and easy to understand but still remain catchy and themed to the content of the quiz.

- Returning and Frequent Visitor Goals
    - The user want to be able to record their score and view it on a leaderboard in order to better their score and compete against other users.
    - The user wants to be asked different questions so the quiz isn't repetitive.
      
## Design

- For this project I initially sketched how I intended for the game to look on a notepad. I thereafter used Balsamiq Wireframes to plan the project as shown below.

### Home Page

  - The home page will feature the heading at the top of the page with the name of this quiz, the main background image of the beautiful Edinburgh Castle with game instructions and finally the start button to begin the game.

![Home](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/a4b7b526-954f-4a56-b966-e1444af7deba)

### Game Area

- The game area consists of the heading at the top, the same background image featured thought, a scoreboard area, question number, question text and found multiple choice answers. If the user selects the correct answer their choice will turn green, if incorrect it will turn red. The question will then automatically progress to the next one. 10 questions are randomly selected from a larger question pool which allows the user to experience different questions if the choose to play multiple times.

![Quiz](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/7f24a55f-cc2a-45e7-b75d-f8b1bd9a6f8d)

### Final Screen

- The final screen or end screen will continue with the same heading and background featured throughout. this time however the content will consist of the users final score along with a number of options to enter a usernames, submit score to the leaderboard, view the leaderboard and also the option to return to ths start in order to take the quiz again.

![End](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/1a4df4d7-ea28-4ed1-b1c4-482e0b9482ca)

### Background Image

- The background image chosen for this game is of the instantly recognisable Edinburgh Castle. This image was chosen as the Castle is located within the Scottish capital and represents hiistoriical significance to the people of Scotland. Another reason it was picked is that the image itself is beautiful...just like Scotland!

 ![edinburgh_castle_background_image](https://github.com/Chris-Tollan/the-scottish-quiz/assets/134441833/d3dc6910-302f-4530-afa3-9af41e9a83db)

### Font Style

- The header on the home page will be UnifrakturCook from Google Fonts. This has been chosen due to it medieval appearance which compliments the background image of Edinburgh Castle

![Header](https://github.com/Chris-Tollan/the-scottish-quiz/assets/134441833/61c8c8a8-466a-4906-8c86-4ae464412c86)

- All other text will be typed using tinos from Google Fonts. This has been chosen due to its simple, clean appearance which should allow the user to read the content of the game ie instructions and questions etc with ease.

### Colours

- The colours to be used throughout this project will be blue and white to represent the colours of the Scottish Flag.

## Features

### Home Page

- The home page will feature the heading at the top of the page with the name of this quiz, the main background image of the beautiful Edinburgh Castle with buttons to display the instructions, leaderboard and to start quiz.

![live homepage](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/5742948c-2461-4735-bb08-5bf7b0938a8b)

![live instructions modal](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/7ebd34bb-c253-4b69-80c6-0c48d7ef6f80)


### Game Area

- The game area is where the user will be met with a question and four multiple choice answers.
- By clicking the answer the user wishes to submit the user will immediately be informed if their selection has been right or wrong and then move to the next question.
- At the bottom of this page will be a section containing the number of correct and incorrect answers the user has provided as well as the question number the user is currently on.
 
![live quiz page](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/3c807720-c38d-495f-91b8-e5ab754ff3c4)

 
### Final Screen

- This page will be the final screen displayed on completetion of the quiz. Here the user will be met with their final score and presented with the option to submit their score to the leaderboard and also to restart the game.

![liive end page](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/755338ce-045e-4326-8222-782fb44943c6)

### Leaderboard

- The leaderboard can be accessed from the homepage and also on completion of the quiz. It stores the top 5 scores obtained by users.
  
![live leaderboard](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/9ab7517f-c879-468d-8d8f-12fc15dd3413)

## Features

- Responsive on all devices
- Interactive

### Features that could be added

- Difficulty settings of Easy, Medium and Hard which could be selected by the user, a countdown timer could then added to the quiz depending on which difficulty was selected ie
      - Easy = 15 seconds per question
      - Medium = 10 seconds per question
      - Hard = 5 seconds per question

## Technologies Used

### Languages Used
- HTML5
- CSS
- JavaScript

### Frameworks, Libraries and Programs Used
- Google Fonts
- Balsamiq
- Code Anywhere
- GitHub
- Cloud Convert
- Chrome Developer Tools

## Testing 

### Validator Testing

- HTML
    - No errors or warnings found when validating each HMTL file used in this project via the official W3C Validator.
- CSS
    - No errors found when validating the CSS file used in this project via the official CSS Jigshaw Validator. The results can be seen via this link http://jigsaw.w3.org/css-validator/validator$link
    - As can be seen via the link two warnings were displayed however neither has any effect on the deployed project.
  ![image css warnings](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/0922c347-8b5b-412b-ab16-8bfd534107f9)
- JavaScript
    - No errors were found when passing each javascript file used in this project through the JShint JavaScript Validator.
 
### Accessibility Testing

- The accsessibility of each page has been checked via Google Lighthouse as follows
  ![Google lighthouse index html](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/f3963467-e02a-47ac-a0aa-f1b40791f8e3)
![Google lighthouse quiz html](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/bf9f45d5-dc64-4a3d-aaf7-13024febc9ad)
![Google lighthouse end html](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/e81ea945-5ab2-43f2-90ba-bcaab6393897)
![Google lighthouse leaderboard html](https://github.com/Chris-Tollan/The_Scottish_Quiz/assets/134441833/85cd4d75-b149-4984-88c3-015e6899e7e2)

### Responsive Testing

The project was developed with the intention of being used mainly on mobile and tablet devices however care was taken throughout development to ensure it could also be used on larger screens such as laptops and desktop computers. Chrome developer tools was utilised throughout to assist with this. The deployed site was also check on https://ui.dev/amiresponsive to check responsiveness across differenct devices, the results of which are contained in the image at the beginning of this README document.

### Unfixed Bugs

There are no unfixed/unresolved bugs in relation to this project however when deploying to the live site it became apparent that although the Add to Leaderboard button on the end page of the site would upload the users score and name to the leaderboard the page remained static giving the appearance that nothing had happened which in turn would lead the user to resubmit their score again. This was fixed by adding a function to the button which meant when it is now clicked the page automatically redirects th euser to the leaderboard page. 

## Deployment

The project was deployed to GitHub pages using the following steps...
- Log in to GitHub and locate Github Repository for this project.
- At the top of the Repository locate and select the Settings button.
- Navigate to GitHub Pages Section.
- Under source select the dropdown for None and select Main Branch.
- The browser automatically refreshes.
- The link to the published site can be seen in the GitHub Pages Sections.

## Credits 

- In preperation for this project I reached out to some of my fellow Code Institute Students and Alumni and was made aware of an excellant tutorial on youTube for creating multiple choice quiz's using javascript. This tutorial assited me greatly with preparing and completing this project. Some of the code including the JavaScript used for parts of the question and answers as well as to store users scores and update the leaderboard that I have used has been taken from this tutorial and adapted where necessary to complete this project. - [James Q Quick Youtube Tutorial](https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx)

### Content 

- All the content was written by myself as the developer for this project, the questions for the quiz were compiled from personal knowledge of Scotland and the answers for each question confirmed via google searches.

### Media

- The background image for this project was obtained from pxhere and can be seen via this link - https://pxhere.com/en/photo/690084
- The image was then reduced in file size using - https://cloudconvert.com/

### Acknowledgements
- My mentor for his continuous support, feedback and directions.
- Code Institute for providing me with the knowledge and learning material required to complete this pproject.
- My peers within the Slack Community for being there when I have needed guidance, advice and support.


