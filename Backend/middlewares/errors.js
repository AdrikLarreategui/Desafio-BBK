const handleValidationError = (err, res) => {
  let errors = Object.values(err.errors).map((el) => el.message);
  if (errors.length > 1) {
    let chain = "";
    for (let i = 0; i < errors.length; i++) {
      chain += errors[i] + " || ";
    }
    const string = chain.slice(0, -4);
    res.status(400).send({ message: string });
  } else {
    res.status(400).send({ message: errors });
  }
};

const typeError = (err, req, res, next) => {
  if (err.name === "ValidationError")
    return (err = handleValidationError(err, res));
  else if (err.code === 11000) {
    res.status(400).send("This email adress is already registered");
  } else {
    res.status(500).send(`There was a problem`);
  }
};

module.exports = { typeError };
