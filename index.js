var reverseStr = function(s, k) {
    let result = ''
    const reverseString=(s)=>{
        let start = 0
        let end = s.length - 1
        while(start<end){
            [s[start],s[end]] = [s[end],s[start]]
        }
        return s
    }
    let left = 0
    let length = s.length
    while(left<s.length)
    if(length > k){
        const reversed = reverseString(s.substring(0,k))
        result += reversed
        left += 2*k
    }else if(length <= 2*k && length > k){
        const reversed = reverseString(s.substring(left,k))
        result += reversed
        left += 2*k
    }else{
        const reversed = reverseString(s.substring(left,length))
        result += resversed
        return result
    }
    return result
};

console.log(reverseStr("abcdefg"))