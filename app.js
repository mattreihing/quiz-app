/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the capital of Germany?',
      answers: [
        'Cologne',
        'Berlin',
        'Frankfurt',
        'Munich'
      ],
      correctAnswer: '2' //or would it be 'Berlin'?
    },
    {
      question: 'When was Berlin founded?',
      answers: [
        'The 10th century',
        'The 13th century',
        'The 15th century',
        'The 17th century'
      ],
      correctAnswer: 'The 13th century'
    },
    {
      question: 'When was the Berlin Wall erected and torn down, respectively?',
      answers: [
        '1934, 1991',
        '1949, 1991',
        '1981, 1991',
        '1900, 1987'
      ],
      correctAnswer: '1949, 1991'
    },
    {
      question: "What animal appears on Berlin's coat of arms?",
      answers: [
        'Bear',
        'Deer',
        'Swan',
        'Toad'
      ],
      correctAnswer: 'Bear'
    },
    {
      question: 'What river runs through Berlin?',
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

//renders the first page of the app
function renderHomePage(){
  const homePage = ` <img src="images/berlin.jpg" width="500" alt="Picture of Berlin's skyline with large soviet-era television tower in the center">
  <!--Image by Claudio Schwarz -- @purzlbaum-->
  <br>
  <p>5 Facts About Berlin You Were Afraid To Ask</p>
  <button type="submit" id="begin">Begin Quiz</button>`;
  $('main').html(homePage);
  console.log("renderHomePage has ran");
}

//renders the  after the quiz has started
function renderQuizBegin(){
  const quizPage = `
  
  <p>Question 1</p>
  <p>Total Correct: 0/5</p>
  <form>
    <label for="question" id="quiz-question"></label>
    <fieldset id="choices></fieldset>
      <ul>
   
     </ul>
      <input type="submit" value="SUBMIT"></input>
  </form>
  `
  $('main').html(quizPage);
  console.log("renderQuizPage has ran");
}

/*
<h2>{store.question}</h2>
<ul>
  then the li's are the question options contained in the array
</ul>
*/

/********** RENDER FUNCTION(S) **********/

// This function conditionally (if) replaces the contents of the <main> tag based on the state of the store // render/update the quiz questions here, but don't have to update the html

function renderQuestion(){
  const question = STORE.questions[STORE.currentQuestion];
  $('form label').text(question);
  
  /*$('#choices').html('');
  STORE.questions.answers.forEach((answer,i)=>{
    $('#choices').append(`
      <input type="radio" name="choice" value="${i}" id="${i}"/>
      <label for="${i}">${answer}</label>
    `);
  }); */
  console.log("question has been rendered");
}










//updateQuestionNumber

//updateQuizScore

function quizClickBegin(){
  STORE.quizStarted = true; 
  //render first quiz page 
  console.log(STORE.quizStarted);
  renderQuizBegin();
  renderQuestion()
;}




/********** EVENT HANDLER FUNCTIONS 
// These functions handle events (submit, click, etc) 
**********/



//event listener for the begin button
function handleBeginButton(){
  $('main').on('click', '#begin', function(event) {
    console.log("begin button was clicked");
    quizClickBegin();
  })
  console.log("handleBeginButton ran");
};



//////////////////////////////////////////

function handleQuizApp(){
  handleBeginButton();
  renderHomePage();
}

$(handleQuizApp);
