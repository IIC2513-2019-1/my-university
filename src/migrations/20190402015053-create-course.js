module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('courses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    code: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('courses'),
};
