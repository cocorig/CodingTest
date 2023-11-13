function solution(s) {
    const string = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
  ];

  for (let i = 0; i < string.length; i++) {
    while (s.includes(string[i])) {
      s = s.replace(string[i], i);
    }
  }

  return parseInt(s);
}