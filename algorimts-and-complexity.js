// Time complexity: O(1)
function fastPower(number, power) {
  return number ** power;
}

//Time complexity: O(n)

function iterativePower(number, power) {
  let result = 1;

  for (let i = 0; i < power; i+= 1) {
    result *= number;
  }

  return result;
}

function factorial(number) {
  if (number === 0) {
    return number;
  }

  return factorial(number - 1) * number;
}

// Time complexity O(n**2)
function pairs(letters) {
  const result = [];

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      result.push(`${letters[i]}${letters[j]}`)
    }
  }
  return result;
}