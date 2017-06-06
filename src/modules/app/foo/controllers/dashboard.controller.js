/**
 * Created by budimir on 04.06.17.
 */
'use strict';

module.exports = /*@ngInject*/
  function dashboardController($scope, $location, dashboardService) {
     $scope.getAllImages = function  () {
        dashboardService.getAllImages().then(function (res) {
        $scope.images = res;
      });
    };

    $scope.getByAlbum = function (albumId) {
      $location.path('/album/' + albumId);
    };

  };
