function sum(...numbers) {
    return numbers.reduce((total, number) => total + number);
}



console.log(sum(1, 2, 3, 4, 5));