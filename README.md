[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Pet-Playground

## Description

This project application was built to get pet owners, and the pet loving community and enthusiasts together in one whole social media created specifically for pet(s). Other known methods to follow a pet community would be through other social medias designed for humans and then created a platform for their pets. But with our application it is designed specifically for pets and maintian a safe environment for them. Users are allowed to create accounts for their pet(s) with a bio and favorite food and favotire toy. Users can also share photos of their pet(s) for others to see with a title and caption of their shared moment. User are able to like shared post and also leave comments, bringing a pet community togeher. This application was made to be very interactive, accepting and responsing to user inputs. In order to build this project many new skill sets had to be applied that was taught throughout the course. This is what motivated us to build this application, to see it come to life and be useful to every pet loving owner to share cherished moments of their pet(s) as well as for pet enthusiastic to be able to see these shared moments. We used Node.js and Express in order to create a RESTful api. We protected our APi keys and other sensitive information with environment variables. There is an example folder of that data to use if outside groups/memebers decided to collaborate/work on this repo. To set up our template engine we used Handebars.js. This allowed us to construct our application in a simple format with built-in helpers and partials. Built-in helpers #if allowed us to conditionally render a block if a condition was met, if not the handbar will not render the block. In Our application we had used this to check the status of a logged in user. If logged in, the user was allowed to see the homepage of posted/shared pictures of other pets and also the navbar login button was changed to logout. With session and cookies we were able to authenticate a user login. Built-in help #each allowed us to iterate over a list and the handlebar partials allowed for code to be resuse by creating shared templates. The database for setting and retriving data used was MySql and Sequilize ORM. From the server side we were able to see when new uses were created and they were assigned a new user ID. And everything else followed as well with the title, caption, picture and bio that was inputted when signing up online. This allowed us to use the information in the data to display it on the homepage page and profile page. We used varias GET and Post requests for retriving and adding this new data. We were able to stay organized with our folder structure by following the MVC paradigm. We were introduced to new technologies and packages when trying to build this application to solve our current issues of styling up our page and loading in picture files for the profile. For our styling we used "Bulma" as our CSS library. This allowed us to use CSS clases to style up our html code. We use their provided html code to be able to apply Buttons elements; Card, NavBar components; and Input forms. We were then able to munipulate the code to our liking of how it should be displayed in our application. An issue we came across was for a user to upload their picture content of their pets to the profile. For this we used a npm package, "Multer". Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files, in our case img. png. files. When a user is able to upload thier pictures of their pets, it is then displayed on on thier profile page and home page. With these skills applied and new technologies used we were able to get this project to operate as it should and met all criterias for the users interface. It was a great experience for all of us to create this application for all pet owner/loving community.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How To Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

For future collaboraters, you'll need to install all pacakges with command line, npm i.
Run MySql and input in command line, source schema.sql. Start the server with command line, node server.js.

## Usage

New users are directed to create a new login account. They are prompted to fill basic information on their pet and uplaod a picture. This will direct them to the profile page where user are able to create a post or add new pets. They can also check the home page of all post posted. In the homepage users are able to comment of existing posts.

## License

MIT License

https://opensource.org/licenses/MIT

## How to Contribute

To contribute please email me at the email provided below and I will provide steps for creating good issues or pull requests. I will also attached links to external documentations, mailing lists and code of conducts. There will be community and behavioral expectations.

## Tests



## Questions

The following link is to my github acount:
(https://github.com/fmquito45)

And if you have any further questions I can be reached out in the following email:
fmquitox45@gmail.com