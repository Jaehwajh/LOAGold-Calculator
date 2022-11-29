const mongoose = require('mongoose')

const RosterSchema = new mongoose.Schema({
    characterName: {
        type: String,
        required: true
    },
    iLevel: {
        type: Number,
        required: true
    },
    goldEarner: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("Character", RosterSchema);