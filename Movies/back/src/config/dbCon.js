const mongoose = require("mongoose")

require("dotenv").config()

const dbCon = async () => {
    try {
        await mongoose.connect(`mongodb+srv://diego24carreon:PIiToBARqlZWxby9@movies.6cowz.mongodb.net/`)
        console.log("Database Connection Successful");
    } catch (error) {
        throw new Error("Database Connection Error")
    }
}

module.exports = dbCon

