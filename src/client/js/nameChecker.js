function checkForName(inputText) {
    alert("in namechecker");
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "klein"
    ]

    if (names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
