import { createServer } from 'http'
import { fileURLToPath } from 'url'
import { createNitroApp } from './app.mjs'

const app = await createNitroApp()

const server = createServer((req, res) => {
  app.handle(req, res)
})

export default server
