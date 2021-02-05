console.log("Classes in Javascript");

class Employee {
    constructor(name, exprience, division) {
        this.name = name;
        this.exprience = exprience;
        this.division = division;
    }
    aim() {
        return `Im ${this.name} , I have ${this.exprience} years of exprience in ${this.division} industry`
    }
    lifeAtCampony() {
        const result = this.exprience + 5
        return result
    }
//To run static Employee.add(4,5)  .. this will work .. chaitanya.add(4,5) will not work
// when we usea static we cant use static in it.
    static add (a, b){
        return a + b
    }
}

const chaitanya = new Employee("chaitanya", 3, "SDE 1")

// Creating another class 
// Inheritance
// Use this syntax === class newClassName extends previousClassName  ====
// add extends keyward

// super is previous class constructor whic we inheritated

class Programmer extends Employee {
    constructor(name, exprience, division, github, language) {
        super(name, exprience, division)//we are using inherited value so we used super keyward
        this.language = language;
        this.github = github
    }

    favoriteLanguage(){
        if(this.language == 'Javascript'){
            return "javascript"
        }else {
            return 'python'
        }
    }

    static multiply (a, b){
        return a * b
    }    
}

const Bhushan = new Programmer("Bhusahn", 2, 'Mechanical', 'bhush01', "Go")
// now play with these values
// console.log(Bhushan);