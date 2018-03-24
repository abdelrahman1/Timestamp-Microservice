import app from "./app"
import { createServer } from "http"
import mongoose from "mongoose"

const PORT = process.env.PORT || 3000
const server = createServer(app)

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
