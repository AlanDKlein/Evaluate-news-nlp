function checkForName(formText) {
 
 if (formText === '' || formText === null) {
        // alert("You must either copy/paste text from above or enter your own.")
        return false;
    }
    else {
        return true;
    }
}
 
export { checkForName }
