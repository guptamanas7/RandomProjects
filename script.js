var numBoxes = 6;
var colors = [];
var pickedColor;
var clicksleft = document.querySelector("#clicksleft");
var boxes = document.querySelectorAll(".box");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var hardButton = document.querySelector(".hardbtn");
var easyButton = document.querySelector(".easybtn");
var c = 0;
init();

function init() {
	colorDisplay.textContent = pickedColor;
	setupBoxes();
	setupMode();
	reset();
}

resetButton.addEventListener("click", function() {
	reset();
});

function setupBoxes() {
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].style.backgroundColor = colors[i];
		boxes[i].addEventListener("click", function() {
			
			
			
			var clickedColor = this.style.backgroundColor;
			c++;
			clicksleft.textContent=numBoxes-1-c;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				c=0;
				changeColors(pickedColor);
			}
			else if(c == numBoxes-1) {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "You loose";
				resetButton.textContent = "Play Again";
				c=0;
				setTimeout(function(){alert("LMAO NOOB!\nClick OK for NEW GAME!"); reset();},600);
				
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	}
}

function setupMode() {
	
		hardButton.addEventListener("click", function() {
			numBoxes = 6;
			reset();});
			
		easyButton.addEventListener("click",function(){
			numBoxes = 3;
			reset();});
	
			
		

}

function reset() {
	colors = genRandomColors(numBoxes);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "rgb(255, 198, 10)";
	resetButton.textContent = "New Colors";
	clicksleft.textContent=numBoxes-1;
	messageDisplay.textContent = "";
	for (var i = 0; i < boxes.length; i++) {
		if(colors[i]) { 
			boxes[i].style.display = "block";
			boxes[i].style.backgroundColor = colors[i];
		}
		else {
			boxes[i].style.display = "none";
		}

	}
	
}

function changeColors(color) {
	for(var i = 0; i < boxes.length; i++) {
		boxes[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;}
		
	
}

function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}

function makeColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}




