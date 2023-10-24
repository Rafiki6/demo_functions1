// SOCIAL SECURITY TAX
function getSocSecTax(grosspay) {
    const sosTax = grosspay * 0.062;
    return sosTax;
}
let grosspay = 3564;
let sosTax = getSocSecTax(grosspay);
console.log("Social Security Tax: $" + sosTax.toFixed(2))

// MEDICARE TAX
function getMedicareTax(grosspays) {
    const medicareTax = grosspay * 0.0145;
    return medicareTax;
}
let grosspays = 2350;
let medicareTax = getMedicareTax(grosspays)
console.log("Medicare  Tax: $" + medicareTax.toFixed(2))

// FEDERAL TAX
function getFederalTax(grossPayed, witholdingCode) {

}
let taxrate = { 0: 0.23, 1: 0.21, 2: 0.195, 3: 0.185, 4: 0.18 };
if (witholdingCode >= 0 && witholdingCode <= 3) {
    
    let federalWithholding = grossPayed * taxrate
}

