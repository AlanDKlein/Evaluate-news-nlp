import { checkForName } from "./nameChecker"
import { isValidURL } from "./urlChecker"


function handleSubmit(event) {
    event.preventDefault()
    let apiKey = '';
    let testURL = "";
    let myText = false;
    let myURL = false;
     
    function getAPIKey() {
         fetch('/test')
            .then(response => response.json())
            .then(data => {
                apiKey = data.key
                let formText = document.getElementById('name').value
                URL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${formText}&model=general&lang=en`
                testURL = URL.slice(0,43);
                myURL = isValidURL(testURL); 
                myText = checkForName(formText);
                if (myText === true && myURL === true) {
                   
                fetch(URL)
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
            })
    };
   getAPIKey();

}
export { handleSubmit }



    // .then(myURL = isValidURL(URL) )
    // .then(myText = checkForName(formText))
    // .then(console.log(`Url = ${myURL}, api key = ${myKey}, myText = ${myText}`))






    // if (myText === true && myURL === true) {
    //   console.log('ready to fetch');
    // fetch("https://api.meaningcloud.com/sentiment-2.1?key=22acb93f8ca87c9e5ad0a16893814c95&of=json&txt=" + formText + "&model=general&lang=en")

    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(function (data) {
    //         let text_rows = data.sentence_list.length
    //         let myNewText = ''
    //         for (let i = 0; i < text_rows; i++) {
    //             myNewText = myNewText + data.sentence_list[i].text
    //         }
    //         let output = `The NLP analyzer was ${data.confidence}% confident that the above statement was of the type:  ${data.agreement} and ${data.irony}`
    //         document.getElementById('input_text1').innerHTML = myNewText
    //         document.getElementById('results').innerHTML = `${output}.`
    //     });
    // }


