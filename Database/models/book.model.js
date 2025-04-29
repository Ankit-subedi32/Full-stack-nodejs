

// books name ko table create garyara bookname, bookprice, bookauthor, bookgen  column haru create garne 

const { DataTypes } = require("sequelize")

const bookModel = (sequelize,Datatypes) => {

   const Book = sequelize.define("book",{
        bookName : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        bookPrice : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        bookAuthor : {
            type : DataTypes.STRING,
        },
        bookGen : {
            type : DataTypes.STRING,
        },
    })
    return Book

}
module.exports = bookModel


