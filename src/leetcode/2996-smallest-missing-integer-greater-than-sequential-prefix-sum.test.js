// https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  let sequence = "";
  let prevMax = 0;
  for (let i = 0; i < nums.length; i += 1) {
    let counter = 0;
    for (let j = i; j < nums.length; j += 1) {
      if (i === j) {
        counter += 1;
        continue;
      }
      if (isSequential(nums, j)) {
        counter += 1;
      } else {
        break;
      }
    }
    if (counter > prevMax) {
      const old = sequence;
      prevMax = counter;
      sequence = nums.slice(i, counter).join("~");
    } else {
      counter = 0;
    }
  }

  let sum = sequence
    .split("~")
    .filter((x) => x)
    .reduce((res, ds) => {
      return res + parseInt(ds);
    }, 0);

  if (sum === 0) {
    let max = 0;
    nums.forEach((num) => {
      if (num > max) max = num;
    });
    sum = max;
  }

  if (!nums.includes(sum)) {
    return sum;
  } else {
    const result = nums.reduce((res, curr) => {
      if (res < curr) {
        res = curr;
      }
      return res;
    }, sum);
    const final = result + 1;
    return final;
  }
};

function isSequential(nums, i) {
  const result = nums[i] === nums[i - 1] + 1;
  return result;
}

test("smallest missing integer", () => {
  // expect(missingInteger([1, 2, 3, 2, 5])).toEqual(6);
  // expect(missingInteger([3, 4, 5, 1, 12, 14, 13])).toEqual(15);
  // expect(
  //   missingInteger([13, 4, 2, 2, 3, 4, 1, 8, 3, 7, 7, 7, 1, 6, 3])
  // ).toEqual(14);
  // expect(missingInteger([1, 2, 3, 2, 5])).toEqual(7);
});
