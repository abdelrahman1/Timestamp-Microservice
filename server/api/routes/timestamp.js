import Router from "express-promise-router"
import timestampController from "../controllers/timestamp"

const router = Router()
router.route("/").get((req, res, next) => {
  res.sendFile("index.html")
})
router.route("/:time").get(timestampController.getDateAndUnixTimestamp)

export default router
