import { Articles } from "../models/index.js"

export const createArticles = async (articleOpts) =>{
    //TO DO do all the sanitations 
    try {
        let newArticle = await Articles.create({
            ...articleOpts
        })

        console.log(newArticle)

        return true
        
    } catch (error) {
        return false
        
    }
    

}


