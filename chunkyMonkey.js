//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrayResult = []; //create enpty array to store the result
  while (arr.length > size){ //check if arr length is greater than size
  	arrayResult.push(arr.slice(0, size)); //use push method to push sliced array in groups 
  }
  if (arr.length) { //checks array length 
  	arrayResult.push(arr); //pushes results into two dimensional array
  }
  return arrayResult;
}
