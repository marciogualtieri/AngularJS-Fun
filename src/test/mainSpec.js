describe('setting views', function() {
  it('the default view is the main view', function() {
      var scope = {};
      new MainController(scope);
      expect(scope.activeMenu).toBe('');
  });
});
