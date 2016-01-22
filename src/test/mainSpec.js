describe('setting views', function() {
  it('the default view is the main view', function() {
      var scope = {},
          mainController = new MainController(scope);
      expect(scope.activeMenu).toBe('');
  });
});
