// Sliding Window
// Find an array that sums to a target (+VE) integer.

const nums = [5, 6, 1, 7, 6, 4, 2, 3];

const target = 20;

const maxSubArraySumsTarget = function(nums, target) {
  let start = 0;
  let end = 0;
  let sum = nums[start];

  while (start < nums.length) {
    // gothcha
    if (start > end) {
      end = start;
      sum = nums[start];
    }

    if (sum < target) {
      if (end > nums.length - 1) break;
      end += 1;
      sum += nums[end];
    } else if (sum > target) {
      sum -= nums[start];
      start += 1;
    } else {
      console.log(start, end);
      return [start, end]
    }
  }
};

// Big-O = O(n)

// Output :
maxSubArraySumsTarget(nums, target);
