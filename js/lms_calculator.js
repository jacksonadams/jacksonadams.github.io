/*
    lms_calculator.js
    This script applies to the EarlyStageLegal page.
    It calculates a legal management score based on inputs given by the user.
*/

class Question {
    constructor(question, points) {
        this.question = question;
        this.points = points;
    }
}

let Questions = [
    new Question("Have all your employees signed non-compete agreements?", 5),
    new Question("Have your managers done this thing?", 5),
    new Question("Have you let your employees know about this thing?", 5),
    new Question("Is this question false?", 3),
    new Question("Is this question false?", 13),
    new Question("Is this question false?", 25),
    new Question("Is this question false?", 12),
    new Question("Is this question false?", 7),
    new Question("Is this question false?", 15),
    new Question("Is this question false?", 10),
    new Question("Is this question false?", 9),
    new Question("Is this question false?", 5),
];

function getTotalPoints () {
    // Loop through questions and add up all points
    let total = 0;
    for(let i = 0; i < Questions.length; i ++){
        total += Questions[i].points;
    }
    return total;
}

function createQuestionBlock(newQuestion, num){
    /*
        <div class = "lms-question-block">
            <h3 class = "lms-question-number">1</h3>
            <label class = "lms-question" for = "lms-option-1">Example question - goes here</label><br>
            <input class = "lms-option" type = "radio" name = "lms-option-1"> Yes</input>
            <input class = "lms-option" type = "radio" name = "lms-option-1"> No</input>
        </div>
    */

    let name = "lms-option-" + num;

    let block = document.createElement("div");
    $(block).addClass("lms-question-block");

    let questionNumber = document.createElement("h3");
    $(questionNumber).addClass("lms-question-number");
    $(questionNumber).text(num);

    let questionInner = document.createElement("div");
    $(questionInner).addClass("lms-question-block-inner");

    let question = document.createElement("label");
    $(question).addClass("lms-question");
    $(question).attr("for", name);
    $(question).text(newQuestion.question);

    let yesOption = document.createElement("input");
    $(yesOption).addClass("lms-option");
    $(yesOption).addClass("lms-option-yes");
    $(yesOption).attr("type", "radio");
    $(yesOption).attr("name", name);
    $(yesOption).attr("value", newQuestion.points);


    let yesLabel = document.createElement("label");
    $(yesLabel).addClass("lms-yes-label");
    $(yesLabel).text(" Yes");
    $(yesLabel).attr("for", name);
    let noOption = document.createElement("input");
    $(noOption).addClass("lms-option");
    $(noOption).addClass("lms-option-no");
    $(noOption).attr("type", "radio");
    $(noOption).attr("name", name);

    let noLabel = document.createElement("label");
    $(noLabel).addClass("lms-no-label");
    $(noLabel).text(" No");
    $(noLabel).attr("for", name);

    $(block).append(questionNumber);
    $(questionInner).append(question);
    $(questionInner).append(yesOption);
    $(questionInner).append(yesLabel);
    $(questionInner).append(noOption);
    $(questionInner).append(noLabel);
    $(block).append(questionInner);

    $(".lms-form").append(block);
}

function getScore(){
    let score = 0;

    let yesInputs = $(".lms-option-yes:checked");
    for(let i = 0; i < yesInputs.length; i ++){
        score += parseInt($(yesInputs[i]).val());
    }

    return score;
}

$(document).ready(function() {
    // Add questions to document
    for(let i = 0; i < Questions.length; i ++){
        createQuestionBlock(Questions[i], i + 1);
    }

    // Calculate score automatically
    /* $(".lms-option-yes").on("change", function(){
        let percent = (getScore() / getTotalPoints() * 100).toFixed(0);
        $(".test-score").text("Score: " + percent + "%");
    });
    $(".lms-option-no").on("change", function(){
        let percent = (getScore() / getTotalPoints() * 100).toFixed(0);
        $(".test-score").text("Score: " + percent + "%");
    }); */

    $(".lms-button").on("click", function(){
        let percent = (getScore() / getTotalPoints() * 100).toFixed(0);
        $(".lms-score").text(percent);
        $(".lms-results").slideDown();
    });
});