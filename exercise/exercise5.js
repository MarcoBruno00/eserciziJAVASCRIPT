const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "simon"

console.log(person1);
console.log(person2);


/* la ragione per cui viene modificato e dato sia dalla posizione di person2.firstname anche perche
 person2 non è una copia indipendente di person1, ma piuttosto una variabile dell oggetto person1 , quindi quando
 modifichiamo qualcosa non stiamo accedendo a person 2 ma a person 1 */