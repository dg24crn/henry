const app = require('./src/app')

const dbCon = require("./src/config/dbCon")

const PORT = 3000

dbCon().then(
    res=> app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`))
)


