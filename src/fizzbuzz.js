export default (number) => {
  if (number === 0) return 0;

  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";

  if (number % 3 === 0) return "Fizz";

  if (number % 5 === 0) return "Buzz";

  return number;
};

function foo() {
  return "bla";
}

function bar() {
  return "bla";
}
