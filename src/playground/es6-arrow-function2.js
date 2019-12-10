// arguments object - no longer bound with arrow functions
const add = (a, b) => {
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound with arrow functions

const user = {
    name: 'Leo',
    cities: ['Markham', 'Stouffville', 'Scarborough'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge
const multiplier = {
    numbers: [1,2,3,4,5,6,7,8,9,10],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};
console.log(multiplier.multiply());




