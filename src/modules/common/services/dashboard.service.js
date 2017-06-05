'use strict';

module.exports = /*@ngInject*/
    function dashboardService($rootScope, $http) {
      function getData(url) {
        return $http.get(url)
          .then(function (res) {
              return res.data;
            },
            function (err) {
              console.log(err);
            });
      }

      function getAllImages() {
        return getData('http://jsonplaceholder.typicode.com/photos').then(function (res) {
          var albumId,
              albumArr = [];

          res.forEach(function (el) {
            if (el.albumId !== albumId) {
              albumArr.push(el);
              albumId = el.albumId;
            }
          });
          return albumArr;
        });
      }

      function getImagesByAlbum(album_id) {
        return getData('http://jsonplaceholder.typicode.com/albums/'+ album_id + '/photos');
      }

      function getImageById(id) {
        return getData('http://jsonplaceholder.typicode.com/photos/'+ id );
      }

      return {
        getAllImages: getAllImages,
        getImagesByAlbum : getImagesByAlbum,
        getImageById : getImageById
      };
    };
