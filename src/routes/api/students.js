const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('api.students.list', '/', async (ctx) => {
  const studentsList = await ctx.orm.student.findAll();
  ctx.body = ctx.jsonSerializer('student', {
    attributes: ['name', 'email'],
    topLevelLinks: {
      self: `${ctx.origin}${ctx.router.url('api.students.list')}`,
    },
    dataLinks: {
      self: (dataset, student) => `${ctx.origin}/api/students/${student.id}`,
    },
  }).serialize(studentsList);
});

router.get('api.students.show', '/:id', async (ctx) => {
  const student = await ctx.orm.student.findById(ctx.params.id);
  ctx.body = ctx.jsonSerializer('student', {
    attributes: ['name', 'email'],
    topLevelLinks: {
      self: `${ctx.origin}${ctx.router.url('api.students.list')}:id`,
    },
  }).serialize(student);
});

module.exports = router;
