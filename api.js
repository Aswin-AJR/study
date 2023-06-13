const express = require("express")
const cors = require('cors');
const basicAuth = require('basic-auth');
const app = express()
const port = 3000

app.use(cors())


const auth = (req, res, next) => {
    const credentials = basicAuth(req)
    console.log('%c⧭', 'color: #917399', credentials,credentials.name !== "username");
    if (credentials.name !== "username") {
        res.setHeader('WWW-Authenticate', 'Basic realm="Enter your credentials"');
        return res.status(401).send('Unauthorized');
    }
    return next()

}

app.get("/api/sample", auth, (req, res) => {
    res.send("Hi this AJR")
})


app.listen(port, () => {

    console.log("App running in 3000")
})