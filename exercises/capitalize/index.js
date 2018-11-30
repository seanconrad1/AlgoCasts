// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// iterate through sentence,
// find the space,
// uppercase next letter

let counter = 0

function capitalize(str) {
    str = str.split(' ')
    str = str.map(char => char.charAt(0).toUpperCase() + char.slice(1)).join(' ')

    return str
}

capitalize('a short sentence')

module.exports = capitalize;
