module.exports = (sequelize, Sequelize) => {
    const livro = sequelize.define("livros", {
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      published: {
        type: Sequelize.BOOLEAN,
      }
    });
    return Tutorial;
  };
  