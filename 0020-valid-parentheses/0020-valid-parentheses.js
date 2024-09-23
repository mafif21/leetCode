/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

    for (let i = 0; i < s.length; i += 1) {
        let char = s[i]
        if (char == "(" || char == "{" || char == "[") {
            stack.push(s[i])
        }else{
            let lastChar = stack[stack.length - 1]

            if (char == ")" && lastChar == "(" || char == "]" && lastChar == "[" || char == "}" && lastChar == "{"){
                stack.pop()
            }else{
                return false
            }
        }
    }

    return stack.length == 0 ? true: false
};