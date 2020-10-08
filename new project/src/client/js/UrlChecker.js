/* function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName } */

//import { TRUE } from "node-sass";

function validateUrl(url) {
    console.log("::: Running checkURL:::", url);
    
    let prefix = "http"
    if(url.includes(prefix)) {
        return true
    } else {
        //alert (" This is not a good URL, change it please!")
        return false
    }
}

export { validateUrl }
