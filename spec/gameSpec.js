describe('UpYourAlley', function() {
	var game;

	beforeEach(function() {
		game = new UpYourAlley();
	});

	it('should allow rolls to be made', function() {
		expect(game.rolls).toEqual([])
	});

  it("handle gutter game", function() {
    for (i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

});