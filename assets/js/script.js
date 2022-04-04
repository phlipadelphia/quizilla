let timerEl = document.querySelector(".time");
let countdownEl = document.getElementById("countdown");
let quizScore = 0;
let questionOne = document.querySelector(".question1")


let firstParagraph = document.querySelector('.openparagraph')
let timeLeft = 76;
let startBtn = document.getElementById("start");
let saveBtn = document.getElementById("savescore");
let allAnsBtns = document.querySelectorAll(".btnone");
let currentQNumber = 0;
// console.log(allAnsBtns.length);

//Array of Objects 
let quizQuestions = [
    //index 
    {
        //key: value
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    }, {
        question: "Arrays in JavaScript can be used to store:",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    }, {
        question: "String values must be enclosed with ______ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "curly brackets"
    }, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["javascript", "terminal", "for loops", "console.log"],
        answer: "for loops"
    }
]
// console.log(quizQuestions);
//  console.log("First Q", quizQuestions[0]); 
//  console.log("First Q", quizQuestions[0].question); 
//  console.log("First Ans", quizQuestions[0].answer); 
//  console.log("Second Q", quizQuestions[1]); 
//  console.log("Second Q", quizQuestions[1].question);
//  console.log("Second Q", quizQuestions[1].answer);
//  console.log("Third Q", quizQuestions[2]);
//  console.log("Third Q", quizQuestions[2].question);
//  console.log("Third Q", quizQuestions[2].answer);
//  console.log("Fourth Q", quizQuestions[3]);
//  console.log("Fourth Q", quizQuestions[3].question);
//  console.log("Fourth Q", quizQuestions[3].answer);
//  console.log("Final Q", quizQuestions[4]);
//  console.log("Final Q", quizQuestions[4].question);
//  console.log("Final Q", quizQuestions[4].answer);


// Creating the timer function to display countdown from 75 seconds. 
function setTime() {


    let quizTimer = setInterval(function () {
        console.log("timer")
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
            document.getElementById("countdown").innerHTML = "Finished";
            endGame(); 
        } else {
            document.getElementById("countdown").innerHTML = "Time Remaining: " + timeLeft;
        }
        timeLeft -= 0;

    }, 1000);
}

function answerResponse() {
    //console.log(this, "button is clicked");
    let buttonVal = this.innerHTML;
    console.log(buttonVal, "button is clicked");
    if (buttonVal === quizQuestions[currentQNumber].answer) {
        console.log["Correct!"];
quizScore += 10; 

    } else {
        console.log["Incorrect!"];
        //time penality 
        timeLeft -= 10;
        document.getElementById("countdown").innerHTML = "Time Remaining: " + timeLeft;
    }
    //move to the nex tquestion 
    currentQNumber += 1; 

    displayNextQandAns(); 
}


function startQuiz() {
    console.log('start button click');
    console.log(questionOne)
    questionOne.style.display = "block";
    //start the clock 
    setTime();
    //display Q annd ans
    displayNextQandAns(); 

}

function displayNextQandAns(){
    // console.log(document.getElementsByClassName("card-text"));
    document.getElementsByClassName("card-text")[0].innerHTML = quizQuestions[currentQNumber].question; 

//Setting up the option button 
    for (var i = 0; i < allAnsBtns.length; i++) {
        allAnsBtns[i].innerHTML = quizQuestions[currentQNumber].options[i];
        //add event listiner to the button 
        allAnsBtns[i].addEventListener("click", answerResponse);

    }
    //settup the card-title 
    document.getElementsByClassName("card-title")[0].innerHTML = "Question #" + (currentQNumber+1);
}

function endGame() {
    console.log("endgame " , questionOne)
    //show the div 
    document.getElementById("endgame").style.display = "block";
    questionOne.style.display = "none";
    document.getElementById("score-title").innerHTML  = "your new score is "+ quizScore; 
}
//setTime("click");

// Creating a click function response to the start button.
// startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", startQuiz);

saveBtn.addEventListener("click", saveScore);


function saveScore() {
    let inputVal = document.getElementById("inputId").value;
        // Displaying the value
        console.log(inputVal);
}