document.getElementById('btn-add-money')
 .addEventListener('click', function(event){
    event.preventDefault();

    // const addMoney = document.getElementById('input-add-money').value;
    // const addMoneyNumber = parseFloat(addMoney);
    console.log('add money button clicked');
    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log('add money value', addMoney)

    const addMoney = getInputFieldValueById('input-add-money');
    console.log('add money with parameter', addMoney);

    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add pin with parameter', pinNumber)
 })