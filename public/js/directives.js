'use strict';

/* Directives */


window.angular.module('myApp.directives', ['myApp.services'])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('positions', function(Positions) {
    return {
      restrict: "E",
      controller: "PositionCtrl",
      template: '<select ng-model="search.pos" ng-options="c.abbr as c.pos for c in positions"></select>'
    };
  })
  .directive('teams', function() {
    return {
      restrict: "E",
      controller: "TeamCtrl",
      template: '<select ng-model="search.team" ng-options="c.abbr as c.team for c in teams"></select>'
    };
  })
.directive('searchlimit', function() {
  return {
    restrict: "E",
    template: '<select ng-model="limitct">' +
                '<option value="10">10</option>' +
                '<option value="25">25</option>' +
                '<option value="50">50</option>' +
              '</select>'
  };
})
.directive('player', function() {
  return {
    // restrict: "E",
    // scope: {
    //   player: "@"
    // },
    transclude: true,
    templateUrl: "partials/_playertile.html"
    // template: "test"
  };
})
// this isnt used anywhere yet
// THIS IS SEEN AS A DIRECTIVE WHEN USED AS AN ATTRIBUTE
.directive('team', function() {
  return {
    transclude: true,
    templateUrl: "partials/_team.html"
  }
})
.directive('teamlink', function() {
  return {
    transclude: true,
    scope: {
      // tid: "@"
      teamid: "@"
    },
    link: function(scope,element,attrs) {
      // scope.tid = attrs.tid
      // scope.teams = Teams.teams
      scope.teamid=attrs.teamid

      // scope.team=Teams.teams[attrs.teamid-1]
    },
    templateUrl: "partials/_teamlink.html"
    // template: "<td>jake2</td>"
  }
})
// .directive('teamlink', function() {
//   return {
//     transclude: true,
//     scope: {
//       tid: "@"
//     },
//     // controller: function($scope, Teams) {
//     //   $scope.team = Teams.team[tid]
//     // },
//     link: function(scope,element,attrs) {
//       scope.tid = attrs.tid
//     },
//     // compile: function() {
//     //   return '<a href="/app/index.html#/team/{{team.idno}}">{{team.team}}</div>';
//     // },
//     // template: '<a href="/app/index.html#/team/{{team.idno}}">{{team.team}}</div>'
//     template: "{{tid}}"
//   }
// })
.directive('playerinfo', function() {
  return {
    restrict: "E",
    template: '<td>derp{{player.name}}</td>',
    link: function(scope,element,attrs) {
      if (true) {
        var a = 3;
      }
    }
  };
});
