const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid('somegamertag');
        expect(result).toBeDefined();
    });

    test('should return false for gamertags with length less than 8 characters', () => {
        const result = isValid('azes');
        expect(result).toBeFalsy();
    });

    test('should return true for gamertags with length equal to or greater than 8 characters', () => {
        const result = isValid('azqsdwcgertyu');
        expect(result).toBeTruthy();
    });
});
