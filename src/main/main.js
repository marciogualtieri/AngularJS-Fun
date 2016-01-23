angular.module('marciogualtieri', [])
  .controller('mainController', MainController);

/**
 * Main Page's AngularJS controller
 *
 * @param $scope: AngularJS scope
 */
function MainController($scope) {
  $scope.activeMenu = '';
  $scope.isActive = isActive;
  $scope.showMain = showMain;
  $scope.showHistory = showHistory;
  $scope.showCourses = showCourses;

  $scope.showMain();

  function setView(view, menuId) {
    $scope.view = view;
    $scope.activeMenu = menuId;
  }

  function isActive(menuId) {
    return $scope.activeMenu == menuId;
  }

  function showMain() {
    setView('main', '');
  }

  function showHistory() {
    setView('history', 'History');
  }

  function showCourses() {
    setView('courses', 'Courses');
  }
}
