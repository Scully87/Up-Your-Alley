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

  it('Allows rolls to be made', function() {
 		expect(game.rolls).toEqual([])
 	});

  describe('Scorecard can record', function() { 
   
    it('A gutter game', function() {
      rollCount.call(game, 0, 20);
      //The call() method calls a function with,
      // a '.this' value and arguments (pins, number of rolls).
      expect(game.score()).toEqual(0);
    });
    
    it('A game of one pin each roll', function() {
      rollCount.call(game, 1, 20);
      expect(game.score()).toEqual(20);
    });

     Strike = function() {
      this.roll(10)
    };

    it('A strike', function() {
      Strike.call(game)
      // adds 10 to the score without using single pin count,
      rollCount.call(game, 0, 0)
      // 18 rolls remain after 1 strike
      expect(game.score()).toEqual(10);
    });

    it("A strike with a bonus of the next two rolls' total", function() {
      Strike.call(game)
      rollCount.call(game, 7, 2);
      //adds 10 to the score as a strike,
      //the next roll two rolls are 7 each.
      //this strike will now be worth 24
      expect(game.score()).toEqual(24);
    });

    Spare = function() {
      game.roll(5)
      game.roll(5)
    };
  
    it('A spare', function() {
      Spare.call(game)
      expect(game.score()).toEqual(10);
    });

    it('A spare with a bonus of the next roll', function() {
      Spare.call(game)
      rollCount.call(game, 4, 1)
      expect(game.score()).toEqual(14);
    });

  });

});