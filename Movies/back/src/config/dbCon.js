const mongoose = require("mongoose")

require("dotenv").config()

const dbCon = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@proyectom2.1ffdyx8.mongodb.net/movies`)
        console.log("Database Connection Successful");
    } catch (error) {
        throw new Error("Database Connection Error")
    }
}

module.exports = dbCon