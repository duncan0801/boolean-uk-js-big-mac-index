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

  Challenge
Instead of outputting the index, can you output a boolean that compares two indices that you previously calculated?
Do this for each index you've created before.

Challenge 2
No one likes to look at just numbers! Could you find a way to include useful text in each output?
Use your Google-Fu to find a way to include some useful information to each of the values you're logging!
*/



let bigMacPriceUS = 5.66

// Britain
let bigMacPriceBritain = 3.19
let ippBritain = bigMacPriceUS/bigMacPriceBritain
let ERBritain = 1.39
let BMIBritain = (((ERBritain - ippBritain)/ ippBritain)*100).toFixed(2)
console.log("BMIBritain: " + BMIBritain + "%")




// SWEDEN
let bigMacPriceSweden = 52.88
let ippSweden = bigMacPriceUS/bigMacPriceSweden
let ERSweden = 0.12
let BMISweden = (((ERSweden - ippSweden) / ippSweden)*100).toFixed(2) // BMI = Big Mac Index
console.log("BMISweden: " + BMISweden + "%")
console.log("The BMI of Sweden is less than the British BMI? - " + (BMISweden < BMIBritain) )

// NORWAY
let bigMacPriceNorway = 52
let ippNorway = bigMacPriceUS/bigMacPriceNorway
let ERNorway = 0.12
let BMINorway = (((ERNorway - ippNorway)/ ippNorway)*100).toFixed(2)
console.log("BMINorway: " + BMINorway + "%")
console.log("The BMI of Norway is less than the British BMI? - " + (BMINorway < BMIBritain) )

// ISRAEL
let bigMacPriceIsrael = 17
let ippIsrael = bigMacPriceUS/bigMacPriceIsrael
let ERIsrael = 0.31
let BMIIsrael = (((ERIsrael - ippIsrael)/ ippIsrael)*100).toFixed(2)
console.log("BMIIsrael: " + BMIIsrael + "%")
console.log("Is the BMI of Israel less than the British BMI? - " + (BMIIsrael < BMIBritain))

// CANADA
let bigMacPriceCanada = 6.77
let ippCanada = bigMacPriceUS/bigMacPriceCanada
let ERCanada = 0.8
let BMICanada = (((ERCanada - ippCanada)/ ippCanada)*100).toFixed(2)
console.log("BMICanada: " + BMICanada + "%")
console.log("The BMI of Canada is less than the British BMI? - " + (BMICanada < BMIBritain ))

// SWITZERLAND
let bigMacPriceSwitzerland = 6.50
let ippSwitzerland = bigMacPriceUS/bigMacPriceSwitzerland
let ERSwitzerland = 1.09
let BMISwitzerland = (((ERSwitzerland - ippSwitzerland)/ ippSwitzerland)*100).toFixed(2)
console.log("BMISwitzerland: " + BMISwitzerland + "%")
console.log("The BMI of Switzerland is less than the British BMI? - " + (BMISwitzerland < BMIBritain) )
