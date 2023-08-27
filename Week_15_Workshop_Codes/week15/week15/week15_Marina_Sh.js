//Задание 1
// Выведите числа от 1 до 10 в консоль

for (let i = 0; i < 11; i++) {
  console.log(i)
}


//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) 
          continue;
      console.log(i); 
  }


//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

let i = 10;
for (; i > 0; i--) {
  console.log(i)
}


//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

for (let i = 1; i <= 10; i++) {
    let result = i * 5;
    console.log(`${i} * 5 = ${result}`);
}


//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль

let array = [];
for (let i = 1; i <= 100; i++) {
    array.push(i)
}
console.log(array);

let reduceArray = array.reduce(function (previousValue, item, index, array) {
  return item + previousValue;
}, 0);
console.log(reduceArray);

// second option 

function calculateTotal(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(calculateTotal(100))


//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const arrayTwo = [1, 2, 3, 4, 5];

for (let i = 0; i < arrayTwo.length; i++) {
    console.log(arrayTwo[i]);
}


//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
console.log(sum);


//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";

let animals = ["Кот", "Рыба", "Лемур"];

for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + " - прекрасное животное";
  }
console.log(animals);


//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';

for (let letter of str) {
    console.log(letter);
}


//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6

for (let num of arrayTwo) {
    console.log(num);
}


//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];

for (let word of sentences) {
  console.log(word);
}

// const getWord = str => str.split(' ').map(word => word.length);
// console.log(getWord(sentences));


//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7

let sumTwo = 0;
for (let num of numbers) {
    sumTwo += num;
}
console.log(sumTwo);


//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];

list.forEach(function (word) {
    return console.log(word.length);
    });


//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр

const words = ['Hello', 'world', '!'];

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const upperCaseWord = word.toUpperCase();
    words[i] = upperCaseWord;
}
console.log(words); 


//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

const countVowels = string => [...string].filter(letter => vowels.includes(letter)).length;
console.log(countVowels(greeting));        


//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними

let letters = ['a', 'b', 'c'];
let string = '';
letters.forEach(function(item, index) {
  string = string + item + ' ';
  });
console.log(string);  // => 'a b c'


//Задание 17 
// Выведите числа от 1 до 10 в консоль используя цикл while

let j = 0;
while (j < 11) {
    console.log(j)
    j++
}


//Задание 18 
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while

let k = 10;
while (k > 0) {
    console.log(k)
    k--
}


//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

for (let number of allNumbers) {
  if (number >= 0) {
    console.log(number)
  } else break;
}

/* while (allPositive) {
    console.log(allNumbers);
    break;
}
const result = allNumbers.filter(item => item > 0); */


//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];

for (let num of random) {
    if (num >= 0) {
      console.log(num)
    } else break;
  }

// const positiveNumbers = random.filter(function (num) {
//  return num >= 0;
// });


//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

let printNum = [];
let i = 1;

do {
  console.log(i);
  printNum.push(i);
  i++;
} while (i < 101);

console.log(printNum);

const isThree = (num) => num % 3 !== 0; 
const checkThree = printNum.filter(isThree);

console.log(checkThree);


//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100



//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

titles = document.querySelectorAll('h4');
titles.forEach(function(item){
    item.style.backgroundColor = '#33C3F0';
});


//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

for (let i = 0; i < 6; i++) {
    randomString += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}
console.log(randomString);

// Second option - function 
/* function genRandonString(length) {
    
    for (let i = 0; i < length; i++) {
        randomString += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return randomString;
}
console.log(genRandonString(6));
*/