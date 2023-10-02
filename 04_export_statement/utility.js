const car = {
    company: "Tata",
    model: "Nexon"
};

const car2 = {
    company: "Mahindra",
    model: "Thar"
};

// another way is to use exports immediately
exports.person1 = {
    name: "Rishabh",
    age: 27
};

exports.person2 = {
    name: "Naveen",
    age: 26
};

// module.exports = car;

// added data property
exports.data = {
    car, car2
}
