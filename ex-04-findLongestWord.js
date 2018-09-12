/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("i like books full of dogs") should return "books"
 *
**/

// ++ YOUR CODE below

function findLongestWord(text) {
	var arrayText = text.split('');
	let newText= "";
	let maxWord ="";
	 for (let i = 0; i < arrayText.length; i++) {
	   if (arrayText[i] === "'" || arrayText[i] === "." ||
		   arrayText[i] === ";" || arrayText[i] === "-" ||
		   arrayText[i] === "," || arrayText[i] === "!") {
		  newText += " ";
		} else{
		  newText += arrayText[i];
		}
	  }
  
	  newText = newText.split(" ");
	  maxWord = newText[0];
	  for (let i = 0; i < newText.length; i++) {
		if (maxWord.length < newText[i].length) {
		  maxWord = newText[i];
		}
	  }
	  return maxWord;
}







// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-04');
  console.log('ex-04\n%cFunction: findLongestWord', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return "baskets" from "I have baskets full of lemons"');
console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')

console.log('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')

//  punctuation should NOT be included in the evaluation for the longest word
console.log('Should return "Texas" from "don’t mess with Texas"');
console.assert(findLongestWord("don't mess with Texas") === 'Texas')

console.log('Should return "time" from "a time to act."');
console.assert(findLongestWord('a time to act.') === 'time')

console.log('\n')
