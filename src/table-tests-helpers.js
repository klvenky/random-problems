/**
 * Runs all the tests provided for a given function
 * @param {*} func - function which is under test
 * @param {*} inputs - array of values which are passed as inputs to func
 * @param {*} outputs - expected result from func
 */
function tableTestRunner(func, inputs, outputs) {
  for (let i = 0; i < inputs.length; i += 1) {
    const input = inputs[i];
    const expected = outputs[i];
    test(`${func.name}: ${JSON.stringify(input)}`, async () => {
      let result;
      try {
        result = await func(...input);
        expect(result).toEqual(expected);
      } catch (e) {
        if (expected instanceof Error) {
          expect(e).toEqual(expected);
        } else {
          throw e;
        }
      }
    });
  }
}

function tableTester(func, scenarios) {
  for (let i = 0; i < scenarios.length; i++) {
    const [input, output] = scenarios[i];
    runTest(func, input, output);
  }
}

function runTest(func, input, expected) {
  test(`${func.name}: ${JSON.stringify(input)}`, async () => {
    let result;
    try {
      result = await func(...input);
      expect(result).toEqual(expected);
    } catch (e) {
      if (expected instanceof Error) {
        expect(e).toEqual(expected);
      } else {
        throw e;
      }
    }
  });
}
module.exports = { tableTestRunner, tableTester, runTest };
