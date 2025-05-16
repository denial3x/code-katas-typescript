import { describe, expect, test } from '@jest/globals';
import { WardrobeElement, WardrobeElements } from './wardrobe.ts';

describe('Wardrobe Elements Calculator should', () => {
  test('return all possible combinations that fill exactly certain length', () => {
    let fiftyLengthElement = new WardrobeElement(1, 50, 59);
    let seventyFiveLengthElement = new WardrobeElement(2, 75, 62);
    let oneHundredLengthElement = new WardrobeElement(3, 100, 90);
    let oneHundredAndTwentyElement = new WardrobeElement(4, 120, 111);

    let wardrobeElements = new WardrobeElements([
      fiftyLengthElement,
      seventyFiveLengthElement,
      oneHundredLengthElement,
      oneHundredAndTwentyElement,
    ]);

    let combinations = wardrobeElements.getCombinationsThatExactlyFill(250);

    expect(combinations).toHaveLength(5);
    console.log(combinations);
    expect(JSON.stringify(combinations)).toEqual(
      JSON.stringify([
        [fiftyLengthElement, fiftyLengthElement, fiftyLengthElement, fiftyLengthElement, fiftyLengthElement],
        [fiftyLengthElement, fiftyLengthElement, fiftyLengthElement, oneHundredLengthElement],
        [fiftyLengthElement, fiftyLengthElement, seventyFiveLengthElement, seventyFiveLengthElement],
        [fiftyLengthElement, oneHundredLengthElement, oneHundredLengthElement],
        [seventyFiveLengthElement, seventyFiveLengthElement, oneHundredLengthElement],
      ]),
    );
  });

  test('return the cheapest combination that fill exactly certain length', () => {
    let fiftyLengthElement = new WardrobeElement(1, 50, 59);
    let seventyFiveLengthElement = new WardrobeElement(2, 75, 62);
    let oneHundredLengthElement = new WardrobeElement(3, 100, 90);
    let oneHundredAndTwentyElement = new WardrobeElement(4, 120, 111);

    let wardrobeElements = new WardrobeElements([
      fiftyLengthElement,
      seventyFiveLengthElement,
      oneHundredLengthElement,
      oneHundredAndTwentyElement,
    ]);

    let combination = wardrobeElements.getCheapestCombinationThatExactlyFill(250);

    expect(JSON.stringify(combination)).toEqual(
      JSON.stringify([seventyFiveLengthElement, seventyFiveLengthElement, oneHundredLengthElement]),
    );
  });
});
