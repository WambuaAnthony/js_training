let weather;

const month = 'january';

// || OR
// && AND
if(month.length < 4 && month === 'january') {
  // Print the weather for january on the browser
  // document
  //   .getElementById('january-weather')
  //   .innerHTML = ' : sunny';
} else if(month === 'february') {
  // Print the weather for jnuary on the browser
  document
    .getElementById('february-weather')
    .innerHTML = ' : maybe sunny';
} else if(month === 'may') {
  // Print the weather for jnuary on the browser
  document
    .getElementById('may-weather')
    .innerHTML = ' : maybe rainy';
} else {
  const divs = document
    .getElementsByClassName('weather');
}


// Switch
switch (month) {
  case 'january':
    document
      .getElementById('january-weather')
      .innerHTML = ' : sunny';
    break;
  case 'february':
    document
      .getElementById('january-weather')
      .innerHTML = ' : sunny';
    break;
  case 'march':
    document
      .getElementById('january-weather')
      .innerHTML = ' : sunny';
    break;
}
