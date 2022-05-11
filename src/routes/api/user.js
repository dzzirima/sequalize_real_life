import { Router } from "express";

const route = Router()
route.get('/',(req,res)=>{

    res.status(200).json({
        user:{
            email:"user@gmail.com",
            token:"userToken"
        }
    })
})



export default route