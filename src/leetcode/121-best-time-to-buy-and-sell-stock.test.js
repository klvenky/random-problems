// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  // find the least day when we can buy.
  // go around & see if there's any better value after it.
  let buyValue = Number.MAX_SAFE_INTEGER;
  let buyIndex = -1;
  let sellValue = 0;
  let sellIndex = -1;
  prices.forEach((cPrice, index) => {
    if (cPrice < buyValue) {
      console.log(`c1 -> @${index} -> ${cPrice}`);
      buyIndex = index;
      buyValue = cPrice;
      if (sellIndex < index) {
        console.log(`c1-1 -> si:${sellIndex} -> ${index}`);
        sellIndex = -1;
        sellValue = 0;
      }
    }

    if (buyIndex < index && sellValue < cPrice) {
      console.log(
        `c2 -> @${index} -> csi:'${sellIndex}' -> csv:'${sellValue}'`,
      );

      sellIndex = index;
      sellValue = cPrice;
    }

    console.log(
      JSON.stringify({
        cPrice,
        index,
        buyIndex,
        buyValue,
        sellValue,
      }),
    );
  });

  console.log(`loop done`);
  console.log({ least: buyValue, highestBuyVal: sellValue });
  return sellValue - buyValue > 0 ? sellValue - buyValue : 0;
}

const scenarios = [
  // {
  //   input: [7, 1, 5, 3, 6, 4],
  //   result: 5,
  // },
  // {
  //   input: [7, 6, 4, 3, 1],
  //   result: 0,
  // },
  {
    input: [2, 4, 1],
    result: 2,
  },
  // {
  //   input: [1, 2],
  //   result: 1,
  // },
];

test.skip("maxProfit", () => {
  for (const scenario of scenarios) {
    const actual = maxProfit(scenario.input);
    expect(actual).toEqual(scenario.result);
  }
});
