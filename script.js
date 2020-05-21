$(document).ready(function(){
 
    var magic8Ball = {};
    
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams.", "Think your self", "I don't know", "Don't disturb now", "Ask me later", "Use common sense"];
 
    magic8Ball.askQuestion = function(question){
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
 
        $("#answer").text( answer );
		$("#answer").hide();
		$("#answer").fadeIn(4000);
        
		console.log(question);
        console.log(answer);
		
    };
     $("#answer").hide();
 
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    var onClick = function() {
   setTimeout(
       function() {
           var question = prompt("Ask a yes or no question")
           magic8Ball.askQuestion(question)
       }, 500);
      $("#8ball").effect( "shake" );  

    };
 


	$("#questionButton").click( onClick );
});