/**this file form the bases of the configuration of the database */
import { DataTypes, Sequelize } from "sequelize";

const db = new Sequelize("realworld_api", "postgres", "1311", {
  host: "localhost",
  dialect: "postgres",
});

const Users = db.define("User", {
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
    unique: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  bio: DataTypes.STRING,
  passwpord:{
      type:DataTypes.STRING,
      isNull:false

  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true,
    },
  },
});

const Comments = db.define(
  "Comment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    body: {
      type: DataTypes.STRING,
      validate: {
        isNull: false,
      },
    },
   
  },
  {
    timestamps: true,
  }
);

const Articles = db.define("article", {
  slug: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(100),
  },
  body: Sequelize.STRING,
});
const Tags = db.define("tag", {
  name: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
});

/**defining the relationships */
Comments.belongsTo(Articles)
Articles.hasMany(Comments)

Comments.belongsTo(Users ,{as:"author"})


Articles.belongsTo(Users,{as:'author'})



/**many to many relationship */
Articles.belongsToMany(Users,{through:'favourites'})
Users.belongsToMany(Articles,{through:'favourites'}) 

Articles.belongsToMany(Tags,{through:'article_tags'})
Tags.belongsToMany(Articles,{through:'article_tags'})



export {db,Users,Articles,Comments,Tags}
