//  TYPES :
// typeof operator
var v;
typeof v;         //undefined
var v1 = "1"      //string
var v2 = [1,2,3]  //object
var v3 = {}       //object
var v4 = Symbol() //Symbol

typeof dosentExist;  //undefined

var v5 = null // "object"  OOPS !

//  undefined vs undeclared vs uninitialized (aka TDZ)

// NaN & isNaN
// NaN (not a number) - invalid number (this is what it means) , so invalid number is also a number i.e NaN is number;

var myAge = Number("0o46")  // 38
var myNextAge = Number("39") //39
var myCatsAge = Number("n/a")  //NaN
myAge - "my Son's age"         // NaN

//   In above line the thing which we are subtrtactiung is not a number so Numbe r property will convert it in number first and thats a invalid number;

myCatsAge === myCatsAge   //false OOPS!
NaN === NaN //this is false bcoz it does not have identity value ...
// thats why we have isNaN to check number

isNaN(myAge);             // false
isNaN(myCatsAge);       // true :- It is true bcoz it is NaN (invalid number which is a number it self)
isNaN("my Sons age")      // true OOPS

Number.isNaN(myCatsAge)         // true
Number.isNaN("my son's age")    // false

