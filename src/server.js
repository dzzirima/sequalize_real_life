 import express from "express";
 import apiRoutes from './routes/api/index.js'

 const app = express()

 // For Post Post request
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

 //Routes
 app.use('/api',apiRoutes)

 app.listen(4000,()=>{
     console.log("Server started at port 4000")
 })