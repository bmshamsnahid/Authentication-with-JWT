

# Remote JWT Example
Source code of the blog post.

#### N.B. No Client side is provided, Try Unit Testing and postMan To check the API.

## Server - Express JS
- Create 2 databases via robomongo `jwtTokenAuthentication` and `jwtTokenAuthenticationTest`
- Navigate to server/
- `npm install` to install project dependencies
- `nodemon` to run the app
- `npm test` to run unit tests

## Server Side Testing
- API testing via PostMan
- Unit testing via Mocha.js (Assertion library Should.js)

## Server Side File Structure
```bash
.
├── app/
├──── controllers/
│       └── authenticationController/
│           └── authenticate/
│                  └──index.js
│       └── userController/
│           ├── TEST/
│                  └── runner.js
│           └── user/
│               └──index.js
├──── models/
│       └── userModel/
│           └── index.js
├──── routes/
│       └── index.js
├── config
│   └── index.js # Database configaration
├── test # Configuration for running tests
│   └── utils.js
├── package.json
├── server.js
 ```

## Client - Angular JS
- User Angular-CLI Boilerplate
- Navigate to client/
- `npm install`
- `bower install`
- `ng serve` to run the app

# License
This project is licensed under the MIT license.

If you have any questions or comments, please create an issue.