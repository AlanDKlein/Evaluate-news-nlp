function handleSubmit(event) {
    console.log("in handle submit")
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
    fetch('http://localhost:8080/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })    
}

// The below is what it was from the start.
    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
    //}

export { handleSubmit }
