class Person {
    constructor(name = 'John Doe', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreating() {
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
     constructor(name, age, major) {
         super(name, age);
         this.major = major;
     }
     hasMajor() {
        return !!this.major;
     }
     getDescription() {
         let description = super.getDescription();

         if(this.hasMajor) {
             description += ` Their major is ${this.major}.`
         }
         return description;
     }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreating() {
        let description = super.getGreating();
        if(this.homeLocation) {
            description += ` I'm visiting from ${this.homeLocation}`;
        }
        return description;
    }
}


const me = new Traveller('Leo Lai', 20, 'Markham');
console.log(me.getGreating());

const other = new Traveller(undefined, undefined);
console.log(other.getGreating());