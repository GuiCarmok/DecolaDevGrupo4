module.exports = (sequelize, Sequelize) => {
  const livro = sequelize.define("livro", {
    name: {
      type: Sequelize.STRING,
    },
    autor: {
      type: Sequelize. STRING,
    },
    sinopse: {
      type: Sequelize.STRING,
    },
    lancamento: { 
      type: Sequelize.STRING,
    },
    dataAluguel: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
    }
  });
  return livro ;
};