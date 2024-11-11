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
        // console.log(`${i} -> i === j; continuing`);
        counter += 1;
        continue;
      }
      if (isSequential(nums, j)) {
        // console.log(`seq -> nums[i]: ${nums[i]}, nums[i-1]: ${nums[i - 1]}`);
        counter += 1;
      } else {
        break;
      }
    }
    // console.log(
    //   `counter > sequence.length: ${counter} > ${sequence.length}; new seq: ${nums.slice(i, counter).join("~")}`
    // );
    if (counter > prevMax) {
      const old = sequence;
      prevMax = counter;
      // sequences.add(nums.slice(i, counter + 1).join(""));
      sequence = nums.slice(i, counter).join("~");
      // console.log(`updated sequence from "${old}" to "${sequence}"`);
    } else {
      // sequence = "";
      counter = 0;
    }
  }
  // console.log(`sequence: "${sequence}"`);
  let sum = sequence
    .split("~")
    .filter((x) => x)
    .reduce((res, ds) => {
      return res + parseInt(ds);
    }, 0);
  console.log(`------------
    sum: "${sum}"
------------`);

  if (sum === 0) {
    let max = 0;
    nums.forEach((num) => {
      if (num > max) max = num;
    });
    console.log(`sum is 0. biggest int is ${max}`);
    sum = max;
  }

  if (!nums.includes(sum)) {
    console.log("not found -> using it");
    return sum;
  } else {
    const result = nums.reduce((res, curr) => {
      console.log(`res: ${res}; curr:${curr}`);

      if (res < curr) {
        res = curr;
      }
      return res;
    }, sum);
    const final = result + 1;
    console.log(`result: "${result}"`);
    console.log(`final: ${final}`);
    return final;
  }
};

function isSequential(nums, i) {
  const result = nums[i] === nums[i - 1] + 1;
  // console.log(
  //   `isSequential -> i:${i} -> nums[i]: ${nums[i]} i-1:${i - 1} -> nums[i - 1]: ${nums[i - 1]} => result: ${result}`
  // );
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
