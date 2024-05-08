/* 1. Write a function findLongestWord that takes a string of words and returns the longest word in the string. */
function findLongestWord(str){
    const array = str.split(" ");
    let length = 0;
    let longestWord = '';
    for(wordOfarray of array){
        if (length < wordOfarray.length){
            length = wordOfarray.length
            longestWord = wordOfarray;
        }
    }
    return longestWord; 
}
console.log(findLongestWord('Laba diena su vistienaaaa'));

/* 2. Write a function findMax that takes an array of numbers as input and returns the maximum number in the array. */
function findMax(array){

 return  Math.max(...array);
}

console.log(findMax([3, 7, 1, 9, 4])); // Output: 9
 
/* 3.Write a function reverseString that takes a string as input and returns the reverse of that string.*/
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello')); // Output: "olleH"

/*4.Write a function titleCase that converts a sentence to title case (the first letter of each word capitalized).*/
function titleCase(sentence) {
  return sentence
    .split(' ')
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(' ');
}


console.log(titleCase('this is a sample sentence')); // Output: "This Is A Sample Sentence"