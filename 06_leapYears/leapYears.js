const leapYears = function(leapyear) {
    if (leapyear % 4 === 0) {
        return true;
    } else if (leapyear % 100 !== 0) {
        return false;
    } else if (leapyear % 400 === 0 && leapyear % 100 === 0) {
        return true; 
    } else if (leapyear % 400 === 0 && leapyear % 4 === 0) {
        return false;
    } else {
        // not sure what to write here
    }
};

// Do not edit below this line
module.exports = leapYears;


