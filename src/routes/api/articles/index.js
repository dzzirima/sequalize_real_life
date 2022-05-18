import { Router } from "express";
import commentsRoutes from "./comments.js"
import { createArticleService, getArticleService } from "../../../controllers/articlesController.js";
/**
 * Here we are dealing with a deeper level hence dealt with it here
 */

const route = Router()
route.post('/',createArticleService)
route.get('/',getArticleService)


/**handling deeper level of routing of the app */
route.use('/comments',commentsRoutes)



export default route