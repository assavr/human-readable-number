function toReadable(number) {
    const zeroToTwenty = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const twentyToHundred = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number === 0) {
        return "zero";
    }
    if (number < 20) {
        return zeroToTwenty[number];
    } else {
        let res = "";
        const firstNum = Math.trunc(number / 100);
        if (firstNum >= 1) {
            const firstNumStr =
                zeroToTwenty[Math.trunc(number / 100)] + " hundred";
            res += firstNumStr;
        }
        const secondNum = number % 100;
        let secondNumStr = twentyToHundred[Math.trunc((number % 100) / 10)];
        if (secondNum < 20) {
            secondNumStr = zeroToTwenty[secondNum];
            res += " " + secondNumStr;
            return res;
        }
        const thirdNumStr = zeroToTwenty[number % 10];
        res += " " + secondNumStr + " " + thirdNumStr;
        return res;
    }
}

toReadable(998);
