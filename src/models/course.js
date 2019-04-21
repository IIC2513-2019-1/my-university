module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define('course', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {});
  course.associate = function associate(models) {
    // associations can be defined here
    course.belongsToMany(models.student, { through: models.enrollment, foreignKey: 'courseId' });
  };
  return course;
};
