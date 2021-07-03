class MovieWach {
    constructor(movieData) {
        this.data = movieData.original_title
        this.vots = movieData.vote_count
        this.img = 'https://image.tmdb.org/t/p/w500/' + movieData.poster_path

    }
}
module.exports = MovieWach