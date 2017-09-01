const path = require('path')
const views = require('koa-views')
const logger = require('koa-logger')
const router = require('koa-router')()
const koaBody = require('koa-body')
const Koa = require('koa')
const app = module.exports = new Koa()

const { getList } = require('./lib/db')

// middleware
app.use(logger())
app.use(koaBody())
app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }))

// render

router.get('/', getList)
  // .get('/post/new', add)
  // .get('/post/:id', show)
  // .post('/post', create)

app.use(router.routes())

if (!module.parent) app.listen(3000)
