const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    regNo: {
        type: String,
        required: true
    },
    image: {
        filename: {
            type: String,
            default:
                "https://plus.unsplash.com/premium_photo-1755273421507-4ef20f6ef877?q=80&w=1470&auto=format&fit=crop"
        },
        url: {
            type: String,
            default: ""
        }
    },
    location: String,
    country: String,
});

module.exports = mongoose.model("Student", studentSchema);
