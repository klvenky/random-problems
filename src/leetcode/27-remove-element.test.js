// https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let position = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== val) {
      nums[position] = nums[i];
      position++;
    }
  }
  return position;
}

function testHelper(inputs, output) {
  const result = removeElement(...inputs);
  expect(result).toEqual(output.length);
  for (let i = 0; i < output.length; i += 1)
    expect(inputs[0][i]).toEqual(output[i]);
}

test("remove duplicates in sorted array", () => {
  testHelper([[3, 2, 2, 3], 3], [2, 2]);

  testHelper([[0, 1, 2, 2, 3, 0, 4, 2], 2], [0, 1, 3, 0, 4]);
});
