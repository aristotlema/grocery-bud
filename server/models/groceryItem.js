const mongoose = require('mongoose');

const groceryItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('GroceryItem', groceryItemSchema);