
function selectedFive(element) {
    const playerName = element.parentNode.children[0].innerText;
    const selectedFiveField = document.getElementById('blank-list');
    const listCount = document.querySelector('ol');
    const numberOfElement = listCount.childElementCount;
    console.log(numberOfElement);

    if (numberOfElement < 5) {
        const li = document.createElement('li');
        li.innerText = playerName;
        selectedFiveField.appendChild(li);
        element.setAttribute('disabled', true)
        element.style.backgroundColor = 'gray';
    }

    else {
        alert("You can't add more than 5");
        return;
    }
}