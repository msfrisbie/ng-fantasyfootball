'use strict';

/* Filters */

window.angular.module('myApp.filters', [])
  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])
  .filter('nameonly', function($scope) {
    return function(obj) {
      var re = new RegExp($scope.search, 'i');
      return !$scope.search || re.test(obj.fname) || re.test(obj.lname);
    }
  })
