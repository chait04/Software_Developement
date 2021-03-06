// Object literals

// const bioData = {
//     name : "chaitanya",
//     myAge: 23,
//     getData () {
//         console.log(`my name is ${bioData.name}`);
//     },
//     myInfo () {
//         console.log(this);
//     }
// }
// console.log(bioData);
// bioData.myInfo()

// ==================
//  This  keyword
// ==================

// console.log(this);
//  refers to parent object if it is not used in onject then it takes window as object
// var myName = "chaitanya"
// function myNames () {
//     console.log(this.myName);
//     console.log(myName);
// }
// myNames()

// var  myAge = 26
// const obj = {
//     n : "chait",
//     myName  ()  {
//         console.log(this.n);
//     }
// }

// // console.log();
// obj.myName()

// let bioData = {
//     myName : {
//         realName : "chaitanya khachane",
//         cahnnelName: "someCom"
//     },
//     myAge : 18,
//     getData () {
//         console.log(`my ${this.myName.realName}  and my age is ${this.myAge}`);
//     }
// }

// bioData.getData()

// ==============
//  end of thapa oops concepts
// ==============

// ==============================
// programming with mosh = oops
// ==============================

// const circle = {
//     radius : 1,
//     location : {
//         x: 1,
//         y: 1
//     },
//     draw : function () {
//         console.log('draw');
//     }
// }

// // circle.draw()
// console.log(circle);

// ====Factory Function============

// function createCircle (radius) {
//     return {
//         radius, //radius : radius
//         draw () {
//             console.log('draw');
//         }
//     }
// }

// const circle = createCircle(1)
// // circle.draw()
// console.log(circle);

// ====================
//  construstor function
// =====================

// function Cricle (radius) {
//     this.radius = radius,
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const another = new Cricle(1)
// console.log(another);

// =============================
//  primitive sucks
// =============================
// let number = 10;
// function increase(number) {
//   return  number ++
// }

// increase(number)
// console.log(number);

//this wll not increment 10 bcoz as we come
//out of function the console will refer to 
//global value , bcoz its primitive data type 
//and pdt copies by their value

// ======Now by object============

// let obj = {value : 10}

// function increase (obj) {
//     obj.value ++
// }

// increase(obj)
// console.log(obj);
// this is working bcoz ojects get passed by reference

// =============================
// Dynamically Adding values to objectsa

// function Circle (radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circle = new Circle(10)
// //adding new property 
// circle.location = {
//     x: 1,
//     y : 45
// }

// console.log(circle);

// ===============================


// let name = 'chaitanya'
// let age = 25
// function BioData (name,age) {
//     this.name = name;
//     this.age = age;
//     // console.log(this.name, this.age);
// }

// const bioData = new BioData(name, age)
// console.log(bioData);
// console.log(bioData.name)

// ===============================
//  Brad Traversy = oops
// ===============================

// const book = {
//     title : 'Book One',
//     author : 'chaitanya',
//     year : 2002,
//     getSummary () {
//         return `${this.title} was written in ${this.year} by ${this.author}`
//     }
// }

// console.log(book.getSummary())

// ============================
//  To avoid this stuff we will create constructor
// =============================

// function Book (author, title, year) {
//     this.author = author;
//     this.title = title;
//     this.year = year;
//     this.getSummary = function () {
//         return `${author} he is the author of ${title} book published in ${year} `
//     }
// }

// const book1 = new Book('John Doe', "Book1", 3003);
// const book2 = new Book ('Chaitnaya', 'rikame kam', 4000)

// console.log(book1);
// console.log(book1.getSummary());

// ========================================
// Using proptotypes
// ========================================

// function Book (author, title, year) {
//     this.author = author;
//     this.title = title;
//     this.year = year;
// }

// Book.prototype.getSummary = function () {
//     return `${author} he is the author of ${title} book published in ${year} `
// }

// const book1 = new Book('ramu','shamu', 203)
// console.log(book1);

// this will show summary in _proto_

// adding one more prototype

// function Book (author, title, year) {
//     this.author = author;
//     this.title = title;
//     this.year = year;
// }

// Book.prototype.getSummary = function () {
//     return `${author} he is the author of ${title} book published in ${year} `
// }

// Book.prototype.getAge = function () {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${this.year} old`
// }

// const book1 = new Book('ramu','shamu', 203)
// console.log(book1);

// ==========================================================================================================================
//                             CODING NINJA JS = CLASSES AND OBJECTS
// ==========================================================================================================================

// =========================
// First way to create object
// =========================
//                          doing it with function because we want to reuse this constructor to make many objects==============
// function Fruit(taste,color){
//     this.color = color,
//     this.taste = taste
//     this.summanry = function () {
//         return console.log(`this is ${taste} of ${color} color`);
//     }
//     return 0
// }

// const mango = new Fruit("khataa", "orange")

// console.log(mango.summanry());

// =========================
// Second way to create object = Class .1
// =========================

// class FruitClass  {
//     constructor(taste,color){
//         this.taste = taste;
//         this.color = color;
//     }
// }

// let kiwi = new FruitClass("sour","red")
// console.log(kiwi);
// console.log(FruitClass);

// another ways to declare  class
// we can store it in

// let NewFruit = class  {
//     constructor(color,taste){
//         this.color = color;
//         this.taste = taste;
//     }
// }


// let mango = new NewFruit()

// console.log(fruits);
// console.log(NewFruit);

// =========================
// this keyward in  Arrow functions
// =========================

// const person = {
    // age : 20,
// ES5 way to write method
    // celebratedBirthday : function() {
        // this.age++
    // }
// Es6 way to write method
    // celebratedBirthday(){
    //     this.age++
    // }
// Es7 way to write method (main concept)
    // celebratedBirthday : () => {
        // this.age++
    // }
// above code will not work. The above this.age will refer to global variable
// }