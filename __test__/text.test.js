
import { handleSubmit } from "../src/client/js/formHandler"

describe("Testing submit", () => {
    test("Tesing handleSubmit", () => {
        let data = {};

        data.sentence_list = { text: 'This is a test sentence' };
        data.confidence = '100';
        data.agreement = 'AGREEMENT';
        data.irony = 'NONIRONIC';


        let myNewText = '';
        myNewText = myNewText + data.sentence_list.text
        let output = `The NLP analyzer was ${data.confidence}% confident that the above statement was of the type:  ${data.agreement} and ${data.irony}`

        expect(myNewText).toMatch(/This is/);
        expect(output).toMatch(/100/);
        expect(output).toMatch(/AGREEMENT/);
        expect(output).toMatch(/NONIRONIC/);
    })
});

test('formText has some data', () => {
    let formText = 'some text'
    expect(formText).not.toBeNull();
});