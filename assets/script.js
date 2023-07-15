// score and timer
var score = document.getElementById('high-score')
var timer = document.getElementById('timer')
var time = document.getElementById('time')


// start page
var startButton = document.getElementById('start-quiz')
var startPage = document.getElementById('start-page')


// questions
var questionPage = document.getElementById('question-container')
var questionOne = document.getElementById('question-one')
var questionTwo = document.getElementById('question-two')
var questionThree = document.getElementById('question-three')
var questionFour = document.getElementById('question-four')


// initial page
var initialPage = document.getElementById('initial-page')
var initialPageHide = document.getElementById('initial-page-hide')
var initials = document.getElementById('initials')
var initialsValue = document.getElementById('initials').value
var initialSubmit = document.getElementById('initial-submit')


// high score page
var scorePage = document.getElementById('high-score-page')
var scorePageHide = document.getElementById('high-score-page-hide') 
var playButton = document.getElementById('play-btn')
var clearScore = document.getElementById('clear-score-btn')

var scoreNumber = 0
var finalScore = document.getElementById('final-score')


// correct answers
var pluto = document.getElementById('q1-o3')
var moonsOne = document.getElementById('q2-o1')
var plasma = document.getElementById('q3-o4')
var yearsTwo = document.getElementById('q4-o2')


// incorrect answers
var jupiter = document.getElementById('q1-o1')
var mars = document.getElementById('q1-o2')
var venus = document.getElementById('q1-o4')

var moonsTwo = document.getElementById('q2-o2')
var moonsThree = document.getElementById('q2-o3')
var moonsFour = document.getElementById('q2-o4')

var fire = document.getElementById('q3-o1')
var light = document.getElementById('q3-o2')
var gas = document.getElementById('q3-o3')

var yearsOne = document.getElementById('q4-o1')
var yearsThree = document.getElementById('q4-o3')
var yearsFour = document.getElementById('q4-o4')


// right and wrong
var right = document.getElementById('right')
var wrong = document.getElementById('wrong')


// event listeners ------------------------------------------------------------------------------------------------------------------------

// STARTING PAGE
startButton.addEventListener('click', startQuiz)


// ANSWERS
// answer one
pluto.addEventListener('click', rightAnswerOne)

jupiter.addEventListener('click', wrongAnswerOne)
mars.addEventListener('click', wrongAnswerOne)
venus.addEventListener('click', wrongAnswerOne)

// answer two
moonsOne.addEventListener('click', rightAnswerTwo)

moonsTwo.addEventListener('click', wrongAnswerTwo)
moonsThree.addEventListener('click', wrongAnswerTwo)
moonsFour.addEventListener('click', wrongAnswerTwo)

// answer three
plasma.addEventListener('click', rightAnswerThree)

fire.addEventListener('click', wrongAnswerThree)
light.addEventListener('click', wrongAnswerThree)
gas.addEventListener('click', wrongAnswerThree)

// answer four
yearsTwo.addEventListener('click', rightAnswerFour)

yearsOne.addEventListener('click', wrongAnswerFour)
yearsThree.addEventListener('click', wrongAnswerFour)
yearsFour.addEventListener('click', wrongAnswerFour)


// ENDING PAGES
// submit initials
initialSubmit.addEventListener('click', submitInitial)

// clicked play again button
playButton.addEventListener('click', resetQuiz)

// clicked view high scores
var highScore = document.getElementById('high-score')
highScore.addEventListener('click', viewHighScores)


// FUNCTIONS -------------------------------------------------------------------------------------------------------------------------------
// function to start the quiz
function startQuiz() {
    console.log("start")
    startPage.style.display = "none"
    score.classList.remove('hide')
    timer.classList.remove('hide')
    questionPage.classList.remove('hide')
    questionOne.classList.remove('hide')
    countdown()
}

var timeLeft = 60;

// this will start the timer
function countdown() {

    var startTimer = setInterval(function() {
        time.textContent = timeLeft
        timeLeft--

        if (timeLeft < 0) {
            clearInterval(startTimer)
        }
    }, 1000)   
}


// QUESTIONS FUNCTIONS ---------------------------------
// question one
function rightAnswerOne() {
    if (pluto) {
        console.log("correct")
        scoreNumber += 5
        console.log(scoreNumber)
        localStorage.setItem("score", scoreNumber)
        right.classList.remove('hide')
        questionOne.style.display = "none"
        questionTwo.classList.remove('hide')
        wrong.classList.add('hide')
}
}

function wrongAnswerOne() {
    if (jupiter || mars || venus) {
        console.log("wrong.")
        wrong.classList.remove('hide')
        timeLeft -= 20
        time.textContent = timeLeft
        timeUp()
 }
}

// question two
function rightAnswerTwo() {
    if (moonsOne) {
        console.log("correct")
        scoreNumber += 5
        console.log(scoreNumber)
        localStorage.setItem("score", scoreNumber)
        questionTwo.style.display = "none"
        questionThree.classList.remove('hide')
        wrong.classList.add('hide')
        right.classList.remove('hide')
        timeUp()
    }
}

