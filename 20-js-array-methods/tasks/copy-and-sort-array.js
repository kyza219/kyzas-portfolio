let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
  const copy = [...arr].sort();
}
