/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */


  function falsy(arg){
    return Boolean(arg);
  }
  var filteredArray = arr.filter(falsy);
  return filteredArray;
}