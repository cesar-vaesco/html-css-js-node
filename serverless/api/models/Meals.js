const moongose = require('mongoose');

const Schema = moongose.Schema


const Meals = moongose.model('Meal', new Schema({

    name: String,
    description: String
}))

module.exports = Meals;
