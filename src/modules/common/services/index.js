'use strict';

module.exports =
    angular.module('expressly.common.services', [])
        .factory('dashboardService', require('./dashboard.service'));
