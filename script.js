
document.getElementById('container').onchange = function() {
    var bill = Number(document.getElementById('billTotal').value);
    var tipPercent = document.getElementById('tipInput').value;
    var split = document.getElementById('people').value;
    var tipValue = bill * (tipPercent / 100);
    var newBillEach = (bill + tipValue) / split;
    var tipSplit = tipValue / split;
    var newTotal = bill + tipValue;
    var newTotalTip = tipValue * 1;

   document.getElementById('tipOutput').innerHTML = tipPercent + "%";
   document.getElementById('splitOutput').innerHTML = split;
   document.getElementById('newBill').innerHTML = "$" + newBillEach.toFixed(2);
   document.getElementById('newTip').innerHTML = "$" + tipSplit.toFixed(2);
   document.getElementById('newTotalBill').innerHTML = "$" + newTotal.toFixed(2);
   document.getElementById('newTotalTip').innerHTML = "$" + newTotalTip.toFixed(2);


}