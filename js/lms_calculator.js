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
    new Question("Is this question false?", 5),
    new Question("Is this question false?", 5),
    new Question("Is this question false?", 5),
    new Question("Is this question false?", 5),
    new Question("Is this question false?", 5),
    new Question("Is this question false?", 5),
    new Question("Is this question false?", 5),
    new Question("Is this question false?", 5),
    new Question("Is this question false?", 5),
    new Question("Is this question false?", 5),
    new Question("Is this question false?", 5),
    new Question("Is this question false?", 5),
];

function findTotalPoints () {
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

    let question = document.createElement("label");
    $(question).addClass("lms-question");
    $(question).attr("for", name);
    $(question).text(newQuestion.question);

    let yesOption = document.createElement("input");
    $(yesOption).addClass("lms-option");
    $(yesOption).attr("type", "radio");
    $(yesOption).attr("name", name);

    let yesLabel = document.createElement("label");
    $(yesLabel).text(" Yes");
    $(yesLabel).attr("for", name);

    let noOption = document.createElement("input");
    $(noOption).addClass("lms-option");
    $(noOption).attr("type", "radio");
    $(noOption).attr("name", name);

    let noLabel = document.createElement("label");
    $(noLabel).text(" No");
    $(noLabel).attr("for", name);

    $(block).append(questionNumber);
    $(block).append(question);
    $(block).append(yesOption);
    $(block).append(yesLabel);
    $(block).append(noOption);
    $(block).append(noLabel);

    $(".lms-form").append(block);
}

$(document).ready(function() {
    for(let i = 0; i < Questions.length; i ++){
        createQuestionBlock(Questions[i], i + 1);
    }
});