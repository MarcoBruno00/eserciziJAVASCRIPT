class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const developer = new Person("Mario", "Rossi");
console.log(`my name is ${developer.firstName} and my surname is ${developer.lastName}` );
