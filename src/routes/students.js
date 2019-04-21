const KoaRouter = require('koa-router');

const router = new KoaRouter();

async function loadStudent(ctx, next) {
  ctx.state.student = await ctx.orm.student.findById(ctx.params.id);
  return next();
}

router.get('students.list', '/', async (ctx) => {
  const studentsList = await ctx.orm.student.findAll();
  await ctx.render('students/index', {
    studentsList,
    coursesListPath: ctx.router.url('courses.list'),
    studentCoursesPath: student => ctx.router.url('student.courses', { id: student.id }),
  });
});

router.get('student.courses', '/:id/courses', loadStudent, async (ctx) => {
  const { student } = ctx.state;
  await ctx.render('students/courses', {
    studentName: student.name,
    coursesList: await student.getCourses(),
    studentsListPath: ctx.router.url('students.list'),
  });
});

module.exports = router;
