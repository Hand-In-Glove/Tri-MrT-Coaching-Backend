const express = require("express");
const contactRouter = express.Router();

contactRouter.post("/", (req, res) => {
  const message = req.body;
  console.log(message);
  res.status(200).json({ success: true, payload: message });
});

module.exports = contactRouter;
