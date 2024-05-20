// 680. Valid Palindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.



// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false




const filter = s => {
    for(i=0,j=s.length-1;i<j;i++,j--) if (s[i]!=s[j]) break
    return s.slice(i,j+1)
}

var validPalindrome = function(s) {

    const s0=filter(s.split``)
    if (s0.length<=1) return true

    const s1=filter(s0.slice(1))
    if (s1.length<=1) return true

    const s2=filter(s0.slice(0,-1))
    if (s2.length<=1) return true

    return false
};

