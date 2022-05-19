import { Articles, Users } from "../models/index.js";

export const createArticles = async (articleOpts) => {
  //TO DO do all the sanitations
  try {
    let newArticle = await Articles.create({
      ...articleOpts,
    });

    return true;
  } catch (error) {
    return false;
  }
};

export const getUserArticles = async (userID) => {
    console.log(userID)
  try {
    let userFound = await Users.findByPk(userID)
    let userArticles = await Articles.findAll({
     include:Users
    });
    /**getting associated articles */
    let associatedArticles = userFound.getArticles()

   
    return associatedArticles;
  } catch (error) {
    return error.message;
  }
};
