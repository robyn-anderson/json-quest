require("dotenv").config()
const Express = require("express")
const app = Express()

app.use(Express.json())

const PORT = process.env.PORT


app.get("/api", (req, res) => {
  //sending the json to this API route
  res.sendFile(__dirname + "/answers.json")
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
