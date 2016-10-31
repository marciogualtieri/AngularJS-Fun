﻿angular.module('angularJsFun', ['ngRoute'])
  .controller('mainController', MainController)
    .controller('someTabController', SomeTabController)
    .controller('anotherTabController', AnotherTabController)
    .controller('aThirdTabController', AThirdTabController)
    .factory('currentSpot', currentSpot)
    .directive('angularJsFunActiveMenu', angularJsFunActiveMenu)
  .config(function ($routeProvider) {
    $routeProvider.when('/anotherTab', {
      templateUrl: 'views/anotherTab.html',
      controller: 'anotherTabController'
    });
    $routeProvider.when('/aThirdTab', {
      templateUrl: 'views/aThirdTab.html',
      controller: 'aThirdTabController'
    });
    $routeProvider.otherwise({
      templateUrl: 'views/someTab.html',
      controller: 'someTabController'
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

function angularJsFunActiveMenu(currentSpot) {
  return function (scope, element, attrs) {
    var activeMenuId = attrs["angularJsFunActiveMenu"];
    var activeTitle = attrs["angularJsFunActiveTitle"];
    currentSpot.setCurrentSpot(activeMenuId, activeTitle);
  }
}

function angularJsFunMenuId(currentSpot) {
  var menuElements = [];

  function setActive(element, menuId) {
    if (currentSpot.getActiveMenu() == menuId) {
      element.addClass('active');
    } else {
      element.removeClass('active');
    }
  }

  return function (scope, element, attrs) {
    var menuId = attrs["angularJsFunMenuId"];
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

function SomeTabController(currentSpot) {
}

function AnotherTabController(currentSpot) {
}

function AThirdTabController(currentSpot) {
}