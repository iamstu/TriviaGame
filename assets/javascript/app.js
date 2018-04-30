var questionList = [
    "<h2>Question 1</h2><br><p class='correct'>answer</p><p class='wrong'>answer</p><p class='wrong'>answer</p><p class='wrong'>answer</p>",
    "<h2>Question 2</h2><br><p class='wrong'>answer</p><p class='correct'>answer</p><p class='wrong'>answer</p><p class='wrong'>answer</p>",
    "<h2>Question 3</h2><br><p class='wrong'>answer</p><p class='wrong'>answer</p><p class='correct'>answer</p><p class='wrong'>answer</p>",
    "<h2>Question 4</h2><br><p class='wrong'>answer</p><p class='wrong'>answer</p><p class='wrong'>answer</p><p class='correct'>answer</p>",
    "<h2>Question 5</h2><br><p class='wrong'>answer</p><p class='wrong'>answer</p><p class='correct'>answer</p><p class='wrong'>answer</p>",
    "<h2>Question 6</h2><br><p class='wrong'>answer</p><p class='wrong'>answer</p><p class='correct'>answer</p><p class='wrong'>answer</p>",
    ];
var q = 0;
var timeLeft = 0;
var correct = 0;
var incorrect = 0;
var unanswered = -1;
var timer;
    function questionPicker(){
        timeLeft = 30;
       $("#questions").html(questionList[q]);
    q++;
    };

    function decrement(){
        if (timeLeft === 0){
            // if (correct + incorrect + unanswered === questionList.length) {
            //    $("#question").html($("<h3>Correct: " + correct + "</h3><br><br><h3>Inorrect: " + incorrect + "</h3><br><br><h3>Correct: " + unanswered + "</h3><br><br><br><br><button id='start'>Try Again</button>"));
            // }
            // else{
            unanswered++;
            questionPicker();
            $("#time-left").text("Time Remaining: " + timeLeft); 
            // }   
        }else {
        
        timeLeft--;
        $("#time-left").text("Time Remaining: " + timeLeft);
        }
    }

$("#questions").on("click", "#start", function(){
   // timeLeft = 30;
    //var questionChange = setInterval(timeLeft = 30, questionPicker, 30000);
  timer = setInterval(decrement , 1000);
});

$("#questions").on("click", ".correct", function(){
    // if (correct + incorrect + unanswered === questionList.length) {
        // $("#question").html($("<h3>Correct: " + correct + "</h3><br><br><h3>Inorrect: " + incorrect + "</h3><br><br><h3>Correct: " + unanswered + "</h3><br><br><br><br><button id='start'>Try Again</button>"));
    // }
    // else {
    clearInterval(timer);
    correct++;
    timeLeft = 0;
    $("#questions").html($("<h1>Correct!</h1>"));
   // questionPicker();
    $("#time-left").text("Time Remaining: " + timeLeft); 
    setTimeout(timer = setInterval(decrement , 1000), 1000);
    // }
});

$("#questions").on("click", ".wrong", function(){
    // if (correct + incorrect + unanswered === questionList.length) {
        // $("#question").html($("<h3>Correct: " + correct + "</h3><br><br><h3>Inorrect: " + incorrect + "</h3><br><br><h3>Correct: " + unanswered + "</h3><br><br><br><br><button id='start'>Try Again</button>"));
    // }
    // else {
    clearInterval(timer);
    incorrect++;
    timeLeft = 0;
    //questionPicker();
    $("#questions").html($("<h1>Wrong!</h1>"));
    $("#time-left").text("Time Remaining: " + timeLeft); 
    setTimeout(timer = setInterval(decrement , 1000), 1000);
    // }
});


    