import { Router } from "express";
import { createUser } from "../../controllers/users.js";

const route = Router()
route.get('/',(req,res)=>{

    res.status(200).json({
        user:{
            email:"user@gmail.com",
            token:"userToken"
        }
    })
})

route.post('/',async(req,res) =>{


   const createdUser =  await createUser({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email

    })

    res.status(200).json({
        createdUser
    })
})



export default route