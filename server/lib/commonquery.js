const commonQuery = {};

const mongoose=  require("mongoose");


commonQuery.findOneData =async function findOneData(collection,condition){
 return   new Promise(function(resolve, reject) {
        collection.find(condition).exec(function(err,result){
            if(err){
                reject(err)
            }
            else{
                resolve(result)
            }

        })
    })
}


commonQuery.findAll =async function findAll(collection,condition){
    return   new Promise(function(resolve, reject) {
        if(condition){
            condition =  condition
        }
        else{
            condition = {}
        }
           collection.find(condition).exec(function(err,result){
               if(err){
                   reject(err)
               }
               else{
                   resolve(result)
               }
   
           })
       })
   }



commonQuery.insertIntoCollection =async function insertIntoCollection(collection,data){
 return   new Promise(function(resolve, reject) {
        console.log(collection,data)
       collection.create(data,function(err,result){

        if(err){
            reject(err)
        }
        else{
            resolve(result)
        }

       })
    })
}



module.exports =  commonQuery;