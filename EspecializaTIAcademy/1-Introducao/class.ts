class User {
  readonly firstName: string;
  protected lastName: string;
  protected age: number;
  // readonly => não permite alteração
  // protected => permite a alteração dessa dessa class e também dentro de alguma outra que se extender
  // private => só permite alteração dentro dessa class, ou seja, mesmo se extender essa class não poderá alterar

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName} ${this.age}`;
  }
}

let user = new User("Carlos", "Ferreira", 30);
console.log(user.getFullName());

class Admin extends User {
  public getFullName(): string {
    return `Dr. ${this.firstName} ${this.lastName}`;
  }
}
