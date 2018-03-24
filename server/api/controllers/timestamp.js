import moment from "moment"
let timestampController = {}
timestampController.getDateAndUnixTimestamp = async (req, res, next) => {
  let time = req.params.time
  //check if natural or unix
  let natural = time.match(/^([A-Za-z])+ ([0-9]+){1,2}, ([0-9]+){4}/gi)
  let unix = time.match(/^([0-9])+/gi)
  if (natural) {
    natural = natural[0]
    //convert to unix timestamp
    unix = moment(natural, "MMMM DD, YYYY").unix()
  } else if (unix) {
    unix = unix[0]
    //convert to natural date
    natural = moment.unix(unix).format("MMMM DD, YYYY")
  }

  res.status(200).json({
    unix,
    natural
  })
}

export default timestampController
