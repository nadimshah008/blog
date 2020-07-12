'use strict';
//commons
const commonQueries =  require("../../../lib/commonquery");

const constant =  require("../../../lib/constants");

const Response =  require("../../../lib/response");

// models
const admins =  require("./model/admin")


module.exports = {
    getAdmin:getAdmin
}

function getAdmin(req,res){

    async function getAdmin(){
        try{

           

            res.json(Response(constant.code.SUCCESSCODE,constant.messages.FETCHED_ALL))

            

        }
        catch(error){

            res.json(Response(constant.code.BADREQUEST,constant.messages.FAILED_PROCESS))

        }



    }


    getAdmin().then(function(){})


}
