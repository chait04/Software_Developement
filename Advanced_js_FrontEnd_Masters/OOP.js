// ways to write objects
// =========================
// First way to create object
// =========================
// const user1 = {
//     name : "chaitanya",
//     score : 3,
//     increment : function () {
//         user1.score++
//     }
// }
// user1.increment()

// =========================
// Second way to create object
// =========================

// const user2 = {};
// user2.name = "Bhushan";
// user2.score = 4;
// user2.increment = function () {
//     user2.score++
// }

// =========================
// Third way to create object
// =========================

// const user3 = Object.create(null)
// user3.name = "Mayur";
// user3.score = 4;
// user3.increment = function () {
    // return ++user3.score
    // return user3.score = user3.score + 1;
// }

// =========================
//  Now the problem we are facing is we are repeating ourselves and breaking DRY concept
//  So we need to use function
// =========================

// ========================================
//    Solution : 1
// =========================================
// function createUser (name, score) {
//     const newUser = {}
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function () {
//         newUser.score++
//     }
// }
// const user1 = userCreator("Will", 3);
// const user2 = userCreator("Tim", 5);
// user1.increment();

// in above solution we are still repeating fucntion for every object 


// ========================================
//    Solution : 2
// =========================================

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("Logged in");
  },
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
// user1.increment();


// ========================================
//    Solution : 3
// =========================================

// function UserCreator (name, score){
//     this.name = name;
//     this.score = score;
// }

// UserCreator.prototype.increment = function (){
//    return this.score++
// }

// UserCreator.prototype.login = function() {
//     console.log("login");
// }

// const user1 = new UserCreator("chaitanya", 7)
// const user2 = new createUser("Mayur", 6)

// ==============================================
//   CLASSES - its just a syntactic sugar .. javascript engine works same in background as its was working for functional objects
// ==============================================

// class UserCretor {
//     constructor(name, score){
//         this.name = name;
//         this.score = score;
//     }
// Here all methods will get stored in prototype
//     increment() {
//         this.score++
//     }
//     login(){
//         console.log("login");
//     }
// }

// const user1 = new userCretor("chaitanya", 1)
// const user2 = new userCretor("Something", 10)
// user1.increment();