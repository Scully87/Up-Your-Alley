function UpYourAlley() {
	this.rolls = [];
	this.currentRoll = 0;
};

UpYourAlley.prototype.roll = function(pins) {
	this.currentRoll += pins;
};

UpYourAlley.prototype.score = function() {
	return this.currentRoll;
};
