const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'Hyperlinks and Text Markup Language', correct: false },
            { text: 'Home Tool Markup Language', correct: false },
            { text: 'Home Tool Markup', correct: false }

        ],
    },
    {
        question: 'Who is the father of HTML?',
        answers: [
            { text: 'Rasmus Lerdorf', correct: false },
            { text: 'Tim Berners-Lee', correct: true },
            { text: 'Brendan Eich', correct: false },
            { text: 'Sergey Brin', correct: false }
        ]
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        answers: [
            { text: 'h1', correct: true },
            { text: 'head', correct: false },
            { text: 'h2', correct: false },
            { text: 'h3', correct: false }
        ]
    },
    {
        question: 'Who is making the Web standards?',
        answers: [
                { text: 'The World Wide Web Consortium  ', correct: true},
                { text: 'Google', correct: false},
                { text: 'Mozila', correct: false},
                { text: 'FireFox', correct: false}

        ],
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        answers: [
            { text: 'hr', correct: false },
            { text: 'br', correct: true },
            { text: 'td', correct: false },
            { text: 'td', correct: false}

        ],
    },
    {
        question: 'Which is used to create Web Pages ?',
        answers: [
            { text: 'C++', correct: false },
            { text: 'JAVA', correct: false},
            { text: 'HTML', correct: true },
            { text: 'JVM', correct: false}

        ],
    },
    {
        question: 'HTML is a set of markup ___.?',
        answers: [
            { text: 'tag', correct: true },
            { text: 'set', correct: false},
            { text: 'attributes', correct: false },
            { text: 'none of the above', correct: false}

        ],
    },
    {
        question: ' HTML tags are used to describe document?',
        answers: [
            { text: 'definition', correct: false },
            { text: 'language', correct: false},
            { text: 'modal', correct: false },
            { text: 'content', correct: true}

        ],
    },
    {
        question: 'Which is used to read an HTML page and render it?',
        answers: [
            { text: 'web server', correct: false },
            { text: 'web network', correct: false},
            { text: 'web matrix', correct: false },
            { text: 'web browser', correct: true}

        ],
    },
    {
        question: 'HTML program is saved using ___ extension.',
        answers: [
            { text: '.htmn', correct: false },
            { text: '.htl', correct: false},
            { text: '.htnl', correct: false },
            { text: '.html', correct: true}

        ],
    }
]
