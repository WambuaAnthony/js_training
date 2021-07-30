/**
 * This is the application code.
 *
 * @author Bernard Nandwa
 */
function sayHello() {
  var greeting = 'Goodnight!'
  greeting = 'Good Morning'

  const greetingStart = "Habari ";

  let salamu;
  salamu = 'ya mchana'; // Declaration/initializing
  salamu = 'ya asubuhi'; // reassigning

  document
    .querySelector('.text')
    .innerHTML = greetingStart + salamu;

  return 'Hello World, This is my code!';
}

// call the function
sayHello();


