const db = require("../models");

Locatario = db.locatarios;
const Op = db.sequelize.Op; //redução de código

exports.create = (req, res) => {
  //Validate Request
  if (!req.body.title) {
    res.status(400).send({
      message: "Locatario não pode ser vazio!",
    });
    return;
  }
}