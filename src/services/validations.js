// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) => {
    if (gamerTag === undefined) return false;
    const isLengthValid = gamertag.length >= 8;
    return isLengthValid && Math.random() >= 0.5;
};

exports.isValid = isValid;
