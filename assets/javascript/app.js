// global variables
var isGameStarted = false;
var timer = 45 
var answer; 
var correct = 0; 
var incorrect = 0; 
var unanswered; 
var correctAnswer; 
// array containing containing trivia questions
var questions = 
        [{   question:"Question 1: Which state recieves the most sunshine on average each year?", 
            
            choices:["a: California", 
            "b: Florida", 
            "c: Texas", 
            "d: Arizona"],

           correctAnswer:"c: Texas",            
        }]
        
        // {"Question 2: Hurricanes are named when they sustain speeds of over 74 miles per hour. Severe storms have their names retired. Which of these names has NOT been retired?" :
        //     {a:"Katrina", 
        //     b:"Andrew", 
        //     c:"Jamie", 
        //     d:"Fabian",
        //     },
        //     correctAnswer:"Jamie"
        // }
    // q3: {
    //     "Which state is most affected by tornadoes annually?" :
    //     ["Kanasas", "Oklahoma", "Lousiana", "Texas"]
    // },
    // q4 : {
    //     "On January 23, 1971 the temperatures recorded in Prospect Creek, Alaska were the coldest ever recorded in the USA. What was the recorded temperature (in Fahrenheit)?" :
    //     ["-20.5", "-40.3", "-79.8", "-99.6"]
    // },
    // q5: {
    //     "In the United States that are on average 708 of what?": 
    //     ["Earthquakes", "Lightening Strikes", "Tornados", "Hurricanes"]
    // },
    // q6: {
    //     "Cirrus is a type of cloud. What does the literal translation in Latin mean?" :
    //     ["Circus", "Snake", "Lock of Hair", "More or Less"]
    // }, 
    // q7 : {
    //     "What is the name of the instrument used to predict wind speed?" :
    //     ["Anemometer", "Barometer", "Hygrometer","Pyranometer" ]
    // },
    // q8 : {
    //     "What is the driest desert on Earth?" :
    //     ["The Sahara", "The Kalahari", "The Atacama", "The Negev"]
    // }, 
    // q9 : {
    //     "Which city in the United States has the most rainy days?" :
    //     ["Columbus, Ohio", "Seattle, Washington", "Miami, Florida", "Cincinnati, Ohio"]
    // },
    // q10  :{
    //     "Three to four billion years ago, the Sun emitted what precent of its power as it does today?":
    //     ["70%", "30%", "85%", "60%"]
    // }


// answers Arizona, Jamie, Texas,79.8, torandos, lock of hair, anemomoeter, atacama, seattke, 70%


//tags to HTML 
var title = $(".title")
//hide startgame button on click, and start game
$("button").on("click", function(){
    var x = $(this);
    x.addClass("hidden");
    startGame();
})

function startGame() {
    /// player can see one question at a time 
    //looping thru questions
        //if question is correct, toggles correct display 
        
            // loop thru answer array & dynamically geenerate button for each answer 
            // $("#questionContent").empty()
            for (var i = 0; i < questions.length; i++) {
                $("#questionContent").append("<form>" + "<h1>" + questions[i].question + "</h1>" +"</form>")
            }


            
            // adding the button to the HTML
    
            // move to next question
        //else if incorrect, toggles incorrect (display
            // move to next question
        // else run out of time toggles time out display
    
    // when questions are over shows number of correct,incorrect and unanswered responses

    //prompt to restartGame; 
}

