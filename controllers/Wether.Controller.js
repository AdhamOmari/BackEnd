const ForeCast = require('../modelse/Wether')
const axios = require('axios');

const wetherControl = (req, res) => {
    let weather;
    let lat = req.query.lat
    let lon = req.query.lon
    let url = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WETHER_BIT_API}&lat=${lat}&lon=${lon}`
    let weatherbit = axios.get(url).then(response => {
        weather = response.data

        console.log(response)


        let dataLocal = weather.data.map((city, idx) => {
            return new ForeCast(city)
        })
        res.json(dataLocal)
        if (dataLocal === 0) {
            res.status(500).send('there is somthing wrong')
        }

    }).catch(error => res.send(error))
}
module.exports = wetherControl