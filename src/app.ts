import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { cors as corsConfigs } from './config'
import router from './routes'

const app = express()

app.use([
  compression(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: false }),
  cors(corsConfigs)
])

app.use('/api', router)

export default app
