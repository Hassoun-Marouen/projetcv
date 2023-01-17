const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<input>",
        c: "<js>",
        d: "<javascript>",
        correct: "a",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "the <body> section",
        b: "the <head> section ",
        c: "both of them",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: "<script name='xxx.js'",
        b: "<script href='xxx.js'",
        c: "<script src='xxx.js'",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What is the correct HTML for referring to an external style sheet?",
        a: "<style src='mystyle.css'>",
        b: "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
        c: "both of them",
        d: "none of the above",
        correct: "b",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
 function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
};
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
};
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
};
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})