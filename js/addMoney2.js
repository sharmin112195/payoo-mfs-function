document.getElementById('btn-add-money')
 .addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldById('input-add-money')
    const pinNumber = getInputFieldById('input-pin-number')
    console.log('add money inside addMoney2.js', addMoney, pinNumber);

    // wrong way to verify. do not try it at your serious website

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance ;
    }
    else{
        alert('Faild to add the money');
    }
 })