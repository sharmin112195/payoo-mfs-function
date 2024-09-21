document.getElementById('btn-cash-out')
 .addEventListener('click', function(event){
    event.preventDefault();
    console.log('inside the click handler')

    // call utilities2.js file

    const cashOut = getInputFieldById('input-cash-out');
    const pinNumber = getInputFieldById('input-cash-out-pin')
    console.log('cash out with parameter', cashOut, pinNumber);

    if(pinNumber === 1234){
       const balance = getTextFieldValueById('account-balance');
       const newBalance = balance - cashOut;
       document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('invalid')
    }


 })