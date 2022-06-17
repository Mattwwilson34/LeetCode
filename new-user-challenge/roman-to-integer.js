const romanDictionary = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

const testString = 'MCMXCIV';

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (testString) {
  // Variable to store converted integers
  const answer = [];

  // Split string into array
  const romanArray = testString.split('');

  // Loop through each romanArray index and convert
  romanArray.forEach((char, i) => {
    // Create variable for readability
    const nextArrayIndex = romanArray[i + 1];

    // Check for I based subtraction
    if (
      (char === 'I' && nextArrayIndex === 'V') ||
      (char === 'I' && nextArrayIndex === 'X')
    ) {
      // Update char
      char += nextArrayIndex;
      // remove nextArray index
      romanArray.splice(i + 1, 1);
    }

    // Check for X based subtraction
    if (
      (char === 'X' && nextArrayIndex === 'L') ||
      (char === 'X' && nextArrayIndex === 'C')
    ) {
      char += nextArrayIndex;
      romanArray.splice(i + 1, 1);
    }

    // Check for C based subtraction
    if (
      (char === 'C' && nextArrayIndex === 'D') ||
      (char === 'C' && nextArrayIndex === 'M')
    ) {
      char += nextArrayIndex;
      romanArray.splice(i + 1, 1);
    }

    // Loop through dictionary and push integer value to answer array
    for (const prop in romanDictionary) {
      if (char === prop) answer.push(romanDictionary[prop]);
    }
  });

  //  return the sum of answer array
  return answer.reduce((prev, cur) => prev + cur);
};

console.log(romanToInt(testString));
