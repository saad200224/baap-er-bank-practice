document.getElementById('btn-deposit').addEventListener(('click'), function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAMount = parseFloat(newDepositAmountString);
    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal + newDepositAMount;
    depositTotalElement.innerText = newDepositTotal;

})