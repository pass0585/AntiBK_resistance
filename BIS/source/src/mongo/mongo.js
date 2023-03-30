
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://BSMaster1:5NzOXDAA912zjmPA@bananasubway.qhaujax.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 
});

 module.exports = client