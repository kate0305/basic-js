import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!(arr instanceof Array)) throw new Error ("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return arr;
  
  let newArr = [];

  arr.forEach((i, index, arr) => {
      switch (i) {
        case '--discard-next':
          index !== arr.length - 1 ? arr.splice(i, 2) : i;
          break;
      
        case '--discard-prev':
          index !== 0 ? newArr.pop() : i;
          break;

        case '--double-next':
          index !== arr.length - 1 ? newArr.push(arr[index + 1]) : i;
          break;

        case '--double-prev':
          index !== 0 && arr[index - 2] !== '--discard-next' ? newArr.push(arr[index - 1]) : i;
          break;

        default:
        return newArr.push(i);
        break;
     }
  });
  return newArr;
}
