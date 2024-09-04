/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let filteredArray = [];
    const list = [
        { symbol: "I", value: 1 },
        { symbol: "V", value: 5 },
        { symbol: "X", value: 10 },
        { symbol: "L", value: 50 },
        { symbol: "C", value: 100 },
        { symbol: "D", value: 500 },
        { symbol: "M", value: 1000 },
    ];
    for (let i = 0; i < s.length; i++) {
        const filter = list.find((word) => word.symbol == s[i]);
        filteredArray.push(filter);
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length && filteredArray[i].value < filteredArray[i + 1].value){
            result -= filteredArray[i].value;
        } else {
            result += filteredArray[i].value;
        }
    }

  return result
};