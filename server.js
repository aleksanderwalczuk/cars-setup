const express = require('express')
const path = require('path')

const app = express()

app.use('/build', express.static(path.resolve(`${__dirname}/build`)))

app.get('/*', (req, res) => {
	res.sendFile(path.resolve('index.html'))
})

app.listen(process.env.PORT || 5500, () => console.log('server is running...'))
