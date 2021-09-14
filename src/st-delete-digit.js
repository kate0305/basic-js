import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = n.toString().split('').map(i => +i);
  let min = Math.min.apply(null, n);
  n.splice(n.indexOf(min), 1);
  return +(n.join(''));
}
