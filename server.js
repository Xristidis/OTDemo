const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');

app.use(express.static(`${__dirname}/build`))

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});