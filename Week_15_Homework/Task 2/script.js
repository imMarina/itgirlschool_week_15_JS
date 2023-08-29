// 1. Создайте пустой массив с именем `numbers`
const numbers = [];

// 2. Заполните массив `numbers` целыми числами от -10 до 10 (включительно) с помощью цикла.
for(let i = -10; i <= 10; i++) {
    numbers.push(i);
}
document.write(numbers);
console.log(numbers); // [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10];

// 3. Используя **циклы**, выполните следующие операции над массивом `numbers`:
// - Удалите все отрицательные числа из массива

const positiveNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        positiveNumbers.push(numbers[i]);
    }
}
console.log(positiveNumbers);

/* const positiveNumbers = numbers.filter(function (num) {
  return num >= 0;
});
console.log(positiveNumbers); // [0,1,2,3,4,5,6,7,8,9,10]; */

/* slice
 numbers.splice(0, 10)
 console.log(numbers); */

// - Возведите каждое число в квадрат

const squareNumbers = [];
for (let i = 0; i < positiveNumbers.length; i++) {
    squareNumbers.push(positiveNumbers[i] * positiveNumbers[i]);
}
console.log(squareNumbers); // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/* const squareNumbers = positiveNumbers.map(function (item) { //Берём каждый элемент массива
  return item * item; //Возводим каждый элемент в квадрат
}); 
console.log(squareNumbers); // [0,1,4,9,16,25,36,49,64,81,100] */


// - Отсортируйте числа в порядке убывания

for (let i = 0; i < squareNumbers.length - 1; i++) {
  for (let j = 0; j < squareNumbers.length - i - 1; j++) {
      if (squareNumbers[j] < squareNumbers[j + 1]) {
          const temp = squareNumbers[j];
          squareNumbers[j] = squareNumbers[j + 1];
          squareNumbers[j + 1] = temp;
      }
  }
}
console.log(squareNumbers);

/* const reverseNumbers = squareNumbers.sort((a, b) => b - a); // 
console.log(reverseNumbers); */


// 4. Выведите полученный массив `numbers` в консоль
console.log(squareNumbers);
