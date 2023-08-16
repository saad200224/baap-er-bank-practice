document.getElementById('btn-withdraw').addEventListener(('click'), function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAMount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    if(isNaN(newWithdrawAMount) || newWithdrawAMount <= 0){
        alert('Please Provide a valid number.');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    if (newWithdrawAMount > previousBalanceTotalAmount){
        alert('Reached limit.')
        return;
    }
    
    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAMount;
    balanceTotalElement.innerText = newBalanceTotal;

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAMount;
    withdrawTotalElement.innerText = newWithdrawTotal;
    
});