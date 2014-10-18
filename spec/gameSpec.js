describe('UpYourAlley', function() {

	beforeEach(function() {
		game = new UpYourAlley();
	});

	rollCount = function (pins, n) {
		//n = number of rolls
    for (var i = 0; i < n; i++) {
      this.roll(pins);
    }
  };
   
  it('scores a gutter game', function () {
    rollCount.call(game, 0, 20);
    //The call() method calls a function with a this value and arguments.
    expect(game.score()).toEqual(0);
  });
  
  it('scores a full game of ones', function() {
    rollCount.call(game, 1, 20);
    expect(game.score()).toEqual(20)
  });
 
});