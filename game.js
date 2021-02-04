var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = 0;
var level = 0;

//choose random color, flash button, play sound
function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);
	$("#"+randomChosenColor).fadeOut(100).fadeIn(100);
	playSound(randomChosenColor);
	level++;
	$("#level-title").html("Level " + level);

}
//user click button, save into array
$('.btn').click(function(){
	var userChosenColor = this.id;
	userClickedPattern.push(userChosenColor);
	// alert(userChosenColor);
	// console.log(userClickedPattern);
	playSound(userChosenColor);
	animatePress(userChosenColor);
});

function playSound(name) {
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

function animatePress(currentColor) {
	$("#" + currentColor).addClass("pressed");
	setTimeout(function(){
		$("#" + currentColor).removeClass("pressed");
	}, 100);
}

$(document).keypress(function() {
	if(started == 0) {
		nextSequence();
		started = 1;
		$("#level-title").html("Level " + level);
	}
	
});