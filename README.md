This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running
Clone repository.
Run npm install.
Run npm start.
Go to http://localhost:3000.

## Assignment instructions
In this assignment you will create a quiz application using the Open Trivia DB, a database of trivia question with an accompanying API that can be used to generate random quiz questions.<br/>

A prototype is avaliable on: https://projects.invisionapp.com/share/R7QA2LBTVMB#/screens <br/>

The URL to the API with documentation is: https://opentdb.com/api_config.php<br/>

## Requirements
The following should be implemented
<ul>
  <li>Main screen</li>
    <ul>
      <li>The main screen should contain a button that is used to start the quiz. When the button is pressed a set of trivia questions are fetched from the API and the user is shown the Quiz screen.</li>
    </ul>
  <li>Quiz screen</li>
    <ul>
      <li>The quiz screen should display the questions with the possible answers as a set of radio buttons. 10 questions should be displayed.</li>
    </ul>
  <li>Modal dialog when the quiz is finished</li>
    <ul>
      <li>A modal dialog is a dialog that blocks all other interactions on a page and forces the user to interact with the dialog before continuing using the application</li>
      <li>The dialog should display the score and ask if the user wants to try again or go back to the main screen.</li>
      <li>When the dialog is visible, it should not be possible to interact with the background.</li>
    </ul>
  <li>Drawer menu</li>
    <ul>
      <li>A drawer menu is a navigation menu that slides in from either the left or right when pressing a button.</li>
    </ul>
  <li>Stats screen</li>
    <ul>
      <li>The application should record statistics and display them on the stats screen.</li>
    </ul>
  <li>About screen</li>
    <ul>
      <li>The about screen shows some information about the application.</li>
    </ul>
</ul>

## Accessibility requirements
The following is required
<ul>
  <li>The text is legible on small screens and in bad conditions</li>
  <li>The contrast between foreground (text) and the background should not be too low</li>
  <li>It should be possible to use the application with a screen reader</li>
  <li>Both the drawer menu and the modal dialog should be made accessible</li>
</ul>
