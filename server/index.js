import Koa from 'koa'
import Router from 'koa-router'
import { koaBody } from 'koa-body'

const app = new Koa()

app.use(
  koaBody({
    multipart: true,
  }),
)

const router = new Router()
router.get('/', ctx => {
  ctx.body = 'hello server'
})
app.use(router.routes())

app.listen(8080, () => {
  console.log('open server localhost:8080')
})
