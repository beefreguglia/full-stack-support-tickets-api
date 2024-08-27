import http from 'http'

import { jsonHandler } from './middleware/jsonHandler.js'
import { routeHandler } from './middleware/routeHandler.js'

async function listener(request, response) {
  await jsonHandler(request, response)
  routeHandler(request, response)

  console.log(request.body)
}

http.createServer(listener).listen(3333)