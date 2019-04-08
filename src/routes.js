const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const courses = require('./routes/courses');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/courses', courses.routes());

module.exports = router;
