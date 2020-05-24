$(document).ready(function()
{

    var magic8Ball = {};

    magic8Ball.listOfAnswers = ["... No", "Hum ... Yes", "I don't think so...", "Of course!", "In your dreams.", "Think your self", "I don't know", "Don't disturb now", "Ask me later", "Use common sense", "Leave me alone"];

    $("#answer").hide();

    magic8Ball.askQuestion = function(question)
    {
        $("#answer").fadeIn(4000);
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

        $("#answer").text(answer);

        console.log(question);
        console.log(answer);

    };

    var onClick = function()
    {


        $("#answer").hide();

        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");


        setTimeout(
            function()
            {
                var question = prompt("Ask a yes or no question")
                magic8Ball.askQuestion(question)
            }, 500);
        $("#8ball").effect("shake");

    };



    $("#questionButton").click(onClick);
});