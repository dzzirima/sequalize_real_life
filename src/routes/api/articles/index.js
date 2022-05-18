import { Router } from "express";
import commentsRoutes from "./comments.js"
import { createArticleService } from "../../../controllers/articlesService.js";
/**
 * Here we are dealing with a deeper level hence dealt with it here
 */

const route = Router()
route.post('/',createArticleService)


/**handling deeper level of routing of the app */
route.use('/comments',commentsRoutes)



export default route