import { Router } from "express";
import commentsRoutes from "./comments.js"
/**
 * Here we are dealing with a deeper level hence dealt with it here
 */

const route = Router()

route.use('/comments',commentsRoutes)



export default route