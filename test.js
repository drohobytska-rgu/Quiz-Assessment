let rounds = [
    ["Round 1", "Round 2", "Round 3", "Round 4", "Round 5"],
    ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"],
    [1, 2, 3, 4, 5], // correctAnswers
    [6, 7, 8, 9, 10], // wrongAnswers
    [11, 12, 13, 14, 15] // roundScores
];

for (let i = 0; i < rounds.length; i++) { // проходится по внешнему массиву
    let row = ""; 
    for (let j = 0; j < rounds[i].length; j++) { // проходится по внутреннему массиву 5 раз на каждый проход по внешнему
        row += String(rounds[i][j]).padEnd(15); // добавляет строку с индексами внешнего и внутреннего массивов и делает ее размер равным 15 символам
    }
    console.log(row);
}