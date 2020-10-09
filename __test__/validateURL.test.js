import 'regenerator-runtime/runtime'
var requestPost = require('../src/client/js/urlChecker')
var validateRequest = requestPost.isValidURL;

describe('Test, the function "isValidURL" should exist' , () => {
    test('It should return true', async () => {
        expect(validateRequest).toBeDefined();
    });
});
describe('Test "isValidURL()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateRequest).toBe("function");
    });
});
