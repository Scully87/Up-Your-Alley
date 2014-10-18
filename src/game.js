function UpYourAlley() {
	this.rolls = [];
	this.currentRoll = 0;
};

UpYourAlley.prototype.roll = function(pins) {
	this.rolls[this.currentRoll++] = pins;
};

UpYourAlley.prototype.score = function() {
	var score = 0;
};

