const testControllers = (req, res) => {
  res.status(200).send({
    message: "Welcome user",
    success: true,
  });
};

module.exports = { testControllers };