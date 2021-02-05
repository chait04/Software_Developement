// console.log('Hello, world!');
// let str = ''
// function repeater(char) {
    // Base case : when output length is equal to 5
// 	if(str.length === 5) return str;
// concat the string
//   str += char
//   return repeater(char)
// }
function repeater(char, num = 1) {
    if (num === 5) return char;
    return char + repeater(char, num+1);
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(repeater('g'));
  // console.log(repeater('j'));
  