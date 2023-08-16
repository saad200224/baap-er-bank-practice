document.getElementById('btn-deposit').addEventListener(('click'), function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAMount = parseFloat(newDepositAmountString);
    depositField.value = '';

    if(isNaN(newDepositAMount) || newDepositAMount <= 0){
        alert('Please Provide a valid number.');
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal + newDepositAMount;
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotalAmount + newDepositAMount;
    balanceTotalElement.innerText = newBalanceTotal;
});