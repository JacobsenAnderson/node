const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = 3001

app.use(morgan("combined"))

// routes 
app.get('/', (req, res) =>{
    res.send({
        message: "Welcome to the mock API."
    })
})

app.get('/lazy', (req, res) =>{
    console.log("Lazy route was requested.")
    var counter = 0
    var timerRequest = setInterval(progressRequest, 3000)
    function progressRequest(){
        if (counter == 0){
            stopProgressRequest()
        }
        counter = counter +1
    }

    function stopProgressRequest(){
        clearInterval(timerRequest)
        console.log("Lazy request ended with success.")
        res.send({
            message: "Lazy route executed with success."
        })
    }
})

app.listen(PORT, () =>{
    console.log("Mock webserve UP!")
})