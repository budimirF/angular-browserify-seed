/**
 * Created by budimir on 05.06.17.
 */
'use strict';

module.exports = /*@ngInject*/
  function imageController($scope, $routeParams, dashboardService) {
    var photoId = $routeParams.photo_id;

    $scope.getImage = function  () {
      dashboardService.getImageById(photoId).then(function (res) {
        $scope.image = res;
      });
    };

  };
