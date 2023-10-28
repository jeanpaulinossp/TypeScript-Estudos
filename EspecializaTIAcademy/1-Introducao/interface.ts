interface UserInterface {
  firstName: string;
  lastName: string;
  age: number;
  getFullName?(): string;
}

const getUser = (user: UserInterface): string => {
  return `${user.firstName} ${user.lastName}, age: ${user.age}`;
};

let usuario = {
  firstName: "Jean",
  lastName: "Paulino",
  age: 31,
};

console.log(getUser(usuario));

class Person implements UserInterface {
  firstName: string;
  lastName: string;
  age: number;

  constructor(fN: string, lN: string, age: number) {
    this.firstName = fN;
    this.lastName = lN;
    this.age = age;
  }

  getFullName?(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("Jean", "Paulino", 31);
console.log(getUser(person));