function wrongAnswerTwo() {
    if (moonsTwo || moonsThree || moonsFour) {
        console.log("wrong.")
        right.classList.add('hide')
        wrong.classList.remove('hide')
        timeLeft -= 20
        time.textContent = timeLeft
        timeUp()
    }
}

// question three
function rightAnswerThree() {
    if (plasma) {
        console.log("correct")
        scoreNumber += 5
        console.log(scoreNumber)
        localStorage.setItem("score", scoreNumber)
        questionThree.style.display = "none"
        questionFour.classList.remove('hide')
        wrong.classList.add('hide')
        right.classList.remove('hide')
        timeUp()
    }
}

function wrongAnswerThree() {
    if (fire || light || gas) {
        console.log("wrong")
        right.classList.add('hide')
        wrong.classList.remove('hide')
        timeLeft -= 20
        time.textContent = timeLeft
        timeUp()
    }
}

// question four
function rightAnswerFour() {
    if (yearsTwo) {
        console.log("correct")
        scoreNumber += 5
        console.log(scoreNumber)
        localStorage.setItem("score", scoreNumber)
        questionFour.style.display = "none"
        initialPageHide.classList.remove('hide')
        wrong.classList.add('hide')
        right.classList.add('hide')
        timeUp()
    }
}

function wrongAnswerFour() {
    if (yearsOne || yearsThree || yearsFour) {
        console.log('wrong.')
        right.classList.add('hide')
        wrong.classList.remove('hide')
        timeLeft -= 20
        time.textContent = timeLeft
        timeUp()
    }
}

function timeUp() {
    if (timeLeft <= 0) {
    questionOne.style.display = "none"
    questionTwo.style.display = "none"
    questionThree.style.display = "none"
    questionFour.style.display = "none"
    timeLeft = 0
    right.classList.add('hide')
    wrong.classList.add('hide')
    initialPageHide.classList.remove('hide')
    finalScore.textContent = scoreNumber
    } else {
        return
    }
}

// ENDING PAGES FUNCTIONS -------------------------------------

// when the user enters in their intials it is saved on the next screen along with their score.

// when the user hits enter or clicks submit button, it takes them to the high score page.
function submitInitial() {
    initialPage.style.display = "none"
    scorePageHide.classList.remove('hide')
    var initialsValue = document.getElementById('initials').value
    localStorage.setItem("initialscore", initialsValue)
    console.log(initialsValue)
    scoresList()
}


// this event listener/function prevents the page from reseting when the user presses enter in the inital form.
initials.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        var initialsValue = document.getElementById('initials').value
        localStorage.setItem("initialscore", initialsValue)
        initialPage.style.display = "none"
        scorePageHide.classList.remove('hide')
        console.log(initialsValue)
        scoresList()
    }
})

// needs to create a list with the initials and score.
function scoresList() {
    var initialScore = localStorage.getItem('initialscore')
    console.log(initialScore)

    var listElTwo = document.createElement('li')
    var lastScore = [initialScore + "  " + scoreNumber]
    localStorage.setItem('last-score', JSON.stringify(lastScore))
    var lastScoreTwo = JSON.parse(localStorage.getItem('last-score'))
    console.log(lastScoreTwo)
    var lastScoreText = document.createTextNode(lastScoreTwo)
    listElTwo.appendChild(lastScoreText)
    var scoreList = document.getElementById('score-list')
    scoreList.appendChild(listElTwo)

    function clearHighScores() {
        scoreList.removeChild(listElTwo)
    }

    // if the user clicks the "clear high scores" button, the scores are removed.
    var clearScoreBtn = document.getElementById('clear-score-btn')
    clearScoreBtn.addEventListener('click', clearHighScores)
}

function viewHighScores() {
    startPage.style.display = "none"
    questionOne.style.removeProperty('display')
    questionOne.classList.add('hide')
    questionTwo.style.removeProperty('display')
    questionTwo.classList.add('hide')
    questionThree.style.removeProperty('display')
    questionThree.classList.add('hide')
    questionFour.style.removeProperty('display')
    questionFour.classList.add('hide')
    initialPage.style.removeProperty('display')
    initialPageHide.classList.add('hide')
    scorePageHide.classList.remove('hide')
    right.classList.add('hide')
    wrong.classList.add('hide')
}


// this function returns the quiz to its starting state before it was started, so that when the user wants to replay the quiz, all of the display properties are set back to the original state.
function resetQuiz() {
    timeLeft = 60
    scoreNumber = 0
    scorePage.style.display = "none"
    startPage.style.removeProperty('display')
    score.style.removeProperty('display')
    score.classList.add('hide')
    timer.style.removeProperty('display')
    timer.classList.add('hide')
    questionOne.style.removeProperty('display')
    questionOne.classList.add('hide')
    questionTwo.style.removeProperty('display')
    questionTwo.classList.add('hide')
    questionThree.style.removeProperty('display')
    questionThree.classList.add('hide')
    questionFour.style.removeProperty('display')
    questionFour.classList.add('hide')
    initialPage.style.removeProperty('display')
    initialPageHide.classList.add('hide')
    scorePage.style.removeProperty('display')
    scorePageHide.classList.add('hide')
}
