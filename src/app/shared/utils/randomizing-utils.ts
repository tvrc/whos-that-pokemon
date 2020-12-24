export class RandomizingUtils {

  static getRandomArrayElement(array: any[]): any {
    if (array.length === 1) {
      return array[0];
    } else {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }
  }

  static getRandomNumberFromRange(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }
}
