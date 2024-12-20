/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */

/*
How the reduce function work 
it takes (callback func , initialValue) as 2 arguments returun single value
it makes loop on each element of the array and save this resulsts (accumulator, (this[i], i , this))
*/

Array.prototype.myReduce = function (callbackFn, initialValue) {
    // Don't forget to throw an error because it's important test case 😉
  if(this.length === 0 && initialValue === undefined){
    throw new TypeError('There Is no array and no initial value')
  }
  // Implementing the callback parts
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  //   Implementing the loop

  for (let i = startIndex; i < this.length; i++) {
    if (this[i] !== undefined) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};
