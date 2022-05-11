
/**this is the controller function for all the user creation */

import { Users } from "../models/index.js"

let createUser = async (userOpts) =>{

    if(!userOpts.username){
        throw new Error('Did not suppy username')
    }
    
    if(!userOpts.email){
        throw new Error('Did not suppy email')
    }
    
    if(!userOpts.password){
        throw new Error('Did not suppy password')
    }  

    try {
        const user = await Users.create({
            ...userOpts
        })

        if(!user){
            throw new Error("Error creating user")
        }
        
        return user
        
    } catch (error) {
        console.log(error)
    }
}

export {createUser}