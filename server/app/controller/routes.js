'use strict';
module.exports = function (express) {
    const router = require("express").Router();

    
    // user
    require('./admin/admin_routes')(router);
    //admin
    require('./user/user_routes')(router);

    return router;
}