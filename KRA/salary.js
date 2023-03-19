function kra(payee) {
    if (payee<24,000) {
       tax = (payee * (10/100));
    }
    else if (payee<32,333) {
        tax = (payee * (25/100));
    }
    else {
        tax = (payee * (30/100));
    }
}
function nhif(grossPay) {
    if (grossPay<5999) {
        nhif = grossPay-150;
    }
    else if (grossPay<7999) {
        nhif = grossPay-300;
    }
    else if (grossPay<11999) {
        nhif = grossPay-400;
    }
    else if (grossPay<14999) {
        nhif = grossPay-500;
    }
    else if (grossPay<19999) {
    nhif = grossPay-600;
}
else if (grossPay<24999) {
    nhif = grossPay-750;
}
else if (grossPay<29999) {
    nhif = grossPay-850;
}
else if (grossPay<34000) {
    nhif = grossPay-900;
}
else if (grossPay<39999) {
    nhif = grossPay-950
}
else if (grossPay<44999) {
    nhif = grossPay-1000;
}
else if (grossPay<49999) {
        nhif = grossPay-1100;
}
if (grossPay<59999) {
     nhif = grossPay-1200;
}
            
if (grossPay<69999) {
    nhif = grossPay-1300;
}
if (grossPay<79999) {
     nhif = grossPay-1400;

}
if (grossPay<89999) {
    nhif = grossPay-1500;
}
else if (grossPay<99999) {
    nhif = grossPay-1600;
}
else {
    nhif = grossPay-1700;
}
}
