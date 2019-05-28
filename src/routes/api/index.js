const KoaRouter = require('koa-router');
const jwt = require('koa-jwt');

const authApi = require('./auth');
const coursesApi = require('./courses');
const studentsApi = require('./students');


const router = new KoaRouter();

// unauthenticated endpoints
router.use('/courses', coursesApi.routes());
router.use('/auth', authApi.routes());

// JWT authentication without passthrough (error if not authenticated)
router.use(jwt({ secret: process.env.JWT_SECRET, key: 'authData' }));
router.use(async (ctx, next) => {
  if (ctx.state.authData.userId) {
    ctx.state.currentUser = await ctx.orm.user.findById(ctx.state.authData.userId);
  }
  return next();
});

// authenticated endpoints
router.use('/students', studentsApi.routes());

module.exports = router;
