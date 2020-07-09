const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const contactRouter = require("./contact");

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use("/contact", contactRouter);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, payload: "You so sexy Mama" });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT} `);
});
