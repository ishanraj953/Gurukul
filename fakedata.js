const mongoose = require("mongoose");
const Student = require("./model/student.js");
const { faker } = require("@faker-js/faker");

mongoose.connect("mongodb://127.0.0.1:27017/gurukul")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));

const createFakeStudents = async (count = 30) => {
    await Student.deleteMany({});

    for (let i = 0; i < count; i++) {
        const student = new Student({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            regNo: "REG" + faker.string.numeric(6),
            image: {
                filename: faker.image.url(),
                url: faker.image.avatar()
            },
            location: faker.location.city(),
            country: faker.location.country(),
        });

        await student.save();
    }

    console.log(`${count} fake students added!`);
    mongoose.disconnect();
};

createFakeStudents(30);