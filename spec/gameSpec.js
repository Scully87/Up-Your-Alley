describe('Game', function() {

	beforeEach(function() {
		game = new Game();
	});

	it('should allow rolls to be made', function() {
		expect(game.rolls).toEqual([])
	});

	it("can score gutter game", function() {
  	for(var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0);
  });


});