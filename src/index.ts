import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => 'Inventory Service is running').listen(3005)

console.log(`💾 Inventory Service is running at ${app.server?.hostname}:${app.server?.port}`)
