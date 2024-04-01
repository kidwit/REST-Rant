require('dotenv').config()
const express = require('express')
const app = express()
app.set('view engine', 'jsx')
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Import the places router
const placesRouter = require('./controllers/places');
//controllers and routes
app.use('/places', placesRouter);

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*',(req,res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
