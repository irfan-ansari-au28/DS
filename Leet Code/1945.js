//  1945. Sum of Digits of String After Convert

//  Input: s = "leetcode", k = 2
// Output: 6
// Explanation: The operations are as follows:
// - Convert: "leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
// - Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
// - Transform #2: 33 ➝ 3 + 3 ➝ 6
// Thus the resulting integer is 6.

var getLucky = function(s, k) {
	let res = s.split('').reduce((acc, el) => acc + (el.charCodeAt(0) - 96), '')
	for (let i = 0; i < k; i++) {
		res = res.toString().split('').reduce((acc, el) => acc + Number(el), 0)
	}
	return res;
};