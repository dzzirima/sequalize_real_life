import { Router } from "express";
import { createUser,verifyUser } from "../../controllers/users.js";

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

route.post('/login',async(req,res)=>{
    
    try {
        const verifiedUser = await verifyUser(req.body.user)
        res.status(200).json(verifiedUser)
        
    } catch (error) {
        return res.status(403).json({
            errors:{
                body:[error.message]
            }
        })
        
    }
})



export default route