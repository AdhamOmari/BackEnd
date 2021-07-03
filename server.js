const express = require('express');
// const weather = require('./data/weather.json');
const app = express();
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const { response } = require('express');
const PORT = process.env.PORT;
app.use(cors());


app.get('/weather', (req, res) => {
    let weather;
    let lat = req.query.lat
    let lon = req.query.lon
    let url = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WETHER_BIT_API}&lat=${lat}&lon=${lon}`
    let weatherbit = axios.get(url).then(response => {
        weather = response.data
        // console.log(lat)
        // console.log(lon)
        // console.log(searchQuery)
        console.log(response)


        let dataLocal = weather.data.map((city, idx) => {
            return new ForeCast(city)
        })
        res.json(dataLocal)
        if (dataLocal === 0) {
            res.status(500).send('there is somthing wrong')
        }

    }).catch(error => res.send(error))
})
//   console.log(ForeCast)


app.get('/movies', (req, res) => {
    let movies;
    let query = req.query.movie
    let urlMove = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_BIT_API}&query=${query}`
   
    let weatherbit = axios.get(urlMove).then(response => {
        movies = response.data.results
          console.log(movies)
        let dataMove= movies.map(movieOn => {
            return new MovieWach(movieOn)
        })
        res.json(dataMove)
        if (dataMove === 0) {
            res.status(500).send('there is somthing wrong')
        }

    }).catch(error => res.send(error))
})
//   console.log(ForeCast)






class ForeCast {
    constructor(weatherDate) {
        console.log("hhhhhhhhhh",weatherDate)
        this.date = weatherDate.valid_date
        this.description = weatherDate.weather.description


    }
}

class MovieWach {
    constructor(movieData){
        this.data=movieData.original_title
        this.vots=movieData.vote_count
        this.img= 'https://image.tmdb.org/t/p/w500/'+movieData.poster_path

    }
}
app.listen(PORT, () => console.log(PORT)) // kick start the express server to work
