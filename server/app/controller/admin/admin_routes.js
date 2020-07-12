'use strict';
const adminController = require('./admin_ctrl');

module.exports = function (router) {

    router
    // .get('/users',  UserController.GetUsers)
    // .get('/users/user_id',  UserController.GetUser)
    // .patch('/users/user_id',  UserController.GetUsers)
    // .delete('/users/user_id',  UserController.ToggleDelete);
    .get('/get-admin',adminController.getAdmin)

    return router;
}

