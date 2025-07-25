function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
factorialize(5);
// Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(factorialize(5)); // Output: 120
console.log(factorialize(0)); // Output: 1 (0! = 1