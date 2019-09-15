const app = require("express")();

const emailValidator = require("./emailValidator");

app.get("/validate/:email", async (req, res) => {
  const { email } = req.params;

  const { validInput, validDomain } = await emailValidator({ email });
  const statusCode = validInput && validDomain ? 200 : 400;

  res.status(statusCode).json({ data: { email, validInput, validDomain } });
});

app.listen(process.env.PORT || 3000);
