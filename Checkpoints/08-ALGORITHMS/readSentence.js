function readSentence() {
  let nbVowels = 0;
  let nbWords = 0;
  let nbCharacters = 0;

  const sentence = "This is a sentence.";
  //let sentence = prompt("Type a sentence")
  while (sentence[nbCharacters] !== ".") {
    if (sentence[nbCharacters] === " ") nbWords++;
    else if (sentence[nbCharacters].includes("a", "e", "u", "i", "o", "y"))
      nbVowels++;
    nbCharacters++;
  }

  console.log(sentence[nbCharacters].includes("a", "e", "u", "i", "o", "y"));
  console.log(
    "The number of characters in the sentence is: ",
    nbCharacters + 1
  ); //including the final dot .
  console.log("The number of words in the sentence is: ", nbWords + 1);
  console.log("The number of vowels in the sentence is: ", nbVowels);
}
readSentence();
