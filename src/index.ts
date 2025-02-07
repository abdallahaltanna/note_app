import http from 'http'

import app from './app'
import { environment } from './config'

const { port } = environment

const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
