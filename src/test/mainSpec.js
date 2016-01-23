describe('setting views', function() {
  it('show the main view', function() {
      var scope = {};
      new MainController(scope);
      expect(scope.activeMenu).toBe('');
  });
});
