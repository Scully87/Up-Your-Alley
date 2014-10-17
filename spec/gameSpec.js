describe('Game', function() {

	beforeEach(function() {
		game = new Game;
	});

	it('should allow rolls to be made', function() {
		expect(game.rolls).toEqual([])
	});

});