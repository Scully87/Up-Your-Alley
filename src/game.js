function UpYourAlley() {
	this.rolls = [];
	this.currentRoll = 0;
};

UpYourAlley.prototype.roll = function(pins) {
	this.rolls[this.currentRoll++] = pins;
};

UpYourAlley.prototype.score = function() {
	return this.rolls.reduce(function (i, n) {
	//reduce() method applies a function against an accumulator 
	//and each value of the array has to reduce it to a single value
	return i + n; });
	return score;
};
