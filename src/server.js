 import express from "express";
 import apiRoutes from './routes/api/index.js'
 import { db } from "./models/index.js";

 const app = express()

 // For Post Post request
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

 //Routes
 app.use('/api',apiRoutes)

try {
    await db.sync({force:true})   
 app.listen(4000,()=>{
    console.log("Server started at port 4000")
})
} catch (error) {
    console.log(error)
    
}
