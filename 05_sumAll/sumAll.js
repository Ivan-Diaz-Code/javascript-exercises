const sumAll = function(varOne, varTwo) {
    if (!Number.isInteger(varOne) || !Number.isInteger(varTwo)) return "ERROR";
    if (varOne < 0 || varTwo < 0) return "ERROR";
    if(varOne > varTwo)
    {
        const temp = varOne;
        varOne = varTwo;
        varTwo = temp;
    }

    let sum = 0;
    for (let i = varOne; i <= varTwo; i++) {
        sum += i;
    }
    return sum;

   


};

// Do not edit below this line
module.exports = sumAll;
