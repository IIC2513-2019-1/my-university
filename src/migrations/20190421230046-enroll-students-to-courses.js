const faker = require('faker');
const orm = require('../models');

const ENROLL_RATIO = 0.6;

module.exports = {
  async up() {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const students = await orm.student.findAll();
    const courses = await orm.course.findAll();
    const dbOps = [];

    students.forEach((student) => {
      courses.forEach((course) => {
        if (Math.random() <= ENROLL_RATIO) {
          dbOps.push(student.addCourse(course, { through: { registeredAt: faker.date.recent() } }));
        }
      });
    });

    return Promise.all(dbOps);
  },

  down(queryInterface) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('enrollments', null, {});
  },
};
