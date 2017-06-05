'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .controller('dashboardController', require('./controllers/dashboard.controller'))
        .controller('albumController', require('./controllers/album.controller'))
        .controller('imageController', require('./controllers/image.controller'));
