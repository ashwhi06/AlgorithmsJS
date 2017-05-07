
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
    if(str.substr(-target.length) === target) //negative target starts counting from the end of the string instead of from the beginning of the string.
     {
       return true;
     } 
    else 
    {
  // -- Falcor
  return false;
     }
}