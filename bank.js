// handle deposit button
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    // get the amount deposit
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText);
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositAmount = previousDepositAmount + depositAmount;
    depositTotal.innerText = newDepositAmount;
    // balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    const newBalanceTotalAmount = previousBalanceTotalAmount + depositAmount;
    balanceTotal.innerText = newBalanceTotalAmount;


    // clear the deposit input field
    depositInput.value = '';
});

// handle withdraw button
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    // get the amount withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalText);
    const newWithdrawAmount = previousWithdrawTotalAmount + withdrawAmount;
    withdrawTotal.innerText = newWithdrawAmount;
    // balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalText);
    const newBalanceTotalAmount = previousBalanceTotalAmount - withdrawAmount;
    balanceTotal.innerText = newBalanceTotalAmount;



    // clear the deposit input field
    withdrawInput.value = '';
})