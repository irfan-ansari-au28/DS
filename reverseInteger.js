// Reverse Integer within signed-bit 

var reverse = function(x) {
    let rev = 0
    while(x !== 0){
        let pop = x%10
        x = Math.floor(x/10)
        rev = rev * 10 + pop
    }
    if(rev< Math.pow(-2,31) || rev > Math.pow(2,31)-1){
        return 0
    }
    return rev
    
};

console.log(reverse(214748364))