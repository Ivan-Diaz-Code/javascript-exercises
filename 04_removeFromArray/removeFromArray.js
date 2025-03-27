const removeFromArray = function(array, ...args) {
    
    /*
   let i = 0;
   while(i < arr.length)
   {
    if(arr[i] === varOne || arr[i] === varTwo)
    {
        arr.splice(i,1)
    }else{
        ++i;
    }
   }


    return arr;
    */
   // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
