module.exports = function toReadable(number) {
    const arr1 = [
        "zero",
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
        "nineteen"
    ];
    const arr2 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    const result = number => {
        if (number < 20) return arr1[number];

        if (number < 100)
            return (
                arr2[Math.floor(number / 10)] +
                (number % 10 ? " " + arr1[number % 10] : "")
            );
        if (number < 1000)
            return (
                arr1[Math.floor(number / 100)] +
                " hundred" +
                (number % 100 ? " " + result(number % 100) : "")
            );
    };
    return result(number);
};
