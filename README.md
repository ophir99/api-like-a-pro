# API

Here is the step by step process on how to setup api in your local machine

1. Open a terminal window at any path. Type command **mongod** and press enter.
2. Open another terminal window at any path. Type command **mongo** and press enter. Now your mongodb is running at **mongodb://127.0.0.1:27017**

3. Clone the repo and go to the root(starting or parent) folder.

4. Open termial window at the same folder which is the project folder and give following commands.
   * npm install express
   * npm install cors
   * npm install mongoose

   Execute these commands one after another so that each package is installed.

5. Give command **node index.js**. This will start your server. You server is up and running at **http://localhost:8900/** and you can connect with any client to send HTTP Requests.
