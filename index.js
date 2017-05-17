var express = require('express')
var app = express()

app.set('port',(process.env.PORT||3000))

app.use(express.static(__dirname + '/build'))

app.get('*', function (req, res) {
	const index = path.join(__dirname ,'/build/index.html')
  res.sendFile(index)
})

app.listen(app.get('port'), function () {
  console.log("Express server listening on port",app.get('port'))
})