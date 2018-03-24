import express from "express"
import path from "path"
import { catch404, handleError } from "./api/helpers/error"
import timestampRoutes from "./api/routes/timestamp"
/* App Init */
const app = express()
/* Middleware */

//set static
app.use(express.static(path.join(__dirname, "../public")))

//routes
app.use("/", timestampRoutes)

//catch 404 && handleError
app.use(catch404, handleError)

export default app
