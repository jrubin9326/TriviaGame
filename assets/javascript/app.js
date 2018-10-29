// global variables
var isGameStarted = false;
var timer = 45 
var answer; 
var correct = 0; 
var incorrect = 0; 
var unanswered = undefined; 
var correctAnswer; 
// array containing containing trivia questions
var questions = 
    [
    {   
        question:"Question 1: Which state recieves the most sunshine on average each year?", 
        choices:[" a: California", " b: Florida", " c: Texas", " d: Arizona"],
         correctAnswer:"d: Arizona"            
    },
        
    {   question:"Question 2: Hurricanes are named when they sustain speeds of over 74 miles per hour. Severe storms have their names retired. Which of these names has NOT been retired?",
        choices:["a:Katrina", "b: Andrew", "c: Jamie",  "d: Fabian"],
        correctAnswer:"c: Jamie"
    },
    {
        question: "Question 3: Which state is most affected by tornadoes annually?", 
        choices: ["a: Kanasas", "b: Oklahoma", "c: Lousiana", "d: Texas"], 
        correctAnswer:"d: Texas"
    },
    {
        question: "Question 4: On January 23, 1971 the temperatures recorded in Prospect Creek, Alaska were the coldest ever recorded in the USA. What was the recorded temperature (in Fahrenheit)?", 
        choices: ["a: -20.5", "b: -40.3", "c: -79.8", "d: -99.6"],
        correctAnswer: "c: -79.8"
    },
    {
        question: "Question 5: In the United States that are on average 708 of what?", 
        choices: ["a: Earthquakes", "b: Lightening Strikes", "c: Tornados", "d: Hurricanes"],
        correctAnswer: "c: Tornados"
    },
    {
        question:"Question 6: Cirrus is a type of cloud. What does the literal translation in Latin mean?",
        choices: ["a: Circus", "b: Snake", "c: Lock of Hair", "d: More or Less"],
        correctAnswer: "c: Lock of Hair"
    }, 
    {
        question: "Question 7: What is the name of the instrument used to predict wind speed?",
        choices: ["a: Anemometer", "b: Barometer", "c: Hygrometer","d: Pyranometer" ],
        correctAnswer: "a: Anemometer"
    },
    {
        question: "Question 8: What is the driest desert on Earth?", 
        choices: ["a: The Sahara", "b: The Kalahari", "c: The Atacama", "d: The Negev"],
        correctAnswer: "c: The Atacama"
    }, 
    {
        question: "Question 9: Which city in the United States has the most rainy days?",
        choices: ["a: Columbus, Ohio", "b: Seattle, Washington", "c: Miami, Florida", "d: Cincinnati, Ohio"],
        correctAnswer: "b: Seattle, Washington"
    },
    {
        question:"Question 10: Three to four billion years ago, the Sun emitted what precent of its power as it does today?",
        choices: ["a: 70%", "b: 30%", "c: 85%", "d: 60%"],
        correctAnswer: "a: 70%"
    }
    ]

// answers Arizona, Jamie, Texas,79.8, torandos, lock of hair, anemomoeter, atacama, seattke, 70%


//tags to HTML 
var title = $(".title")
//hide startgame button on click, and start game
$("button").on("click", function(){
    var x = $(this);
    x.addClass("hidden");
    startGame();
    $("#submit").show()
})

//initalize game
// initalize () => {
//     //set timer
//     timer = setInterval(startGame, 10000)
// }

startGame = () => { 
             
    // loop thru answer array & dynamically geenerate button for each answer 
            for (var i = 0; i < questions.length; i++) {
                $("#questionContent").append("<form>" + "<h2>" + questions[i].question + "</h2>",
                "<input type='checkbox' name='choiceA' value='1'<p>" + "   " + questions[i].choices[0] + "</p>",
                "<input type='checkbox' name='choiceB' value='1'<p>" + "   " + questions[i].choices[1] + "</p>",
                "<input type='checkbox' name=choiceC' value='1'<p>" + "   " + questions[i].choices[2] + "</p>",
                "<input type='checkbox' name='choiceD'<p>" + "   " + questions[i].choices[3] + "</p>",
                +"</form>")
                
            }
           
        //function to check if input answers are equal to the submitted answers 
        inputCheck()
    // when questions are over shows number of correct,incorrect and unanswered responses

    //prompt to restartGame; 
}

inputCheck = () => {
    $(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                alert("Checkbox is checked.")
        }
        }
    )}
    )}; 