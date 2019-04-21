const faker = require('faker');

const MIN_STUDENTS = 40;
const MAX_STUDENTS = 80;

module.exports = {
  up(queryInterface) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const studentsData = [];
    const studentsQuantity = faker.random.number({ min: MIN_STUDENTS, max: MAX_STUDENTS });

    for (let i = 0; i < studentsQuantity; i += 1) {
      studentsData.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert('students', studentsData);
  },

  down(queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('students', null, {});
  },
};
