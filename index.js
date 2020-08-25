const app = require("express")();
const jwt = require("jsonwebtoken");
const SECRET_TOKEN_KEY = "supersecret";

app.get("/createToken/:payload", (req, res) => {
  const token = jwt.sign({ payload: req.params.payload }, SECRET_TOKEN_KEY, {
    expiresIn: "30s",
  });
  return res.send(`
    Here is your JWT that expires in 30 seconds. <br/><br/> Read and validate the token <a href="/readToken/${token}">here</a>.
    <br/><br/>
    ${token}
  `);
});

app.get("/readToken/:jwt", (req, res) =>
  jwt.verify(req.params.jwt, SECRET_TOKEN_KEY, (err, payload) => {
    if (err) res.status(401).send(`Error: ${err.toString()}`);
    res.send(`
      The JWT is valid. Here are the contents:
      <br/><br/>
      ${JSON.stringify(payload, null, " ")}
    `);
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
