const db = require("../models");

Livro = db.livro;
const Op = db.sequelize.Op; //redução de código

exports.create = (req, res) => {
  //Validate Request
  if (!req.body.title) {
    res.status(400).send({
      message: "Livro não pode ser vazio!",
    });
    return;
  }
}
