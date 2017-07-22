var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        min: 10
    },
    email: {
        type: String,
        unique: true,
        trim: true
    },
    rate: {
        type: Number,
        required: true,
        require:true
    },
    jobDate:{
        type: Date,
        default: Date.now,
        required:true
    },
    jobStart:{
        type: Date,
        default: Date.now,
        required:true
    },
    jobEnd:{
        type: Date,
        default: Date.now,
        required:true
    },
    address: {
        type: Schema.Types.ObjectId,
        ref: "Address"
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Client", ClientSchema);