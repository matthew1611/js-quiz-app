const questions = [
  {
    question: 'Where are you?',
    answers: [
      { text: 'home', correct: true },
      { text: 'work', correct: false },
      { text: 'coffee shop', correct: false },
      { text: 'hospital', correct: false },
    ],
  },
  {
    question: 'How do you feel?',
    answers: [
      { text: 'bad', correct: false },
      { text: 'angry', correct: false },
      { text: 'good', correct: true },
      { text: 'drunk', correct: false },
    ],
  },
  {
    question: 'Where were you born?',
    answers: [
      { text: 'home', correct: false },
      { text: 'McHenry', correct: false },
      { text: 'Crystal Lake', correct: false },
      { text: 'Barrington', correct: true },
    ],
  },
  {
    question: 'What is the name of your first dog?',
    answers: [
      { text: 'Millie', correct: true },
      { text: 'Penny', correct: true },
      { text: 'Lucy', correct: false },
      { text: 'Rex', correct: false },
    ],
  },
];

const questionElement = document.getElementById('question');
const answerBtns = document.getElementById('answer-btns');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNum + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = 'none';
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
  } else {
    selectedBtn.classList.add('incorrect');
  }
  //   Array.from(answerBtns.children)
}

startQuiz();
