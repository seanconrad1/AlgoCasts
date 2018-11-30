// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const charMap = {}

	for(let char of str){
		if(charMap[char]){
			charMap[char]++
		}else{
			charMap[char] = 1
		}
	}

	let highestNumber = Math.max(...Object.values(charMap))

	for(let v of str){
		if(charMap[v] === highestNumber){
			return v
		}
	}
	
}

module.exports = maxChar;
