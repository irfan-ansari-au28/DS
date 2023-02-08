function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let charCounts = {};

    for (let i = 0; i < s.length; i++) {
        charCounts[s[i]] = (charCounts[s[i]] || 0) + 1;
        charCounts[t[i]] = (charCounts[t[i]] || 0) - 1;
    }

    for (let key in charCounts) {
        if (charCounts[key] !== 0) return false;
    }

    return true;
}
let s = "anagram"
let t = "nagaram"

console.log(isAnagram(s,t))