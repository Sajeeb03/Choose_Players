
function getValueFromInput(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    if (isNaN(inputFieldValue) == true) {
        alert('Enter a number.');
        inputField.value = '';
        return;
    }
    else {

        return inputFieldValue;
    }
}

function getInnerText(elementId) {
    const innerTextField = document.getElementById(elementId);
    const innerTextFieldString = innerTextField.innerText;
    const innerTextValue = parseInt(innerTextFieldString);
    return innerTextValue;
}

function setInnerTextToShowOutput(elementId, value) {
    const outputField = document.getElementById(elementId);
    outputField.innerText = value;
}