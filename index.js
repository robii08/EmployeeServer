//import json server
const jsonServer = require('json-server')

//create json server - create()
const employeeServer = jsonServer.create()

//create path for the json file(data) - router()
const router = jsonServer.router("db.json")

//create middleware to parse json
const middleware = jsonServer.defaults()

//allow server to use middleware and router
employeeServer.use(middleware)
employeeServer.use(router)

//set up port for the server to run
PORT = 3000 || process.env.PORT

employeeServer.listen(PORT,()=>
{
    console.log(`server running successfully @ ${PORT}`);
})