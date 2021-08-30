let weather;

let month = 'january';

const weatherForMonths = {
  january: 'sunny',
  february: 'maybe sunny',
  march: 'its rainy and sunny'
};

// use the object to generate select options

const monthSelector = document.querySelector('#selectedMonth');

// monthSelector.addEventListener('change', function() {
//   month = this.value;
//
//   if(month === 'january') {
//     document
//       .getElementById('january-weather')
//       .innerHTML = ' : sunny';
//   } else if(month === 'february') {
//     document
//       .getElementById('february-weather')
//       .innerHTML = ' : maybe sunny';
//   }
// })


// || OR
// && AND
if(month === 'january') {
  document
    .getElementById('january-weather')
    .innerHTML = ' : sunny';

  const januaryWeather = document.getElementById('january')
    .getElementsByClassName('weather');

  januaryWeather[0].classList.add('bg-red-400','text-white')
} else if(month === 'february') {
  document
    .getElementById('february-weather')
    .innerHTML = ' : maybe sunny';
} else if(month === 'march') {
  document
    .getElementById('march-weather')
    .innerHTML = ' : its rainy and sunny';
}
else if(month === 'april') {
  document
    .getElementById('april-weather')
    .innerHTML = ' : its rainy';
}
else if(month === 'may') {
  document
    .getElementById('may-weather')
    .innerHTML = ' : maybe rainy';
} else {
  const divs = document
    .getElementsByClassName('weather');

  console.log(divs)
}

const divs = document
  .getElementsByClassName('weather');

console.log(divs)


// Switch
// switch (month) {
//   case 'january':
//     document
//       .getElementById('january-weather')
//       .innerHTML = ' : sunny';
//     break;
//   case 'february':
//     document
//       .getElementById('january-weather')
//       .innerHTML = ' : sunny';
//     break;
//   case 'march':
//     document
//       .getElementById('january-weather')
//       .innerHTML = ' : sunny';
//     break;
// }
