import Koa from 'koa'
import Router from 'koa-router'
import { koaBody } from 'koa-body'
import { chat } from '../chat.js'

const app = new Koa()

app.use(
  koaBody({
    multipart: true,
  }),
)

const router = new Router()
router.get('/', (ctx) => {
  ctx.body = 'hello server!!!!!'
})

router.post('/chat', async (ctx) => {
  const { message } = ctx.request.body
  const res = await chat(message)
  ctx.body = {
    data: res,
    state: 1,
  }
})
app.use(router.routes())

app.listen(8080, () => {
  console.log('open server localhost:8080')
})
