const moongose = require('mongoose');

const Schema = moongose.Schema


const Orders = moongose.model('Order', new Schema({

    meal_id: { type: Schema.Types.ObjectId, ref: 'Meal' },
    user_id: String

}))

module.exports = Orders;
