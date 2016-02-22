﻿angular.module('myWebsite', ['ngRoute'])
  .controller('mainController', MainController)
    .controller('introductionController', IntroductionController)
    .controller('historyController', HistoryController)
    .controller('trainingController', TrainingController)
    .factory('currentSpot', currentSpot)
    .directive('myWebsiteActiveMenu', myWebsiteActiveMenu)
  .config(function ($routeProvider) {
    $routeProvider.when('/history', {
      templateUrl: 'views/history.html',
      controller: 'historyController'
    });
    $routeProvider.when('/training', {
      templateUrl: 'views/training.html',
      controller: 'trainingController'
    });
    $routeProvider.otherwise({
      templateUrl: 'views/introduction.html',
      controller: 'introductionController'
    });
  });

function currentSpot() {
  var activeMenuId = '';
  var titleText = '';

  return {
    setCurrentSpot: function (menuId, title) {
      activeMenuId = menuId;
      titleText = title;
    },
    getActiveMenu: function () {
      return activeMenuId;
    },
    getTitle: function () {
      return titleText;
    }
  }
}

function MainController($scope, currentSpot) {
  $scope.isActive = isActive;
  $scope.getTitle = getTitle;

  function isActive(menuId) {
    return currentSpot.getActiveMenu() == menuId;
  }

  function getTitle() {
    return currentSpot.getTitle();
  }
}

function myWebsiteActiveMenu(currentSpot) {
  return function (scope, element, attrs) {
    var activeMenuId = attrs["myWebsiteActiveMenu"];
    var activeTitle = attrs["myWebsiteActiveTitle"];
    currentSpot.setCurrentSpot(activeMenuId, activeTitle);
  }
}

function myWebsiteMenuId(currentSpot) {
  var menuElements = [];

  function setActive(element, menuId) {
    if (currentSpot.getActiveMenu() == menuId) {
      element.addClass('active');
    } else {
      element.removeClass('active');
    }
  }

  return function (scope, element, attrs) {
    var menuId = attrs["myWebsiteMenuId"];
    menuElements.push({ id: menuId, node: element });

    var watcherFn = function (watchScope) {
      return watchScope.$eval('getActiveMenu()');
    }
    scope.$watch(watcherFn, function (newValue, oldValue) {
      for (var i = 0; i < menuElements.length; i++) {
        var menuElement = menuElements[i];
        setActive(menuElement.node, menuElement.id);
      }
    });
  }
}

function IntroductionController(currentSpot) {
}

function HistoryController(currentSpot) {
}

function TrainingController(currentSpot) {
}