const MovieWach = require('../modelse/MovieWach')
const axios = require('axios');

const movieController = (req, res) => {
    let movies;
    let query = req.query.movie
    let urlMove = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_BIT_API}&query=${query}`

    let weatherbit = axios.get(urlMove).then(response => {
        movies = response.data.results
        console.log(movies)
        let dataMove = movies.map(movieOn => {
            return new MovieWach(movieOn)
        })
        res.json(dataMove)
        if (dataMove === 0) {
            res.status(500).send('there is somthing wrong')
        }

    }).catch(error => res.send(error))
}

module.exports = movieController