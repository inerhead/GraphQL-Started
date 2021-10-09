const { Schema, model } = require('mongoose');

const schemaDataItem = Schema({
    _name: {
        type: String,
        require: [true, "El dataitem name is required"]
    },
    _value: {
        type: String
    }
});



module.exports = model('dataitem', schemaDataItem);