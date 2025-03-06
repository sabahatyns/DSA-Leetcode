/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let NewStr = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (NewStr[char] === undefined) {
            NewStr[char] = 1;
        } else {
            NewStr[char]++
        }
    }

    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (NewStr[char] === undefined || NewStr[char] === 0) {
            return false;
        } else {
            NewStr[char]--
        }
    };
    return true
}