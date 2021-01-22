class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName ()  {
        return this.name
    }
    getAge () {
        return this.age
    }
}

class Home {
    constructor(place, price, residents){
        this.place = place;
        this.price = price;
        this.residents = residents;
    }

    getPlace () {
        return this.place
    }
    getPrice () {
        return this.price
    }
    getResidents () {
        return this.residents
    }
    addResidents (resident) {
        return this.residents.push(resident)
    }
}

// const Peoples = [
//     new Person('david', 18),
//     new Person('Joey', 22)
// ]
// OR
let chaitanya = new Person('Chaitanya',18)
let David = new Person('David',22)

// Peoples[0].getPlace = function () {
//     return this.place           
// }                               
//  Above method of adding methods is not working.                         

const Home1 = new Home("mumbai",4324230, [chaitanya, David])
const Home2 = new Home("Nashik",4300000, [chaitanya, David])

console.log(Peoples);
console.log(Peoples[0].getAge());
console.log(Peoples[0])
console.log(Home1);
console.log(Home1.getPlace());
console.log(Home1.getResidents());
console.log(Home1.getPrice());
console.log(Home2); 
let chaitanya = Peoples.push( new Person("chaitanya", 34))
Peoples[2] = new Person("chaitanya", 34)
console.log(Home1.addResidents(Peoples[2]));
console.log(Home1.getResidents());

let Paulo = new Person('Paulo', 25)
 
Home1.addResidents(Paulo)
console.log(Home1.getResidents());
// THe ABOVE OOPS CONCEPTS ARE VERY BASICLETS HAVE LOOK ON MAIN 4 CONCEPTs

