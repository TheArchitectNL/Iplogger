const requestIp = require('request-ip');
const express = require('express')
const app = express()
const port = 3000

const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
    next();
};
 app.use(requestIp.mw())

app.get('/', function (req, res) {
  const ip = req.clientIp;
  console.log(ip)
  var your_ip = req.connection.remoteAddress;
  res.status(200).send('<script>window.location.href="https://ark.gamepedia.com/ARK_Survival_Evolved_Wiki"</script>');
	require("fs").appendFileSync("log.txt", `${Date()} - ${your_ip}\n`);
  console.log(`${Date()} - ${your_ip}`)
})

var server = app.listen(process.env.PORT || 5000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
