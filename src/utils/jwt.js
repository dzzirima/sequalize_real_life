/**signing of the token stuff */
import jwt from "jsonwebtoken"

const JWT_SECRET = "gafanation_secret"

const createToken = async (user)=>{
    const token = jwt.sign(user,JWT_SECRET)
    return token
}


const verifyToken = async (user) =>{

    const user = jwt.verify(token,JWT_SECRET)
    return user
}

export {createToken,verifyToken}