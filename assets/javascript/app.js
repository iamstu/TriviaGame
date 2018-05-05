var questionList = [
    "<h2>Where was the Slender Man character created?</h2><br><p class='correct'>Something Aweful Forums</p><p class='wrong'>Marble Hornets</p><p class='wrong'>A Work By HP Lovecraft</p><p class='wrong'>Spongebob Squarepants</p>",
    "<h2>What is not a known feature of Slender Man?</h2><br><p class='wrong'>Stange Long Arms</p><p class='correct'>Fancy Shoes</p><p class='wrong'>Featureless Face</p><p class='wrong'>Black Appendages Coming From Back</p>",
    "<h2>What is the Operator's symbol</h2><br><p class='wrong'>A Triangle With A Slash Through It</p><p class='wrong'>A Spiral</p><p class='correct'>A Circle With An X On Top</p><p class='wrong'>The Golden Arcs, There Is A Legal Battle With McDonalds Over That</p>",
    "<h2>How does Slender Man travel?</h2><br><p class='wrong'>By Car</p><p class='wrong'>A Full Sprint Everywhere He Goes</p><p class='wrong'>Pogo Stick</p><p class='correct'>He Teleports</p>",
    "<h2>What is not a symptom of Slender sickness</h2><br><p class='wrong'>Paranoia</p><p class='wrong'>Nightmares</p><p class='correct'>A Reliance On Caffine Just To Make It Though The Day Anymore</p><p class='wrong'>Nosebleeds</p>",
    "<h2>How is Slender sickness treated in Marble Hornets?</h2><br><p class='wrong'>A Nice Jog</p><p class='wrong'>Yoga</p><p class='correct'>Antipsycotic Medication</p><p class='wrong'>Meeting With Slender Man to Discuss Your Differences</p>"
    ];
var gifArray = [
    "assets/images/slender-1.gif",
    "assets/images/slender-2.gif",
    "assets/images/slender-3.gif",
    "assets/images/slender-4.gif",
    "assets/images/slender-5.gif",
    "assets/images/slender-6.gif"
]
var q = 0;
var timeLeft = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer;
//function to restart all vars and display final score
    function restart(){
        $("#questions").html($("<h3>Correct: " + correct + "</h3><br><br><h3>Inorrect: " + incorrect + "</h3><br><br><h3>Unanswered: " + unanswered + "</h3><br><br><br><br><button id='start'>Try Again</button>"));        
        q = 0;    
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    };
    //display question and set time limit
    function questionPicker(){
        timeLeft = 30;
       $("#questions").html(questionList[q]);
    };

    function decrement(){
        //check if time is 0 and then add to unanswered
        if (timeLeft === 0){
            unanswered++;
            q++;
            //check end scenario
            if (correct + incorrect + unanswered === questionList.length) {
                clearInterval(timer);
                restart();             
            }
            //if end is not met get next question
            else{
            questionPicker();
            $("#time-left").text("Time Remaining: " + timeLeft); 
            } 
            //decrease time until if is met  
        }else {
        timeLeft--;
        $("#time-left").text("Time Remaining: " + timeLeft);
        }
    };
//start button
$("#questions").on("click", "#start", function(){
    questionPicker()
  timer = setInterval( decrement, 1000);
});
//if the correct answer is chosen reset clock and add to correct count
$("#questions").on("click", ".correct", function(){
    clearInterval(timer);
    correct++;
    //display "correct" and a reward gif
    $("#questions").html($("<h1>Correct!</h1><br><img src='" + gifArray[q] + "'>"));
    //check end scenario
    if (correct + incorrect + unanswered === questionList.length) {
        setTimeout(restart, 3000);    
    }
    //else continue to next question
    else {
    timeLeft = 30;
    q++;
    $("#time-left").text("Time Remaining: " + timeLeft); 
    setTimeout(questionPicker, 3000);
    setTimeout(timer = setInterval(decrement , 1000), 1000);
    }
});
//wrong answer clicked: increase wrong count
$("#questions").on("click", ".wrong", function(){
    clearInterval(timer);
    incorrect++;
    //display wrong
    $("#questions").html($("<h1>Wrong!</h1>")); 
       //check end scenario
    if ((correct + incorrect + unanswered) === questionList.length) {
        setTimeout(restart, 1000);
    }
    //else continue to next question
    else {
    timeLeft = 30;
    q++;
    $("#time-left").text("Time Remaining: " + timeLeft);
    setTimeout(questionPicker, 1000); 
    setTimeout(timer = setInterval(decrement , 1000), 1000);
    }
});


    