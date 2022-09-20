function arrayFunction() {
    let deepArray = [[1, 2], [3, 4], [5, 6, 7], [8, 9, 10, 11, 12], 13, 14, 15];
    var plainArray = [];
    for (let i = 0; i < deepArray.length; i++) {
        let remaining = deepArray[i];

        if (!Array.isArray(remaining)) {
            plainArray.push(remaining);
        }
        console.log("remaining", remaining);

        for (let j = 0; j < remaining.length; j++) {
            plainArray.push(remaining[j]);
        }

    }
    console.log("deepArray:", deepArray);
    console.log("plainArray:", plainArray);

}