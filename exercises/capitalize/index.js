// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let words = str.split(" ");
    const captalized = words.map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    const capitalizedWords = captalized.join(" ");
    return capitalizedWords;
}

console.log(capitalize("hello, how are you?"));

module.exports = capitalize;
