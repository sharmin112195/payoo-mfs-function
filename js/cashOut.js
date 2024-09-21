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

       if(cashOut > balance){
         alert('You do not have enough money to cash out');
         return;
       }
       
       const newBalance = balance - cashOut;
       document.getElementById('account-balance').innerText = newBalance;

      //  add to transactions history
      const div = document.createElement('add');
      div.classList.add('bg-cyan-300');
      div.innerHTML=`
      <h4 class="text-2xl font-bold">Cash Out</h4>
      <p> ${cashOut} withdraw. Balance ${newBalance}</p>
      `
      document.getElementById('transaction container').appendChild(div);
      
    }
    else{
        alert('invalid')
    }

    if(isNaN(cash)){
      alert('Failed to cash out.');
      return;
    }

    


 })