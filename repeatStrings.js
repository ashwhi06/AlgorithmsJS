
function repeatStringNumTimes(str, num) {

  var newString = ""; //created to store new string
  while(num > 0){ // created to loop through number of string
      newString += str; //set newString equal to str value
    num--;// prevents endless loop
    }
    return newString;
}
repeatStringNumTimes("abc", 3);
