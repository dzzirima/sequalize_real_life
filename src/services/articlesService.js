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
    let userArticles = await Articles.findAll({
     include:Users
    });

   
    return userArticles;
  } catch (error) {
    return error.message;
  }
};
