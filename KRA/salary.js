function salaryCalc(salary) {
    
//function to calculate KRA
    function payeeCalc(salary) {
        if (salary<24,000) {
            payee= (salary * (10/100));
        }
        else if (salary<32,333) {
            payee = (salary * (25/100));
        }
        else {
            payee = (salary * (30/100));
        }
        return payee;
    }
    //function to calculate nhif
    function nhifCalc(salary) {
        if (salary<5999) {
            nhif = 150;
        }
        else if (salary<7999) {
            nhif = 300;
        }
        else if (salary<11999) {
            nhif = 400;
        }
        else if (salary<14999) {
            nhif = 500;
        }
        else if (salary<19999) {
        nhif = 600;
        }
        else if (salary<24999) {
        nhif = 750;
        }
        else if (salary<29999) {
            nhif = 850;
        }
        else if (salary<34000) {
            nhif = 900;
        }
        else if (salary<39999) {
            nhif = 950
        }
        else if (salary<44999) {
            nhif = 1000;
        }
        else if (salary<49999) {
                nhif = 1100;
        }
        if (salary<59999) {
            nhif = 1200;
        }
                    
        if (salary<69999) {
            nhif = 1300;
        }
        if (salary<79999) {
            nhif = 1400;

        }
        if (salary<89999) {
            nhif = 1500;
        }
        else if (salary<99999) {
            nhif = 1600;
        }
        else {
            nhif = 1700;
        }
        return nhif;
        }
//function to calculate nssf        
    function nssfCalc(salary) {
        if (salary<=6000) {
            nssf= salary * 0.06;
        }
        else if(salary>6000 && salary<18000) {
            nssf = 360 + ((salary-6000) * 0.06);

        }
        else {
            nssf = (360 + (12000 *0.06));
        }
        return nssf;
        }
        console.log("Your net salary is:");
        console.log(salary-nhif-nssf-payee);
}
salaryCalc(18000);
