/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

let bigMacPriceUS = 5.66

// SWEDEN
let bigMacPriceSweden = 52.88
let ippSweden = bigMacPriceUS/bigMacPriceSweden
let ERSweden = 0.12
let BMISweden = (ERSweden - ippSweden)/ ippSweden
console.log(BMISweden)

// NORWAY
let bigMacPriceNorway = 52
let ippNorway = bigMacPriceUS/bigMacPriceNorway
let ERNorway = 0.12
let BMINorway = (ERNorway - ippNorway)/ ippNorway
console.log(BMINorway)

// ISRAEL
let bigMacPriceIsrael = 17
let ippIsrael = bigMacPriceUS/bigMacPriceIsrael
let ERIsrael = 0.31
let BMIIsrael = (ERIsrael - ippIsrael)/ ippIsrael
console.log(BMIIsrael)

// CANADA
let bigMacPriceCanada = 6.77
let ippCanada = bigMacPriceUS/bigMacPriceCanada
let ERCanada = 0.8
let BMICanada = (ERCanada - ippCanada)/ ippCanada
console.log(BMICanada)

// SWITZERLAND
let bigMacPriceSwitzerland = 6.50
let ippSwitxerland = bigMacPriceUS/bigMacPriceSwitzerland
let ERSwitzerland = 1.09
let BMISwitzerland = (ERSwitzerland - ippSwitzerland)/ ippSwitzerland
console.log(BMISwitzerland)
