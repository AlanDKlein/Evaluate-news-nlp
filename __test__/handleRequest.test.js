import 'regenerator-runtime/runtime'
var requestPost = require('../src/client/js/formHandler')
var validateRequest = requestPost.handleSubmit;
var httpMocks = require('node-mocks-http');


describe('Test, the function "handleSubmit" should exist' , () => {
    test('It should return true', async () => {
        expect(validateRequest).toBeDefined();
    });
});
describe('Test "handleSubmit()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateRequest).toBe("function");
    });
});
