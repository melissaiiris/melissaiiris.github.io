(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Verottaa on ruotsiksi:",
      answers: {
        a: "ansvariga",
        b: "beskatta",
        c: "dividender"
      },
      correctAnswer: "b"
    },
    {
      question: "Markkinarako on ruotsiksi:",
      answers: {
        a: "försörja",
        b: "ett tillfälle",
        c: "en nisch"
      },
      correctAnswer: "c"
    },
    {
      question: "Edistää on ruotsiksi:",
      answers: {
        a: "målmedveten",
        b: "råda",
        c: "främja",
      },
      correctAnswer: "c"
    },
	{
      question: "En aktieägare on suomeksi:",
      answers: {
        a: "Osakkeet",
        b: "Osakekauppa",
        c: "Osakkeenomistaja"
      },
      correctAnswer: "c"
    },
	{
      question: "En sortimentet on suomeksi:",
      answers: {
        a: "Valikoima",
        b: "Vallitseva",
        c: "Valita"
      },
      correctAnswer: "a"
    },
	{
      question: "Mikä on tytäryhtiö ruotsiksi:",
      answers: {
        a: "en modepryl",
        b: "ett moderbolag",
        c: "ett dotterbolag"
      },
      correctAnswer: "c"
    },
	{
      question: "Mikä on liikevaihto ruotsiksi:",
      answers: {
        a: "utvald",
        b: "hållbarhet",
        c: "omsättning"
      },
      correctAnswer: "c"
    },
	{
      question: "Mikä on ilmoitus ruotsiksi:",
      answers: {
        a: "jämföra",
        b: "en annons",
        c: "ett utbud"
      },
      correctAnswer: "b"
    },
	{
      question: "Mikä on erinomainen ruotsiksi:",
      answers: {
        a: "förträfflig",
        b: "fördelen",
        c: "förutspå"
      },
      correctAnswer: "a"
    },
	{
      question: "Mikä on lasku ruotsiksi:",
      answers: {
        a: "en räkning",
        b: "ett utsläpp",
        c: "en odling"
      },
      correctAnswer: "a"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();