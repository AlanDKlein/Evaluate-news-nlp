// urlChecker.js
const validUrl = require('valid-url');
    
function isValidURL(URL) {
    if (validUrl.isUri(URL)) {
        return true;
     }
    else {
        alert('Error:  URL is not valid');
        return false;
    }
}
export { isValidURL }