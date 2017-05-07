

function largestOfFour(arr) {
  var largestNum = [0,0,0,0]; //largest four array values will be captured here
  var arrayIndex;
  var subIndex;

  for (arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) { //loops through first array
  	for (subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) { //loops through second array
  		if (arr[arrayIndex][subArrayIndex] > largestNum[arrayIndex]){ //determines if first- and sub-array holds largest array  
          largestNum[arrayIndex] = arr[arrayIndex][subArrayIndex]; //setting largest values equal to first- and sub-array
        }
  	}
    
  }
  return largestNum;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
