// Thís
const person = {
    firstName: 'Tuan',
    lastName: 'Huy',
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  console.log(person.fullName());

// Prototype
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Thêm method fullName vào prototype của hàm Person
  Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
  };
  
  const huy = new Person('yuh', 'erus');
  console.log(huy.fullName()); 
  

// First-class function
    // 1. Có thể gán vào biến
    function sayHello() {
        console.log('Hello !');
    }
    var hello = sayHello();
    // 2. Có thể truyền như tham số
    function add(a, b) {
        return a + b;
    }
    
    function subtract(a, b) {
        return a - b;
    }
    
    function calculate(operation, a, b) {
        return operation(a, b);
    }
    
    console.log(calculate(add, 5, 3));     
    console.log(calculate(subtract, 10, 5)); 
    // 3. Có thể trả về từ một hàm khác
    function multiplyBy(num) {
        return function(a) {
        return a * num;
        };
    }
    var multiplyByFive = multiplyBy(5);
    console.log(multiplyByFive(10));

    // 4. Được lưu trữ trong một cấu trúc dữ liệu
    var functions = [sayHello, add, subtract, multiplyByFive];
    console.log(functions[1](5, 3));
    var functionObject = {
        sayHello: sayHello,
        add: add,
        subtract: subtract,
        multiplyByFive: multiplyByFive
    }
    console.log(functionObject.multiplyByFive(10));

// IIFE
(function() {
    alert('Hello World!');
    console.log('Hello World!');
})();

var i = 0;
(function recursive() {
    i++;
    console.log(i);
    if (i < 10) {
        recursive();
    }
})();

// Closure
function outerFunction() {
    var outerVariable = 0;
  
    function innerFunction() {
      outerVariable++;
      console.log("Hello " + outerVariable);
    }
  
    return innerFunction;
}
  
var closureFunction = outerFunction();
closureFunction();
closureFunction();
closureFunction();

var closureFunction2 = outerFunction();
closureFunction2();
closureFunction2();
closureFunction2();

// EcmaScript 6
// 1. Let const
// Biến được khai báo bằng 'let' có phạm vi block
function demoLet() {
    if (true) {
      let x = 10;
      console.log(x); // Output: 10
    }
    // console.log(x);
    // Không thể truy cập biến x ở đây vì x chỉ có phạm vi trong block if
  }
  demoLet(); 
  // Biến không thay đổi được khai báo bằng 'const'
  const PI = 3.14159;
  // PI = 3; // Lỗi: Không thể gán lại giá trị cho biến 'const'
// 2. Template literals
const myName = 'Huy';
const age = 20;

// Sử dụng template literals để kết hợp chuỗi và biểu thức JavaScript
const message = `My name is ${myName} and I am ${age} years old.`;
console.log(message); 

// 3. Multi-line string
const multilineString = 
` Line 1
 Line 2
`;
console.log(multilineString);

// 4. Destructuring
const person3 = ['Nguyen', 'Huy', '20'];
const [firstName1, lastName1, age1] = person3;
console.log(firstName1, lastName1, age1);

// 5. Rest parameters
const [firstName, ...rest] = person3;
console.log(firstName, rest);

// 6. Default parameters
function greeting(name = 'Huy') {
    console.log(`Hi, ${name}!`);
}

greeting(); // Hi, Huy! - trường hợp mặc định
greeting('yuherus'); // Hi, yuherus!


// 7. Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// 8. Object literals
const firstName2 = 'Huy';
const lastName2 = 'Nguyen';
const age2 = 20;
const fieldName = 'college';

const person4 = {
    firstName2,
    lastName2,
    age2,
    getName() {
        return `${this.firstName2} ${this.lastName2}`;
    },
    [fieldName]: 'Hanoi University of Science and Technology'
};

console.log(person4);
console.log(person4.getName());

//9. Classes
class Person6 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  
  const john = new Person6('Tuan', 'Huy');
  console.log(john.fullName()); 
  
// 10. Modules
import { firstName6, lastName6 } from './person.js';
console.log(firstName6 + ' ' + lastName6); // Output: John Doe

// Arrow Function
// 1. Không cần dùng từ khóa function
const sayHello2 = (name) => {
    console.log(`Hello ${name} !`);
};
sayHello2('Huy');
// 2. Không cần dùng từ khóa return
const sum = (a, b) => a + b;
console.log(sum(2, 6));
// 3. Không cần dùng dấu ngoặc đơn nếu chỉ có một tham số
const square = x => x * x;
console.log(square(2));

// Promise
// Hàm tải dữ liệu từ API bằng cách sử dụng Promise
function getUsersFromApi() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Tạo Promise
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then(response => {
        // Kiểm tra trạng thái của response
        if (!response.ok) {
          // Nếu request không thành công, reject với thông báo lỗi
          reject('Failed to fetch users');
        }
        // Chuyển đổi dữ liệu thành JSON và resolve với kết quả
        return response.json();
      })
      .then(data => {
        // Kết quả thành công, resolve với danh sách người dùng
        resolve(data);
      })
      .catch(error => {
        // Xử lý lỗi trong quá trình fetch hoặc chuyển đổi JSON
        reject('Error while fetching users: ' + error);
      });
  });
}

// Sử dụng hàm getUsersFromApi
getUsersFromApi()
  .then(users => {
    // Xử lý danh sách người dùng
    console.log('User list:', users);
  })
  .catch(error => {
    // Xử lý lỗi
    console.error(error);
  });


// Async/Await

async function getUsersFromApi2() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  const data = await response.json();
  return data;
}

const users = getUsersFromApi2()
console.log(users);



  
    