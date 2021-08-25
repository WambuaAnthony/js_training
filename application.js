/**
 * This is the application code.
 *
 * @author Bernard Nandwa
 */

function withAParameter(a = "apple"){

}

function withMultipleParameters(a,b,c,d = "dog") {

}

function compareNumbers(number1, number2 = 0){
  console.log(number1);
  console.log(number2);

  const comparison = number1 === '10';

  document
    .getElementById('maths-2')
    .innerHTML = comparison;
}

function sayHello() {
  const originalNumber = 23;

  // BODMAS
  const sum = 23 + 24 / 8 + 2 * 7 - 3;

  const product = originalNumber * 4;

  const division = originalNumber ** 4;

  const displayString = 'The original number is: ' + originalNumber + ' and the sum is: ' + sum + ' and the product is: ' + product + ' and the division is: ' + division

  document
    .getElementById('maths-1')
    .innerHTML = displayString;

  // Compare numbers
  compareNumbers(10, 5);
}

function fruitCollection() {
  const fruits = ['banana','pineapple','apple', 'avocado'];

  const collections = {
    fruits: ['banana','pineapple','apple', 'avocado'],
    cars: ['BMW', 'Mercedes', 'Toyota', 'Skoda', 'Ferrari'],
    counties: ['Nairobi', 'Kiambu', 'Mombasa'],
  }

  return fruits;
}

function math101() {
  let number = 23;
  let floatingNumber = 5.87;
  let octalNumber = 0o755;
  let exponentNumber = 2e6;

  // Check the type of variable
  console.log(typeof number);
  console.log(typeof floatingNumber);
  console.log(typeof octalNumber);
  console.log(typeof exponentNumber);

  // Sum
  const originalNumber = 23;
  const sum = originalNumber + 24;

  // Subtraction
  const difference = originalNumber - 24;

  // Multiplication
  const product = originalNumber * 4;

  // Division
  const division = originalNumber / 4;

  // Remainder
  const remainder = originalNumber % 4;

  // Exponent
  const exponent = originalNumber ** 4;
}

// call the function
sayHello();


