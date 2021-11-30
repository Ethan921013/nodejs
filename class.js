class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi, ${this.name}`;
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
  }
  study() {
    return `${this.name} is studying.`;
  }
}

const me = new Student("gg");
console.log(me.study());
console.log(me.greet());

const user = {
  nickname: "11",
  age: 22,
  email: "test@test.com",
};

const { nickname, ...personal } = user;
console.log(personal);

const array = [1, 2, 3, 4, 5];

const [head, ...rest] = array;

console.log(head, rest);

function foo(head, ...rest) {
  console.log(head);
  console.log(rest);
}

foo(1, 2, 3, 4);
