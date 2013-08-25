'use strict';

/* Controllers */

window.angular.module('myApp.controllers', ['myApp.services']).
  controller('Ctrl',function($scope,NFLTeams,Roster) {
    $scope.roster = Roster;
    $scope.teams = NFLTeams.teams;
    $scope.limitct = 10;

    $scope.fantasy = {team: []};

    $scope.addPlayer = function (player) {
      // idno uniquely identifies player
      if ($scope.fantasy.team.map(function(val){return val['idno'];}).indexOf(player['idno'])===-1) {
        // doesn't exist, push
        $scope.fantasy.team.push(player);
      }
    };

    $scope.removePlayer = function (player) {
      var index = $scope.fantasy.team.map(function(val){return val['idno'];}).indexOf(player['idno']);
      if (index!=-1) {
        $scope.fantasy.team.splice(index,1);
      }
    };
  })
  .controller('PositionCtrl', function($scope, Positions) {
    $scope.positions = Positions.positions;
  })
  .controller('TeamCtrl', function($scope, $routeParams, NFLTeams) {
    $scope.nflteams = NFLTeams.teams;
    $scope.nflteam = NFLTeams.teams[$routeParams['tid']];
  })
  .controller('PlayerCtrl', function($scope, $routeParams, Roster) {
    $scope.player = Roster.personnel[$routeParams['pid']];
  });