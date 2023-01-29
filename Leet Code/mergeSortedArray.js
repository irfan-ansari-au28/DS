// Merge sorted array
// Two pointer concept

const merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (j >= 0) {
    nums[j--] = nums2[i--];
  }
};
merge([7, 9, 45, 0, 0, 0], 3, [6, 15, 16], 3);
