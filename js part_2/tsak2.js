//Task-2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Writeafunction'calcTip'thattakesanybillvalueasaninputandreturns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. Andnowlet'susearrays!Socreateanarray'bills'containingthetestdata below
// 3. Createanarray'tips'containingthetipvalueforeachbill,calculatedfrom the function you created before
// 4. Bonus:Createanarray'total'containingthetotalvalues,sothebill+tip Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

function calcBill(bills)
{
    if (bills <=300 && bills >=50)
    {
        return bills * 0.15
    }
    else{
        return bills * 0.2
    }
}
const bills=[125,555,44];
const tips=new Array(calcBill(bills[0]),calcBill(bills[1]),calcBill(bills[2]));
const totals=[];
totals[0]=bills[0] + tips[0];
totals[1]=bills[1] + tips[1];
totals[2]=bills[2] + tips[2];
console.log(bills , tips , totals);
