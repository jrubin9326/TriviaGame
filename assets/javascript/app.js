// global variables
let isGameStarted = false;
let time = 10  // amount of time for quiz
let answer; 
let correct = 0; 
let incorrect = 0; 
let unanswered = 0
let correctAnswer; 
let checked= null; // checks if user has picked an answer
let score; 
// array containing containing trivia questions
var questions = 
    [
    {   
        question:"Question 1: Which state recieves the most sunshine on average each year?", 
        choices:[" a: California", " b: Florida", " c: Texas", " d: Arizona"],
         correctAnswer:"d"            
    },
        
    {   question:"Question 2: Hurricanes are named when they sustain speeds of over 74 miles per hour. Severe storms have their names retired. Which of these names has NOT been retired?",
        choices:["a:Katrina", "b: Andrew", "c: Jamie",  "d: Fabian"],
        correctAnswer:"c"
    },
    {
        question: "Question 3: Which state is most affected by tornadoes annually?", 
        choices: ["a: Kanasas", "b: Oklahoma", "c: Lousiana", "d: Texas"], 
        correctAnswer:"d"
    },
    {
        question: "Question 4: On January 23, 1971 the temperatures recorded in Prospect Creek, Alaska were the coldest ever recorded in the USA. What was the recorded temperature (in Fahrenheit)?", 
        choices: ["a: -20.5", "b: -40.3", "c: -79.8", "d: -99.6"],
        correctAnswer: "c"
    },
    {
        question: "Question 5: In the United States that are on average 708 of what?", 
        choices: ["a: Earthquakes", "b: Lightening Strikes", "c: Tornados", "d: Hurricanes"],
        correctAnswer: "c"
    },
    {
        question:"Question 6: Cirrus is a type of cloud. What does the literal translation in Latin mean?",
        choices: ["a: Circus", "b: Snake", "c: Lock of Hair", "d: More or Less"],
        correctAnswer: "c"
    }, 
    {
        question: "Question 7: What is the name of the instrument used to predict wind speed?",
        choices: ["a: Anemometer", "b: Barometer", "c: Hygrometer","d: Pyranometer" ],
        correctAnswer: "a"
    },
    {
        question: "Question 8: What is the driest desert on Earth?", 
        choices: ["a: The Sahara", "b: The Kalahari", "c: The Atacama", "d: The Negev"],
        correctAnswer: "c"
    }, 
    {
        question: "Question 9: Which city in the United States has the most rainy days?",
        choices: ["a: Columbus, Ohio", "b: Seattle, Washington", "c: Miami, Florida", "d: Cincinnati, Ohio"],
        correctAnswer: "b"
    },
    {
        question:"Question 10: Three to four billion years ago, the Sun emitted what precent of its power as it does today?",
        choices: ["a: 70%", "b: 30%", "c: 85%", "d: 60%"],
        correctAnswer: "a"
    }
    ]

// answers Arizona, Jamie, Texas,79.8, torandos, lock of hair, anemomoeter, atacama, seattke, 70%


//tags to HTML 
var title = $(".title")
//hide startgame button on click, and start game
$("button").on("click", function(){
    $(this).hide()
    startGame();
    timer()
    $("#submitBtn").show()
})


startGame = () => { 
             
    // loop thru answer array & dynamically geenerate button for each answer 
    for (var i = 0; i < questions.length; i++) {
        $("#questionContent").append("<form>" + "<h2>" + questions[i].question + "</h2>",
        "<input type='radio' name='choice" + i + "' value='a'<p>" + "   " + questions[i].choices[0] + "</p>",
        "<input type='radio' name='choice" + i + "' value='b'<p>" + "   " + questions[i].choices[1] + "</p>",
        "<input type='radio' name='choice" + i + "' value='c'<p>" + "   " + questions[i].choices[2] + "</p>",
        "<input type='radio' name='choice" + i + "' value ='d' <p>" + "   " + questions[i].choices[3] + "</p>",
        +"</form>")
        
                }   
            
           
        //function to check if input answers are equal to the submitted answers 
        inputCheck()
    
           
    //prompt to restartGame; 
        }

inputCheck = () => {
    $(document).ready(function(){
        $('input[type="radio"]').click(function(){
            if($(this).prop("checked") == true){
                var input = $('input[name="choice"]:checked').val()
                for (var i = 0; i < questions.length;i++){
                    if (questions[i].correctAnswer == input) {
                        correct ++;
                        console.log(correct)
                    }else if (questions[i].correctAnswer != input){
                        incorrect ++; 
                    }            
                    else if (input.prop("checked") === null) {
                        unanswered ++ 
                    }
                }
                }
                
        })
        })
    };

timer = () => {
    setInterval(function(){
        $("#timer").text("Time Remaining: "+ time + " Seconds")
        time --;
    }, 1000)
    stopTime()
    };

// function to submit form when game is over 
stopTime = (time) => {
    if (time === 0) {
        
    }
}
// when form is submitted shows number of correct,incorrect and unanswered responses
$("#submitBtn").on("click", function(){
    $("form").hide()
    $(this).hide()
    score = $("#scoreContent").text("Correct: " + correct)
    ("#title").append(score); 
    setInterval(reset(), 5000); 
})

//function to submit form 

gameOver = () => {

}

reset = () => {
    correct = 0
    incorrect = 0
    startGame()
}