//  TYPES :
// ============================================================================
// 1.  typeof operator
// ============================================================================

var v;
typeof v;         //undefined
var v1 = "1"      //string
var v2 = [1,2,3]  //object
var v3 = {}       //object
var v4 = Symbol() //Symbol

typeof dosentExist;  //undefined

var v5 = null // "object"  OOPS !

// ============================================================================
// 2. undefined vs undeclared vs uninitialized (aka TDZ)
// ============================================================================

// =========================== NaN & isNaN ====================================
// 3. NaN (not a number) - invalid number (this is what it means) , so invalid number is also a number i.e NaN is number;
// ============================================================================

var myAge = Number("0o46")     // 38
var myNextAge = Number("39")   //39
var myCatsAge = Number("n/a")  //NaN
myAge - "my Son's age"         // NaN

//   In above line the thing which we are subtrtactiung is not a number so Numbe r property will convert it in number first and thats a invalid number;

myCatsAge === myCatsAge   //false OOPS!
NaN === NaN               //this is false bcoz it does not have identity value ...

// ============================================================================
// thats why we have isNaN to check number
// ============================================================================

isNaN(myAge);             // false
isNaN(myCatsAge);         // true :- It is true bcoz it is NaN (invalid number which is a number it self)
isNaN("my Sons age")      // true OOPS - true bcoz it isNaN converts the string in number then check's it and boom it gives us NaN so it shows true

// ============================================================================
Number.isNaN(myCatsAge)         // true
Number.isNaN("my son's age")    // false - why this is false ?
// ============================================================================

//  To get clear understanding of above line take the below examples
//  ================== BEST EXPLANATION HERE ========================

// To avoid confusion which is happening on line 32 we have new utility in ES7 Number.isNaN() it doesn't converts string in number while checking isNaN...

Number.isNaN(Number("some")) // Here isNaN() will first convert the "some" into number i.e so we'll get NaN 

Number.isNaN("some")         // Here it will not convert some into a string ; so using this uitlity ( Number.isNaN() ) is more efficient

// (method) NumberConstructor.isNaN(number: unknown): boolean
// Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter to a number. Only values of the type number, that are also NaN, result in true.
