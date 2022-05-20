function reverse (word) {
  // 'abc' => 'cba'
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reverseWord = reversedWordArray.join ("")
  return reverseWord
}

function isPalindrome(word) {
  // make a function that returns true if a word is a palindrome and false if not. 
  //that means if the word is not spelled the same in reverse, it should return as false.
  // abc === cba false
  //mom === mom true 
  //reverse the input string
 // if the input is the same as reserved result
    // return true
    const reverseWord = reverse(word)
    if (word === reverseWord) {
      return true
    } else {
      return false
    }
}

/* 
  Add your pseudocode here
that means if the word is not spelled the same in reverse, it should return as false.
reverse the input string
if the input is the same as reserved result
   return true 
else 
   return false


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
