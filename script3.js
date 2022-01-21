const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Trumper",
        b: "Bideno",
        c: "Clintes",
        d: "Obamama",
        correct: "b",
    },
    {
        question: "What letter does 'box' start with?",
        a: "B",
        b: "O",
        c: "X",
        d: "None",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const appName = document.getElementById("appName");
const reloadBtn = document.getElementById("reload");
const startBtn = document.getElementById("start-btn");
const endText = document.getElementById("end-text");
let tries = 0;
const body = document.getElementById("body");

a_text.classList.add("hidden");
b_text.classList.add("hidden");
c_text.classList.add("hidden");
d_text.classList.add("hidden");
questionEl.classList.add("hidden");
reloadBtn.classList.add("hidden");

function hideDisableText() {
    a_text.disabled = true;
    b_text.disabled = true;
    c_text.disabled = true;
    d_text.disabled = true;
    a_text.style.cursor = "not-allowed";
    b_text.style.cursor = "not-allowed";
    c_text.style.cursor = "not-allowed";
    d_text.style.cursor = "not-allowed";
}

function Confetti() {
    confetti.start();
    setTimeout(() => {
        body.classList.remove("correct");
        confetti.stop();

        setTimeout(() => {
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else if(tries<6) {
                a_text.classList.add("hidden");
                b_text.classList.add("hidden");
                c_text.classList.add("hidden");
                d_text.classList.add("hidden");
                questionEl.classList.add("hidden");
                endText.innerHTML = `<h2>It took you ${tries} tries to answer ${quizData.length} questions.</h2>`;
                reloadBtn.classList.remove("hidden");
            } else if(tries>=6) {
                a_text.classList.add("hidden");
                b_text.classList.add("hidden");
                c_text.classList.add("hidden");
                d_text.classList.add("hidden");
                questionEl.classList.add("hidden");
                endText.innerHTML = `<h2>It took you ${tries} tries to answer ${quizData.length} questions. Disappointing.</h2>`;
                reloadBtn.classList.remove("hidden");
            }
        }, 1250)

    }, 2000)
}

function wrong() {
    setTimeout(() => {
        body.classList.remove("wrong");
    
    }, 2000)
}

reloadBtn.addEventListener("click", () => {
    location.reload();
})

startBtn.addEventListener("click", () => {
    a_text.classList.remove("hidden");
    b_text.classList.remove("hidden");
    c_text.classList.remove("hidden");
    d_text.classList.remove("hidden");
    questionEl.classList.remove("hidden");

    startBtn.classList.add("hidden");
    appName.classList.add("hidden");
})

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    body.classList.remove("correct");
    body.classList.remove("wrong");
    a_text.disabled = false;
    b_text.disabled = false;
    c_text.disabled = false;
    d_text.disabled = false;
    a_text.style.cursor = "pointer";
    b_text.style.cursor = "pointer";
    c_text.style.cursor = "pointer";
    d_text.style.cursor = "pointer";
    confetti.stop();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

a_text.addEventListener("click", () => {
    let answer = "a";
    tries++;
    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            body.classList.remove("wrong");
            body.classList.add("correct");

            hideDisableText();
            Confetti();
        }

        if (answer != quizData[currentQuiz].correct) {
            body.classList.add("wrong");
            wrong();
        }
    }
})

b_text.addEventListener("click", () => {
    let answer = "b";
    tries++;

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            body.classList.remove("wrong");
            body.classList.add("correct");

            hideDisableText()
            Confetti();
        }

        if (answer != quizData[currentQuiz].correct) {
            body.classList.add("wrong");
            wrong();
  
        }
    }
})

c_text.addEventListener("click", () => {
    let answer = "c";
    tries++;

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            body.classList.remove("wrong");
            body.classList.add("correct");

            hideDisableText()  
            Confetti();
        }

        if (answer != quizData[currentQuiz].correct) {
            body.classList.add("wrong");
            wrong();
           
        }
    }
})

d_text.addEventListener("click", () => {
    let answer = "d";
    tries++;

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            body.classList.remove("wrong");
            body.classList.add("correct");

            hideDisableText()          
            Confetti();
        }

        if (answer != quizData[currentQuiz].correct) {
            body.classList.add("wrong"); 
            wrong();
  
        }
    }

})