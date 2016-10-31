describe('setting views', function() {
  it('the default view is the main view', function() {
      var scope = {};
      new MainController(scope, new currentSpot);

      console.log(scope.getTitle);

      expect(scope.getTitle()).toBe('');
  });
});
