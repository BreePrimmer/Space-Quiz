// variables to get elements
var startButton = document.getElementById('start-quiz')
var startPage = document.getElementById('start-page')
var score = document.getElementById('high-score')
var timer = document.getElementById('timer')
var questionPage = document.getElementById('question-container')
// event listeners
startButton.addEventListener('click', startQuiz)


// function to start the quiz
function startQuiz() {
    console.log("start")
    startPage.style.display = "none"
    score.classList.remove('hide')
    timer.classList.remove('hide')
    questionPage.classList.remove('hide')
}

// function to move to the next question when right answer is chosen, else it is wrong and subtract time from the clock.

// 