document.getElementById('show-add-money-form').addEventListener('click', function(){
    console.log('show add money button clicked')
    showSectionById('add-money-form');
})

document.getElementById('show-cash-out-form').addEventListener('click', function(){
    console.log('show cash out button click')
    showSectionById('cash-out-form')
})

document.getElementById('show-transaction-form').addEventListener('click', function(){
    console.log('transactions button click')
    showSectionById('transaction-section')
})