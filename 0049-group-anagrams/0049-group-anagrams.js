/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    let anagramMap = new Map();

    for (let word of strs) {
        let freq = Array(26).fill(0);

        for (let char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let key = freq.join("#");

        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }
        anagramMap.get(key).push(word);
    }

    return Array.from(anagramMap.values()); 
}