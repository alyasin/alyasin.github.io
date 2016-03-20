
do { var number = prompt('Введите целое число') } 
while (isNaN(number) || ((number % 1) != 0));

do { var extent = prompt('Введите показатель степени, целое число') } 
while (isNaN(extent) || ((extent % 1) != 0));

if (number == -0) {number = Math.abs(number)};
if (extent == -0) {extent = Math.abs(extent)};

console.log(pow(number, extent));

function pow (number, extent) {
  
  var numberInExtent = 1; //  if ((number != 0) && (extent == 0)) 
  
  if ((number == 0) && (extent <= 0)) {
    numberInExtent = 'Не определён';
  };
  
  if ((number != 0) && (extent < 0)) {
    for (var i = extent; i < 0; i++) {
      numberInExtent = numberInExtent * number;
    };
    numberInExtent = 1 / numberInExtent;
  };
  
  for (var i = 0; i < extent; i++) {
    numberInExtent = numberInExtent * number;
  };

  return numberInExtent;
};

