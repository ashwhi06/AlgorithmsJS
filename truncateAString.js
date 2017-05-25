
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length > num && num >= 3){ //determine if str length is greater than num && if num is greater than or equal to 3
    return str.slice(0, num - 3) + "..."; //if so substract num for 3 and add ...
  } 
  else if(str.length <= num){ //determine if str length is less than or equal to num
    return str.slice(0, num); //if not do not add ...
  } 
  else{
      return str.slice(0, num) + "...";
  }

}
