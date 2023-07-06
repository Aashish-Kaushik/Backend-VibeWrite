import express from "express"
import './config/config.js'
const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send({ message: "server is running" })
})

app.listen(PORT, () => {
    console.log(`server listen on  ${PORT}`)
})