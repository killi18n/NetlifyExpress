// const express = require("express");
// const serverless = require("serverless-http");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.json());
// // app.get("/", (req, res) => {
// //   return res.status(200).json({ success: true });
// // });

// module.exports = app;
// module.exports.handler = serverless(app);

module.exports.handler = function(evt, ctx, cb) {
  cb(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};