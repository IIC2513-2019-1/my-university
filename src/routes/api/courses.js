const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('api.courses.list', '/', async (ctx) => {
  const coursesList = await ctx.orm.course.findAll();
  ctx.body = ctx.jsonSerializer('course', {
    attributes: ['code', 'name', 'description'],
    topLevelLinks: {
      self: `${ctx.origin}${ctx.router.url('api.courses.list')}`,
    },
    dataLinks: {
      self: (dataset, course) => `${ctx.origin}/api/courses/${course.id}`,
    },
  }).serialize(coursesList);
});

router.get('api.course.show', '/:id', async (ctx) => {
  const course = await await ctx.orm.course.findById(ctx.params.id);
  ctx.body = ctx.jsonSerializer('course', {
    attributes: ['code', 'name', 'description'],
    topLevelLinks: {
      self: `${ctx.origin}${ctx.router.url('api.courses.list')}:id`,
    },
  }).serialize(course);
});

module.exports = router;
