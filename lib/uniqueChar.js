module.exports = uniqueChar = string => {
    for (var i = 0; i < string.length; i++) { // loops through string
        const uniqueC = string[i];  // assigns uniqueC to the letters index
        if (
            string.indexOf(uniqueC) === i && // checks to see if the index of uniqueC is the same as the current index
            string.indexOf(uniqueC, i + 1) === -1 // checks to see if there are any other occurances of that character. * -1 means it wasnt found.
        ) {
            return uniqueC;
        }
    }
    return undefined;
};
