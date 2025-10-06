function isAnagram(s, t) {
    if (s.length !== t.length) return false
    let ana = {}
    for (let i = 0; i < s.length; i++) {
        if (ana[s[i]]) {
            ana[s[i]]++
        } else {
            ana[s[i]] = 1;
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (!ana[t[j]]) {
            return false;
        } else {
            ana[t[j]]--
        }
    }
    for (let i in ana) {
        if (ana[i] !== 0) {
            return false
        }
    }
    return true
}