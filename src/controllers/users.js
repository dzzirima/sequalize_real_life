/**this is the controller function for all the user creation */

import { Users } from "../models/index.js";

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

    return user;
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
    

    return user;
  
};

export { createUser, verifyUser };
