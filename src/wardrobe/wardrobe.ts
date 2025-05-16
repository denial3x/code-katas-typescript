export class WardrobeElement {
  constructor(
    readonly id: number,
    readonly length: number,
    readonly price: number,
  ) {}
}

export class WardrobeElements {
  private readonly _wardrobeElements: WardrobeElement[];

  constructor(wardrobeElements: WardrobeElement[]) {
    this._wardrobeElements = wardrobeElements;
  }

  public getCombinationsThatExactlyFill(length: number): WardrobeElement[][] {
    let solutions: WardrobeElement[][] = [];
    this._wardrobeElements.forEach((element: WardrobeElement) => {
      this.solve([element], length, solutions);
    });
    return solutions;
  }

  public getCheapestCombinationThatExactlyFill = (length: number): WardrobeElement[] =>
    this.getCombinationsThatExactlyFill(length).sort((a, b) => this.totalPriceFor(a) - this.totalPriceFor(b))[0];

  private solve(currentElements: WardrobeElement[], length: number, solutions: WardrobeElement[][]) {
    let currentSum = currentElements.reduce((acc, el) => acc + el.length, 0);
    if (currentSum === length && !this.containsSolution(solutions, currentElements)) {
      solutions.push(currentElements);
    } else if (currentSum < length) {
      this._wardrobeElements.forEach((element) => {
        const updatedElements = [...currentElements, element];
        this.solve(updatedElements, length, solutions);
      });
    }
  }

  private totalPriceFor = (wardrobeElements: WardrobeElement[]): number =>
    wardrobeElements.reduce((acc, el) => acc + el.price, 0);

  private containsSolution(solutions: WardrobeElement[][], currentElements: WardrobeElement[]) {
    for (let solution of solutions) {
      solution.sort((a, b) => a.id - b.id);
      currentElements.sort((a, b) => a.id - b.id);

      if (JSON.stringify(solution) === JSON.stringify(currentElements)) {
        return true;
      }
    }
    return false;
  }
}
