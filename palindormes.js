function palindrome (str) {
	var regEx = /[\W_]/g; //create variable for regEx to be used in the replace method ([^A-Za-z0-9_] would have worked as well)
	var regExToLower = str.toLowerCase().replace(regEx, ''); //convert strings into lowercase,then replace all non-alphanumeric characters 
	var reverseStr = regExToLower.split('').reverse().join(''); //split the string into substrings, reverse the array, then join all the elements
	return regExToLower == reverseStr; // check to see if regExToLower equals reverseStr and return true/false
}
