let client = require("../dbConnect");
let myappCollection;

setTimeout(() => {
    myappCollection = client.db().collection("Puppy");
}, 2000) //time out if connection to db takes more than 2000 milliseconds

const getProjects = (callback) => {
    myappCollection.find({}).toArray(callback);
}

const insertProjects = (project, callback) => {
    myappCollection.insert(project, callback);
}



module.exports ={insertProjects, getProjects}