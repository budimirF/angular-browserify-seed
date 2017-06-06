/**
 * Created by budimir on 05.06.17.
 */
'use strict';

module.exports = /*@ngInject*/
  function albumController($scope, $routeParams, $location, dashboardService) {
    var albumId = $routeParams.albumId;

    $scope.getByAlbum = function () {
        dashboardService.getImagesByAlbum(albumId).then(function (res) {
        $scope.album = res;
      });
    };

    $scope.getImage = function (imageId) {
      $location.path('/image/' + imageId);
    };
  };
