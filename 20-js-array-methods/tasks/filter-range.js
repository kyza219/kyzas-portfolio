let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log();
filtered; // 3,1 (matching values)

console.log();
arr; // 5,3,8,1 (not modified)

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
