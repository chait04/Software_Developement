/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//   const lookup = {}
//   for(let el of nums){
//     lookup[el] ? lookup[el] +=1 : lookup[el] = 1
//     if(lookup[el]>=2){
//         return true
//     }
//   }
//     return false
// };

// var containsDuplicate = function(nums) {
//   const lookup = {}
//   for(let i=0; i<nums.length; i++){
//      let char = nums[i]
//     lookup[char] ? lookup[char] +=1 : lookup[char] = 1
//     if(lookup[char]>=2){
//         return true
//     }
//   }
//     return false
// };

var containsDuplicate = function (nums) {
  const lookup = {};
  for (let i = 0; i < nums.length; i++) {
    let char = nums[i];
    lookup[char] = (lookup[char] || 0) + 1;
    if (lookup[char] >= 2) {
      return true;
    }
  }
  return false;
};
