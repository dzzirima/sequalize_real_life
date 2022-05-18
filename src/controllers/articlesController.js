import { nanoid } from "nanoid";
import { createArticles, getUserArticles } from "../services/articlesService.js";
/**this file is the service file where all the logic is done
 * before we persist to the database */

export const createArticleService = async (req, res) => {
  const { title, description, body,authorUsername } = req.body;

  let articleOpts = {
    articleID: nanoid(10),
    title,
    description,
    body,
    authorUsername
  };

  try {
    /** call a function which is responsible for create the article which returns a true or fasle */

    let createdArticle = await createArticles(articleOpts);

    if (createdArticle) {
      res.status(200).json({
        success: true,
        message: "Article was successfully created ",
      });
    }
  } catch (error) {}
};


export const getArticleService = async (req,res) =>{
    let {userID} = req.body
    try {
        let userArticles = await getUserArticles(userID)

        res.status(200).json({
            success:true,
            message:'articles associated with this user',
            data:{
                userArticles
            }
        })
    } catch (error) {

        return res.status(304).json({
            success:false,
            message:error.message
        })
        
    }
}