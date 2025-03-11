/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
function areOccurrencesEqual(s) {
    let freqMap = {}; 

    // Step 1: Count occurrences of each character
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!(char in freqMap)) {
            freqMap[char] = 0;
        }
        freqMap[char]++;
    }

    // Step 2: Extract first frequency value
    let firstFreq = -1;

    for (let key in freqMap) {
        if (firstFreq === -1) {
            firstFreq = freqMap[key]; // Set first frequency
        } else if (freqMap[key] !== firstFreq) {
            return false; // Mismatch in frequency
        }
    }

    return true;
}
