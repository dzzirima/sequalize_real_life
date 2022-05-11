/**top down sesign we are dealing with things of this level
 * we only require one level routes here 2 level are handled at their
 * respective level check article which need soom comments
 */

import { Router } from "express";
import userRoutes from './user.js'
import usersRoutes from './users.js'
import profilesRoutes from './profiles.js'
import tagsRoutes from "./tags.js"
/**no need t specify  the index.js coz it auto imported */

import articlesRoutes from "./articles/index.js"

const route = Router()

route.use('/user',userRoutes)
route.use('/users',usersRoutes)
route.use('/profiles',profilesRoutes)
route.use('/tags',tagsRoutes)
route.use('/articles',articlesRoutes)




export default route