document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerCost = getValueFromInput('per-player-input');
    const listCount = document.querySelector('ol');
    const numberOfPlayers = listCount.childElementCount;
    const playerCost = perPlayerCost * numberOfPlayers;

    setInnerTextToShowOutput('player-cost', playerCost);

    // console.log(playerCost);
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const playerCost = getInnerText('player-cost');
    const managerCost = getValueFromInput('manager-input');
    const coachCost = getValueFromInput('coach-input');

    const totalCost = playerCost + managerCost + coachCost;
    console.log(totalCost);

    setInnerTextToShowOutput('total-expense', totalCost);
})

