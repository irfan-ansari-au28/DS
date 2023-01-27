// Kadanes Algo

// Maximum Subarray

const nums = [-2,1,-3,4,-1,2,1,-5,4]

const maxSubArray = function(nums) {
    let sum = 0
    let maxi = nums[0]

    for(let i=0; i<nums.length  ; i++){
        sum = sum + nums[i]
        maxi = Math.max(maxi,sum)

        if(sum < 0){
            sum = 0
        }
    }
    return maxi
    
};

console.log(maxSubArray(nums))