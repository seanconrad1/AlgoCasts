// Check two strings to see if they one or more of the same character
// If 1 or more, return true
//  else false


function sameChars(str1, str2) {
  if (str1.length > str2.length) {
    charMap = createCharMap(str2)
    keys = Object.keys(charMap)
    for(let char of str1){
      if(keys.includes(char)){
        return true
      }
    }
    return false
  }else {
    charMap = createCharMap(str1)
    keys = Object.keys(charMap)
    for(let char of str2){
      if(keys.includes(char)){
        return true
      }
    }
    return false
  }

}

function createCharMap(str) {
  let charMap = {}
  for(let char of str){
    if (charMap[char]) {
      charMap[char]++
    }else {
      charMap[char] = 1
    }
  }
  return charMap
}

// }else {
//   charMap = createCharMap(str1)
//   if (let char of str2.includes(Object.keys(charMap))) {
//     console.log('true');
//   }else {
//     console.log('false');
//   }
