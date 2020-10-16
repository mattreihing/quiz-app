/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      questionTitle: 'What is the capital of Germany?',
      answers: [
        'Cologne',
        'Berlin',
        'Frankfurt',
        'Munich'
      ],
      correctAnswer: 'Berlin' //or would it be '2'?
    },
    {
      questionTitle: 'When was Berlin founded?',
      answers: [
        'The 10th century',
        'The 13th century',
        'The 15th century',
        'The 17th century'
      ],
      correctAnswer: 'The 13th century'
    },
    {
      questionTitle: 'When was the Berlin Wall erected and torn down, respectively?',
      answers: [
        '1934, 1991',
        '1949, 1991',
        '1981, 1991',
        '1900, 1987'
      ],
      correctAnswer: '1949, 1991'
    },
    {
      questionTitle: "What animal appears on Berlin's coat of arms?",
      answers: [
        'Bear',
        'Deer',
        'Swan',
        'Toad'
      ],
      correctAnswer: 'Bear'
    },
    {
      questionTitle: 'What river runs through Berlin?',
      answers: [
        'The Elbe',
        'The Donau',
        'The Spree',
        'The Arno'
      ],
      correctAnswer: 'The Spree'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 * generate qe99ustions dynamically using JS
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

//updateQuestionNumber
// html could be something like: <h3>Question number <span> variableThatTracksNumber</span> </h3>

//updateQuizScore

/********** EVENT HANDLER FUNCTIONS 
// These functions handle events (submit, click, etc) 
**********/
//=================================================================================================================================================================================================================================================================================




// ***** PAGE 1 *****
//renders the first page of the app
function renderHomePage(){
  const homePage = `   <h2>5 Facts About Berlin You Were Afraid To Ask</h2>
  <br>
  <img src="images/berlin.jpg" width="500" alt="Picture of Berlin's skyline with large soviet-era television tower in the center">
  <!--Image by Claudio Schwarz -- @purzlbaum-->
  <br>
  <button type="submit" id="begin">Begin Quiz</button>`;
  $('main').html(homePage);
  console.log("renderHomePage has ran");
}

//event listener for the begin button
function handleBeginButton(){
  $('main').on('click', '#begin', function(event) {
    console.log("begin button was clicked");
    quizClickBegin();
  });
  console.log("handleBeginButton ran");
};

//begins the quiz and renders the first quiz page, setting quizStarted to true and questionNumber to 0
function quizClickBegin(){
  STORE.quizStarted = true; 
  STORE.questionNumber = 0;
  console.log(STORE.quizStarted); // true
  console.log(STORE.questionNumber); // 0
  renderQuizBegin();
  renderQuestion();
}


// ***** QUIZ PAGE *****

//renders the page after starting the quiz
function renderQuizBegin(){
  const quizPage = `
  <p>Question 1</p>
  <p>Total Correct: 0/5</p>
  <form>
    <label for="question" id="quiz-question"></label>
    <fieldset id="choices"></fieldset>
      <ul id="question-items">
      </ul>
      <input type="submit" value="SUBMIT"></input>
  </form>
  `
  $('main').html(quizPage);
  console.log("renderQuizPage has ran");
}

//puts the question information from STORE into the DOM
function renderQuestion(){
  console.log(STORE.questions[STORE.questionNumber]);
  //the above is grabbing all the information about the question, including the question, the answer choices, and the correct answer
  console.log(STORE.questions);
  //displaying all the objects within the array
  
  $('#quiz-question').text("why");
  //no clue how to access the information in the STORE and have it display properly in the element, which is selected correctly.
  
  
  console.log("render question has ran");
  //isse with this function--question not appearing in the DOM correctly
}

/* 

//updates the question number based on submit clicks as long as quizStarted = true
function questionNumber(){
  let questionNumberText = 0;
  $('.js-question-number').text(questionNumberText);
}

//updates the quiz score based on how many correct answers have been selected
function quizScore(){
    
}
*/

// ***** FINAL PAGE *****

//after all quiz questions have been answered, display how many correct answers have been selected and give the option to start the quiz again
//quizStarted should get flipped back to false after answering last question(?) 


//////////////////////////////////////////

function handleQuizApp(){
  handleBeginButton();
  renderHomePage();
}

$(handleQuizApp);
