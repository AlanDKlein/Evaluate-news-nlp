import { checkForName } from "./nameChecker"
import { isValidURL } from "./urlChecker"
let apiKey = '';
function handleSubmit(event) {
    event.preventDefault()
   
    const getAPIKey = async () => {
        const request = await fetch('/test');
        try {
            const theData = await request.json();
            apiKey = theData.key;
            console.log(apiKey);
        }
        catch (error) {
            console.log(error);
        }
    };
    getAPIKey()

   
          

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let URL = "https://api.meaningcloud.com/sentiment-2.1?"
    let myText = true;
    let myURL = true;
    myURL = isValidURL(URL);
    myText = checkForName(formText);
    URL = `${URL}${apiKey}`
    console.log("URL now =", URL)
    if (myText === true && myURL === true) {
        
    fetch("https://api.meaningcloud.com/sentiment-2.1?key=22acb93f8ca87c9e5ad0a16893814c95&of=json&txt=" + formText + "&model=general&lang=en")

        .then(res => {
            return res.json()
        })
        .then(function (data) {
            let text_rows = data.sentence_list.length
            let myNewText = ''
            for (let i = 0; i < text_rows; i++) {
                myNewText = myNewText + data.sentence_list[i].text
            }
            let output = `The NLP analyzer was ${data.confidence}% confident that the above statement was of the type:  ${data.agreement} and ${data.irony}`
            document.getElementById('input_text1').innerHTML = myNewText
            document.getElementById('results').innerHTML = `${output}.`
        });
    }
    }
    export { handleSubmit }

