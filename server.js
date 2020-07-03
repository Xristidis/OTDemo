const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path');

app.use(express.static(`${__dirname}/build`))

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.get('/api', (req, res) => {
    res.send(
        {
            "name": [{
                "firstName": "Peter",
                "lastName": "Christidis"
            }],
            "skills": [{
                "front-end": [
                    "HTML",
                    {
                        "CSS": [
                            "Flexbox",
                            "AntD",
                            "Scss",
                        ]
                    },
                    {
                        "javaScript": [
                            "ReactJs",
                            "Redux",
                            "JQuery",
                            "NodeJS",
                            "Socket.io",
                            "ES6", {
                                "testing": [
                                    "Jest",
                                    "Enzyme"
                                ]
                            }
                        ]
                    },
                    "ReactJs",
                    "Redux",
                ],
                "backEnd": [
                    "NodeJs",
                    "ExpressJs",
                ],
                "buildTools": [
                    "Webpack",
                    "Grunt",
                    "Bower"
                ],
                "CMS": [
                    "WordPress",
                    "Squarespace"
                ],
                "cloudComputing": [
                    "Heroku",
                    "Netlify"
                ],
                "tools": [
                    "Git",
                    "Git Hub",
                    "Visual Studio Code",
                    "Jira",
                    "Slack"
                ]
            }],
            "interests": [
                "Programming",
                "Football (soccer)",
                "Philosophy",
                "Rock climbing",
                "Board Games"
            ]
        }
    )
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});