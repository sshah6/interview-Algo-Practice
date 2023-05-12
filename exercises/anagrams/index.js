// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const firstString = cleanStrings(stringA);
    const secondString = cleanStrings(stringB);
    if(firstString == secondString){
        return true;
    }else{
        return false;
    }
}
function cleanStrings(str){
    let cleanedString = str.toLowerCase().replace(/[^\w]/g, '');
    cleanedString = cleanedString.split("").sort().join("");
    return cleanedString;
}
console.log(anagrams("!hello", "!ollhe"));


// module.exports = anagrams;
