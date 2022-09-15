const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
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
];


const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0;
let quizDataIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage() {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

function showQuestion() {
    const headerQuestion = '<h2 class="title">%tittle%</h2>';
    const title = headerQuestion.replace('%tittle%', quizData[quizDataIndex]['question']);
    headerContainer.innerHTML = title;

    const answersValue = Object.values(quizData[quizDataIndex]);
    const answersNumber = Object.keys(quizData[quizDataIndex]);
    
    for (let i = 1; i < 5; i++) {
        const answer = answersValue[i];
        const number = answersNumber[i];
        const answersTemplate = 
        `<li>
            <label>
            <input value="%number%" type="radio" class="answer" name="answer"/>
            <span>%answer%</span>
            </label>
        </li>`
        const answerHtml = answersTemplate.replace('%answer%', answer).replace('%number%', number);

        listContainer.innerHTML = listContainer.innerHTML + answerHtml;
    }
}

function checkAnswer() {
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

    if (!checkedRadio) {
        submitBtn.blur();
        return     
    }

    const userAnswer = checkedRadio.value;

    if (userAnswer === quizData[quizDataIndex]['correct']){
        score++; 
    }
    
    if (quizDataIndex !== quizData.length - 1) {
        quizDataIndex++;
        clearPage();
        showQuestion();
    } else {
        clearPage();
        showResults();
    }
}

function showResults() {
    const resultsTemplate = '<h3 class="summary">%message%</h3>';

    let message;

    if (score === quizData.length) {
        message = 'You answered 4/4 questions correctly';
    } else if (score === 3) {
        message = 'You answered 3/4 questions correctly';
    } else if (score === 2) {
        message = 'You answered 2/4 questions correctly';
    } else if (score === 1) {
        message = 'You answered 1/4 questions correctly';
    } else if (score === 0) {
        message = 'You answered 0/4 questions correctly';
    } 

    const finalMessage = resultsTemplate.replace('%message%', message);
    headerContainer.innerHTML = finalMessage;

    submitBtn.blur();
    submitBtn.innerHTML = 'Reload';
    submitBtn.onclick = function() {
        history.go()
    };
}



