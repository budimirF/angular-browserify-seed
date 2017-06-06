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

   /* angular.element($window).bind("scroll", function (){
      if (this.pageYOffset > 7300) {
         $scope.images = [{albumId : 101,
                                id : 1,
                      thumbnailUrl : "http://placehold.it/150/92c952",
                             title : "accusamus beatae ad facilis cum similique qui sunt",
                               url : "http://placehold.it/600/92c952"
         }];
        console.log($scope.images);
      }
      console.log(this.pageYOffset);
    });*/
  };
