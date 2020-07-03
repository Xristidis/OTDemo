1. I spent about 20 hours on the coding assignment. If I had more time I would have styled the page without a UI library and would have made it look mouch more apealing user friendly. I would have added another input area to further refine the results and gotten rid of more npm vulnerabilities.
2.      .then(res => {
          restaurants = res.data.restaurants;
          this.setState({
            restaurants,
            loaded: true,
            loading: false
          });
        })
        I enjoy using the arrow functions that were released with ES6 and finf them useful because there isnt always a need for braces and a return statement as seen in the function above. 

3. Redux was a more challenging part of this assignment for me. I recently found out about the redux-toolkit library and will be using it for future projects becuase it provides helper functions for simplifying redux code. 

4. I would first utilize dev tools for any errors or warnings. If things work but are just slow I would then look into any DNS issues and network connectivity and lastly using dev tools or logs look for errors/poorly written code.

5. I would make sure it was more secure by using tokens to control access. I would have also added much more details to the API in the form of rating, and even type of cuisine (i.e. Mexican, Indian, Greek).

6. 

{
    "name": [{
        "firstName": "Peter",
        "lastName": "Christidis"
    }],
    "interests": [
        "Programming",
        "Football (soccer)",
        "Philosophy",
        "Rock climbing",
        "Board Games"
    ],
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
    }]
}
    