/**this is the controller function for all the user creation */

import { Users } from "../models/index.js";
import { createToken } from "../utils/jwt.js";

let createUser = async (userOpts) => {
  if (!userOpts.username) {
    throw new Error("Did not suppy username");
  }

  if (!userOpts.email) {
    throw new Error("Did not suppy email");
  }

  if (!userOpts.password) {
    throw new Error("Did not suppy password");
  }

  try {
    const user = await Users.create({
      ...userOpts,
    });

    if (!user) {
      throw new Error("Error creating user");
    }

      /**selecting the partuclur fields from the user
       * tokens are never stored in db
       * we need to exclude some entities from the query
       */
    let createdUser = await Users.findOne({
        attributes:['email','username','bio','image'],
        where:{
            username:user.username
        }
    })
    const token = createToken(createdUser.get())
/**.get will turn it into a plan json object */

    

    return {
        ...createdUser.get(),
        token
    };
  } catch (error) {
    console.log(error);
  }
};
/**function to login the user */
let verifyUser = async (userOpts) => {

 

    if (!userOpts.email) {
      throw new Error("Did not suppy email");
    }

    if (!userOpts.password) {
      throw new Error("Did not suppy password");
    }

    const user = await Users.findOne({
    attributes:['email','username','bio','image'],
      where: {
        email: userOpts.email,
      },
    });

    if (!user) {
      throw new Error("No user with given  email address");
    }

    if (user.passord != userOpts.password) {
      throw new Error("Password does not match !!");
    }

    /**removing the password password */
    delete user.password

    const token = await createToken(user.get())
    

    return {
        ...user.get(),
        token
    };
  
};

export { createUser, verifyUser };
