// put the timer
var number = 25;

var intervalId;

// RUN fuction
function run() {
    intervalId = setInterval(decrement, 1000);
}
// decrement fuction
function decrement() {

    number--;
// set timer in html page
    $(".h").html("<h2>Time Remaining: " + number + "</h2>");
// if statment
    if (number === 0) {

        stop();
// alert box
        alert("Time Up!");
        
        summit();
    }
}
// stop function
function stop() {

    clearInterval(intervalId);
}

run();

// summit function
function summit() {
    var q1 = document.myform.q1.value;
    var q2 = document.myform.q2.value;
    var q3 = document.myform.q3.value;
    var q4 = document.myform.q4.value;
    var win = 0;
    var lose = 0;
    var un=0;
    // if statment
    if (q1 == "")
    {
        un++;
    }
    if (q2 == "")
    {
        un++;
    }
    if (q3 == "")
    {
        un++;
    }
    if (q4 == "")
    {
        un++;
    }


// if statment using with correct answer
    if (q1 == "China") {
        win++;

    }
    // else statment
    else {
        lose++;
    }
    // if statment using with correct answer
    if (q2 == "Lawn tennins") {
        win++;

    }
    // else statment
    else {
        lose++;
    }
    // if statment using with correct answer
    if (q3 == "Richard H Thaler") {
        win++;

    }
    // else statment
    else {
        lose++;
    }
    // if statment using with correct answer
    if (q4 == "Russia") {
        win++;
    }
    // else statment
    else {
        lose++;
    }
// hide the form
    $("#form1").hide();
// hide the button
    $("#btn").hide();
stop();
// display the all variabels on html page
    document.getElementById("l1").innerHTML = "<h3>Wrong:" + lose + " </h3>";
    document.getElementById("w1").innerHTML = "<h3>win:" + win + "  </h3>";
    document.getElementById("u1").innerHTML="<h3>Unanswred : " + un + "</h3>";
}
