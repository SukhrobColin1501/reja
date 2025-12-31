const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
"mongodb+srv://egamberdievsukhrob_db_user:RmxcK02h3T1tUCJ6@cluster0.umdu6s3.mongodb.net/";

mongodb.connect(
    connectionString,
    {useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) console.log ("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            module.exports = client;
            
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function (){
                console.log(
                    `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
                );
            });
        }
    }
);