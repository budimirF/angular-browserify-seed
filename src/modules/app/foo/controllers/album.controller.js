/**
 * Created by budimir on 05.06.17.
 */
'use strict';

module.exports = /*@ngInject*/
  function albumController($scope, $routeParams, $location, dashboardService) {
    var albumId = $routeParams.albumId;
    getByAlbum();

    function getByAlbum () {
        dashboardService.getImagesByAlbum(albumId).then(function (res) {
        $scope.album = res;
      });
    }

    $scope.getImage = function (imageId) {
      $location.path('/image/' + imageId);
    };
  };
