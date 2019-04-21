module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
      .then(() => queryInterface
        .addIndex(
          'students',
          ['email'],
          { indexName: 'uniqueStudentEmail', indicesType: 'UNIQUE' },
        ));
  },
  down(queryInterface) {
    return queryInterface.dropTable('students');
  },
};
