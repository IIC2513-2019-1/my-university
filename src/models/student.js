module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: 'uniqueStudentEmail',
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
  });
  student.associate = function associate(models) {
    // associations can be defined here
    student.belongsToMany(models.course, { through: models.enrollment, foreignKey: 'studentId' });
  };
  return student;
};
