function frequency() {
    let arr = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8, 8];

    let frequency = arr.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});

    sorting = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
    console.log(sorting);

    var result = [];

    for (k in sorting) {
        console.log(sorting[k], [1]);
        for (var i = 0; i < sorting[k][1]; i++) {
            result.push(sorting[k][0]);
        }
    }
    console.log(result);
}