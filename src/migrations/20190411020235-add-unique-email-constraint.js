module.exports = {
  up(queryInterface) {
    queryInterface.addConstraint('users', ['email'], {
      type: 'unique',
      name: 'uniqueEmail',
    });
  },
};
