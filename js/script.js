// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  $("button").click(function(){
  	  console.log("hello")
        var message=$("input").val();
          var translate = sentenceToPigLatin(message);
          $("#answer").text(translate);
  });
});

function wordToPigLatin(word){
  if ( word [0]=== "a" ||  word [0] === "e" || word [0] === "i" || word [0] === "o" ||  word [0] === "u"){
     
    return word + "ay";  
  }
  
}

// ["this", "is", "a", "test"]



function sentenceToPigLatin(sentence){
    var arrayOfWords = sentence.split(" ");
    for(var i = 0; i < arrayOfWords.length; i++) {
        var word = arrayOfWords[i];
        var transformedWord = wordToPigLatin(word);
        arrayOfWords[i] = transformedWord;
    }
    console.log(arrayOfWords);
    return arrayOfWords;
}
      
      


console.log(sentenceToPigLatin("this is a test"))


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


