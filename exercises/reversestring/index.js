// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str){
//   arr = []
//   for(let i=0; i<str.length; i++){
//     arr.push(str[str.length - i - 1])
//   }
//   return arr.join('')
// }

function reverse(str) {
  let reversed = ''
  for(let character of str){
    reversed = character + reversed
  }
  return reversed
}


console.log(reverse('heloooo'))

module.exports = reverse;
