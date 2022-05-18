import { nanoid } from "nanoid"
import { createArticles } from "../services/articlesService.js"
/**this file is the service file where all the logic is done 
 * before we persist to the database */

export const createArticleService = async(req,res) =>{

    const {title,description,body} = req.body

    
    let articleOpts = {
        articleID:nanoid(10),
        title,
        description,
        body
        
    }

    try {
        
        /** call a function which is responsible for create the article which returns a true or fasle */


        
        let createdArticle  = await createArticles(articleOpts)

        if(createdArticle){
            res.status(200).json({
                success:true,
                message:"Article was successfully created "
            })
        }
    } catch (error) {


        
    }
}