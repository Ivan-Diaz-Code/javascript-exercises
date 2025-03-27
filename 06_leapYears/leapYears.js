const leapYears = function(varNum) {
    if(varNum % 4 === 0)
    {
        if(!(varNum % 100 === 0)){
            return true;

        }else if(varNum % 100 === 0 && varNum % 400 === 0){
            return true;
        }else {
            return false;
        }
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
