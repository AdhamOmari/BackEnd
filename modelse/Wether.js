class ForeCast {
    constructor(weatherDate) {
        console.log("hhhhhhhhhh", weatherDate)
        this.date = weatherDate.valid_date
        this.description = weatherDate.weather.description


    }
}
module.exports = ForeCast