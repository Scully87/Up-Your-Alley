describe('UpYourAlley', function() {

	beforeEach(function() {
		game = new UpYourAlley();
	});

	rollCount = function(pins, n) {
		//n = number of rolls
    for (var i = 0; i < n; i++) {
      this.roll(pins);
    }
  };

  it('allows rolls to be made', function() {
 		expect(game.rolls).toEqual([])
 	});

  describe('Scorecard can', function() { 
   
    it('record a gutter game', function() {
      rollCount.call(game, 0, 20);
      //The call() method calls a function with,
      // a '.this' value and arguments (pins, number of rolls).
      expect(game.score()).toEqual(0);
    });
    
    it('record a game of one pin each roll', function() {
      rollCount.call(game, 1, 20);
      expect(game.score()).toEqual(20);
    });

    it('record a strike', function() {
      game.roll(10)
      // adds 10 to the score without using single pin count,
      // 18 rolls remain after 1 strike
      rollCount.call(game, 0, 18)
      expect(game.score()).toEqual(10);
    });

  });

});