/**
 * common shared function here
 * */

// function getInputFieldValueById(){
// const addMoney = document.getElementById('input-add-money').value;
// return addMoney
// }

/**  Perfect way * */ 

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}