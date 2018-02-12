var square = x => x * x;
console.log(square(5));

var user = {
  name: 'Andrew',
  sayHi: () => {
    console.log('Hello');
  },
  sayHiAlt () {
console.log(arguments);
    console.log(`Hi, I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt();k
