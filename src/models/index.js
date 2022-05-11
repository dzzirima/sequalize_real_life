/**this file form the bases of the configuration of the database */
import { DataTypes, Sequelize } from "sequelize";

const db = new Sequelize('realworld_api','postgres','1311',{
    host:'localhost',
    dialect:'postgres'
})


const User = db.define('user',{
    email:{
        type:DataTypes.STRING,
        validate:{
            isEmail:true
        },
        unique:true,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    bio:DataTypes.STRING,
    image:{
        type:DataTypes.STRING,
        allowNull:true,
        validate:{
            isUrl:true
        }
    }



})

export default db