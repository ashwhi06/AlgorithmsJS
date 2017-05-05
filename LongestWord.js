function findLongestWord(str) {
	var strSplit = str.split(' '); //splits string

	var longestWord = 0;  // initializes variable that will hold longest word

	for (var i = 0; i < longestWord.length; i++) { 
		if (strSplit[i].length > longestWord) { //checking to see if the strSplit[i] is greater than the longest word
			longestWord = strSplit[i].length; //setting the longestword will take the value of strSplit[i] so that we can return it
		}
	}
  return longestWord;
}
