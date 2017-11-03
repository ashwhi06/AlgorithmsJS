function palindrome (str) 
{
	return str = str.toLowerCase().split('').reverse().join(''); //set all values to lowercase, split the string into substrings, reverse the array, then join all the elements
}

