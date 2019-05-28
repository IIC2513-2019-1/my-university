const KoaRouter = require('koa-router');
const coursesApi = require('./courses');

const router = new KoaRouter();

router.use('/courses', coursesApi.routes());

module.exports = router;
