class Person {
  constructor(firstName , lastName , age) {
  this.firstName= firstName
  this.lastName = lastName
  this.age = age
  }
  get fullName(){
    return this.firstName + " " + this.lastName
  }

  set newValue(age) {
    if(age > 1)
    this.age = age
  }
    
  
  
}


const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
person.age = 32;
console.log(person.fullName);
console.log(person.age);