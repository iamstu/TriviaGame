var questionList = [
    "<h2>Question 1</h2><br><p class='correct'>answer</p><p class='wrong'>answer</p><p class='wrong'>answer</p><p class='wrong'>answer</p>",
    "<h2>Question 2</h2><br><p class='wrong'>answer</p><p class='correct'>answer</p><p class='wrong'>answer</p><p class='wrong'>answer</p>",
    "<h2>Question 3</h2><br><p class='wrong'>answer</p><p class='wrong'>answer</p><p class='correct'>answer</p><p class='wrong'>answer</p>",
    "<h2>Question 4</h2><br><p class='wrong'>answer</p><p class='wrong'>answer</p><p class='wrong'>answer</p><p class='correct'>answer</p>",
    "<h2>Question 5</h2><br><p class='wrong'>answer</p><p class='wrong'>answer</p><p class='correct'>answer</p><p class='wrong'>answer</p>",
    "<h2>Question 6</h2><br><p class='wrong'>answer</p><p class='wrong'>answer</p><p class='correct'>answer</p><p class='wrong'>answer</p>",
    ];
var q = 0;
var timeLeft = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer;

    function restart(){
        q = 0;    
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    };
    function questionPicker(){
        timeLeft = 30;
       $("#questions").html(questionList[q]);
    q++;
    };

    function decrement(){
        if (timeLeft === 0){
            unanswered++;
            if (correct + incorrect + unanswered === questionList.length) {
                clearInterval(timer);
               $("#questions").html($("<h3>Correct: " + correct + "</h3><br><br><h3>Inorrect: " + incorrect + "</h3><br><br><h3>Unanswered: " + unanswered + "</h3><br><br><br><br><button id='start'>Try Again</button>"));
                restart();             
            }
            else{
            questionPicker();
            $("#time-left").text("Time Remaining: " + timeLeft); 
            }   
        }else {
        timeLeft--;
        $("#time-left").text("Time Remaining: " + timeLeft);
        }
    };

$("#questions").on("click", "#start", function(){
    questionPicker()
  timer = setInterval( decrement, 1000);
});

$("#questions").on("click", ".correct", function(){
    clearInterval(timer);
    correct++;
    if (correct + incorrect + unanswered === questionList.length) {
        $("#questions").html($("<h3>Correct: " + correct + "</h3><br><br><h3>Inorrect: " + incorrect + "</h3><br><br><h3>Unanswered: " + unanswered + "</h3><br><br><br><br><button id='start'>Try Again</button>"));
        restart();    
    }
    else {
    // clearInterval(timer);
    timeLeft = 30;
    $("#questions").html($("<h1>Correct!</h1>"));
    //questionPicker();
    $("#time-left").text("Time Remaining: " + timeLeft); 
    setTimeout(questionPicker, 1000);
    setTimeout(timer = setInterval(decrement , 1000), 1000);
    }
});

$("#questions").on("click", ".wrong", function(){
    clearInterval(timer);
    incorrect++;
    if ((correct + incorrect + unanswered) === questionList.length) {
        $("#questions").html($("<h3>Correct: " + correct + "</h3><br><br><h3>Inorrect: " + incorrect + "</h3><br><br><h3>Unanswered: " + unanswered + "</h3><br><br><br><br><button id='start'>Try Again</button>"));
        restart();
    }
    else {
    // clearInterval(timer);
    // incorrect++;
    timeLeft = 30;
    //questionPicker();
    $("#questions").html($("<h1>Wrong!</h1>"));
    $("#time-left").text("Time Remaining: " + timeLeft);
    setTimeout(questionPicker, 1000); 
    setTimeout(timer = setInterval(decrement , 1000), 1000);
    }
});


    