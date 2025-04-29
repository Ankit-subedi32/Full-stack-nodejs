


// hami yesa chai datbase connection ko code or logic lekhxau



const {Sequelize,DataTypes,} = require("sequelize")

            // OR

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataType = sequelize.DataType

const sequelize = new Sequelize ("postgresql://postgres.titueykrluypwkgccgaf:Ankitsubedi@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")


sequelize.authenticate()
.then(() => {
    console.log("Connected ")
})
.catch((err) => {
    console.log("Error" +err)
})


const db ={}
db.sequelize = sequelize
db.Sequelize = Sequelize

db.books = require("./models/book.model")(sequelize,DataTypes)
// yo chai uuta bata expot garyako lai import garyako aane direct function lai call garyako as arguments


// migrate code halna parxa database table create garyako lai supabase ma halna ko laghi 

sequelize.sync({alter : false}).then(() => 
console.log("Mirgate vayo")
)


module.exports = db