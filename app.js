const express = require("express");
const addition = require("./operations").addition;
const app = express();

app.get("/hello/:a/:b", (request, response) => {
  response.send("Hello " + addition(parseInt(request.params.a),parseInt(request.params.b)));
});

app.listen(3214, () => console.log("Application is runing on port 3214:"));
