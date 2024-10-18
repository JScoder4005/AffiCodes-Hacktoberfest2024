function checkDivisibility(num) {
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;  // Extract the last digit
        if (digit === 0 || num % digit !== 0) {
            return false;  // If digit is 0 or num is not divisible by digit
        }
        temp = Math.floor(temp / 10);  
    }
    return true;
}


let number = 128;
if (checkDivisibility(number)) {
    console.log(`${number} is divisible by all of its digits.`);
} else {
    console.log(`${number} is not divisible by all of its digits.`);
}
