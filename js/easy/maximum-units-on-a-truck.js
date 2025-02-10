/**
 * Idea:
 * - Use a greedy strategy: always take boxes that give the most units first.
 * - Sort boxTypes in descending order by units-per-box.
 * - For each type, load as many boxes as possible without exceeding truckSize.
 * - If full type doesn't fit, only take the remaining capacity.
 * - Accumulate units accordingly and stop when the truck is full.
 *
 * Algorithm:
 * 1. Sort boxTypes by units-per-box (b[1]) descending.
 * 2. Initialize totalBoxes = 0 and totalUnits = 0.
 * 3. For each box type while truck has space:
 *      • Let max = numberOfBoxes of this type.
 *      • Let diff = truckSize - (totalBoxes + max)
 *      • If diff > 0 → take all max boxes.
 *      • Else → take only remaining capacity (max + diff).
 *      • Add units = boxesTaken * unitsPerBox.
 * 4. Return totalUnits.
 *
 * Time:  O(n log n)   (sorting dominates)
 * Space: O(1)         (sorting done in-place, constant extra memory)
 */

var maximumUnits = function (boxTypes, truckSize) {
  const sortedBoxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
  let totalBoxes = 0;
  let totalUnits = 0;
  for (let i = 0; i < sortedBoxTypes.length && totalBoxes < truckSize; i++) {
    let max = sortedBoxTypes[i][0];
    const diff = truckSize - (totalBoxes + max);
    if (diff > 0) {
      totalBoxes += max;
      totalUnits += max * sortedBoxTypes[i][1];
    } else {
      totalBoxes += max + diff;
      totalUnits += (max + diff) * sortedBoxTypes[i][1];
    }
  }

  return totalUnits;
};

console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  ) == 91
);
