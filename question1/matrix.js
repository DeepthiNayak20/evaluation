function matrix() {
    let n = prompt("Enter the range:");
    let matrix = [];
    let matrix1 = [];

    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    if (n > 0 && n <= 5) {
        for (let i = 0; i < n * n; i++) {
            matrix.push(alphabet[i]);
        }

        for (let j = 0; j < n; j++) {
            matrix1.push(matrix.splice(0, n));
        }
        console.log("Matrix:", matrix1);
        let result = matrix1[0].map((_, i) => matrix1.map(row => row[i]));
        console.log("Final output:", result.reverse());
    } else {
        alert("enter values between 1 to 5")
    }

}