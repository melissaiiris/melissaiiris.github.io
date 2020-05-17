(function(){
  function buildQuiz(){

    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
		
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;

        answerContainers[questionNumber].style.color = 'green';
      }
      else{
        answerContainers[questionNumber].style.color = 'darkred';
      }
    });

    resultsContainer.innerHTML = `${numCorrect} / ${myQuestions.length}`;
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
  buildQuiz();
  submitButton.addEventListener('click', showResults);
})();